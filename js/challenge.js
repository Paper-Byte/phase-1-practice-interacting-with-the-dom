const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const counter = document.querySelector('#counter');
const heartBtn = document.querySelector('#heart');
const pauseBtn = document.querySelector('#pause');
const commentBtn = document.querySelector('#submit');
const commentForm = document.querySelector('#comment-input');
const commentList = document.querySelector('#list');
let numbersLike = {
  0: 0,
  1: 0,
};
let intervalId = setInterval(() => counter.innerText++, 1000);

const handleInterval = () => {
  if (!intervalId) {
    intervalId = setInterval(() => counter.innerText++, 1000);
  }
};

const handlePause = () => {
  if (pauseBtn.innerText === 'pause') {
    clearInterval(intervalId);
    intervalId = null;
    pauseBtn.innerText = 'resume';
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    heartBtn.disabled = true;
    commentBtn.disabled = true;
  } else {
    handleInterval();
    pauseBtn.innerText = 'pause';
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    heartBtn.disabled = false;
    commentBtn.disabled = false;
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newComment = document.createElement('p');
  newComment.innerText = commentForm.value;
  commentList.appendChild(newComment);
  commentForm.value = null;
};

const handleLikes = () => {
  for (const number in numbersLike) {
    console.log(numbersLike[number]);
  }
};

minusBtn.addEventListener('click', () => counter.innerText--);
plusBtn.addEventListener('click', () => counter.innerText++);
pauseBtn.addEventListener('click', handlePause);
commentBtn.addEventListener('click', handleSubmit);
heartBtn.addEventListener('click', handleLikes);
