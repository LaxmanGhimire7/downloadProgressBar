let buttons = document.querySelectorAll("#nextButton, #downloadBtn");
let progress = document.querySelector(".progress-text");
let progressInner = document.querySelector(".progress-inner");
let grow = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let num = Math.floor(50 + Math.random() * 50);

    btn.style.pointerEvents = "none";
    var int = setInterval(() => {
      grow++;
      progress.innerHTML = grow + "%";
      progressInner.style.width = grow + "%";
    }, num);

    setTimeout(() => {
      clearInterval(int);
      btn.innerHTML = "Downloaded"
      btn.style.opacity = 0.5
    }, num * 100);

    

  });
});
