const inputOne = document.getElementById('input-1');
const circleOne = document.querySelector('.placeholder-1');
const inputTwo = document.getElementById('input-2');
const circleTwo = document.querySelector('.placeholder-2');
const inputThree = document.getElementById('input-3');
const circleThree = document.querySelector('.placeholder-3');

inputOne.addEventListener('focus', () => {
  circleOne.style.display ='none';
});

inputOne.addEventListener('blur', () => {
  if(inputOne.value){
    return;
  }
  circleOne.style.display ='block';
});

inputTwo.addEventListener('focus', () => {
  circleTwo.style.display ='none';
});

inputTwo.addEventListener('blur', () => {
  if(inputTwo.value){
    return;
  }
  circleTwo.style.display ='block';
});

inputThree.addEventListener('focus', () => {
  circleThree.style.display ='none';
});

inputThree.addEventListener('blur', () => {
  if(inputThree.value){
    return;
  }
  circleThree.style.display ='block';
});

