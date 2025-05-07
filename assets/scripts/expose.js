// expose.js

// gets horn selector, horn display, horn audio
const hornSelect = document.getElementById('horn-select');
const imageShown = document.querySelector('#expose img');
const hornAudio = document.querySelector('audio');

// gets volume reading, volume icon
const volumeScale = document.getElementById('volume');
const volumeIcon = document.querySelector('#volume-controls img');

// gets button input, imports confetti
const playSound = document.querySelector('button');
const confetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

function init() {

  hornSelect.addEventListener('change', (event) => {

    const selectedHorn = event.target.value;

    if (selectedHorn == 'air-horn') 
    {
      imageShown.src = 'assets/images/air-horn.svg';
      imageShown.alt = 'Air Horn';
      hornAudio.src = 'assets/audio/air-horn.mp3';
    } 
    else if (selectedHorn == 'car-horn') 
    {
      imageShown.src = 'assets/images/car-horn.svg';
      imageShown.alt = 'Car Horn';
      hornAudio.src = 'assets/audio/car-horn.mp3';
    } 
    else if (selectedHorn == 'party-horn')
    {
      imageShown.src = 'assets/images/party-horn.svg';
      imageShown.alt = 'Party Horn';
      hornAudio.src = 'assets/audio/party-horn.mp3';
    } 
    else
    {
      imageShown.src = 'assets/images/no-image.png';
      imageShown.alt = 'No Image Selected';
      hornAudio.src = '';
    }
    
  });

  volumeScale.addEventListener('input', (event) => {

    const inputValue = event.target.value;
    hornAudio.volume = inputValue / 100; // actually changes volume

    if (inputValue == 0)
    {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume Level 0';
    } 
    else if (inputValue < 33) 
    {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume Level 1';
    } 
    else if (inputValue < 67) 
    {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume Level 2';
    } 
    else 
    {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume Level 3';
    }

  });

  playSound.addEventListener('click', () => {

    hornAudio.play();

    if (hornSelect.value == 'party-horn') {
      confetti.addConfetti();
    }

  });

}