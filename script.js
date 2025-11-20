let buttons = document.querySelectorAll("#nextButton, #downloadBtn");
let progress = document.querySelector(".progress-text");
let progressInner = document.querySelector(".progress-inner");
let grow = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.style.pointerEvents = "none";
    });
    let num = Math.floor(50 + Math.random() * 50);

    var int = setInterval(() => {
      grow++;
      progress.innerHTML = grow + "%";
      progressInner.style.width = grow + "%";
    }, num);


    setTimeout(() => {
      clearInterval(int);
      buttons.forEach((b) => {
        b.innerHTML = "Downloaded";
      });

      btn.style.opacity = 0.5;
    }, num * 100);
  });
});
