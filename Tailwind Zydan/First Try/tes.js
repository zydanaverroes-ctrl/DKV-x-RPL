let percent = 0;
let percentText = document.getElementById("percent");
let bar = document.getElementById("progressFill");

let load = setInterval(() => {
  percent++;
  percentText.textContent = percent;
  bar.style.width = percent + "%";

  if (percent >= 100) {
    clearInterval(load);
  }
}, 60); // atur biar lebih lambat/cepet
