// explore.js

// for loading voice types
const voiceSelect = document.getElementById('voice-select');
let voiceTypes = [];

// for upon button press
const pressToTalk = document.querySelector('button');
const textArea = document.getElementById('text-to-speak');

// for updating face icon
const faceIcon = document.querySelector('#explore img');

window.addEventListener('DOMContentLoaded', init);

function init() {
  loadVoices();

  // Listen for voiceschanged event to reload voices (important for Chrome)
  window.speechSynthesis.onvoiceschanged = loadVoices;

  pressToTalk.addEventListener('click', () => {

    const text = textArea.value;
    const selectedVoice = voiceSelect.value;

    if (!text || selectedVoice === 'select') { return; }
  
    const spokenText = new SpeechSynthesisUtterance(text);
    spokenText.voice = voiceTypes[selectedVoice];

    spokenText.onstart = () => {
      faceIcon.src = 'assets/images/smiling-open.png';
    };

    spokenText.onend = () => {
      faceIcon.src = 'assets/images/smiling.png';
    };

    window.speechSynthesis.speak(spokenText);

  });
}

function loadVoices() {

  voiceTypes = window.speechSynthesis.getVoices();

  // set default value
  voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

  voiceTypes.forEach((voice, i) => {

    const option = document.createElement('option');
    option.value = i;
    option.textContent = `${voice.name} (${voice.lang})${voice.default ? ' [default]' : ''}`;
    voiceSelect.appendChild(option);

  });

}