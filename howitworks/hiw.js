document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(".content .subheader").textContent =
        tab.textContent;
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(".content .subheader").textContent =
        tab.textContent;
    });
  });
});
document.getElementById("signup-button").addEventListener("click", function () {
  alert("Sign up functionality coming soon!");
});
