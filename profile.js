document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.querySelector(".back-button");
  const iframeCard = document.getElementById("iframeCard");
  const iframeOverlay = document.getElementById("iframeOverlay");

  backButton.addEventListener("click", () => {
    iframeCard.style.display = "none";
    iframeOverlay.style.display = "none";
  });

  iframeOverlay.addEventListener("click", () => {
    iframeCard.style.display = "none";
    iframeOverlay.style.display = "none";
  });
});
