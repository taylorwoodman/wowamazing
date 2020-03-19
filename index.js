function playSound() {
  const sound = document.getElementById("audio");

  sound.play();
}

function handleClick() {
  const box1 = document.getElementsByClassName("box1");
  document.getElementById("audio").loop = true;
  for (i = 0; i < box1.length; i++) {
    box1[
      i
    ].style.background = `url("https://media.giphy.com/media/5ttRvCRSnVKZeiMWac/giphy.gif")`;
  }
}

function offClick() {
  const box1 = document.getElementsByClassName("box1");
  document.getElementById("audio").loop = false;
  for (i = 0; i < box1.length; i++) {
    box1[i].style.background = "rgba(255, 255, 255, 0)";
  }
}
