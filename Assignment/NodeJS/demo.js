// task 1
height = window.innerHeight;
width = window.innerWidth;

// task 2
const historyForward = () => {
  window.history.forward();
};
const historyBackward = () => {
  window.history.back();
};

// task 3
localStorage.setItem("user", "user-data");
localStorage.getItem("user");

history.length;
history.go(0);
history.go(-1);
