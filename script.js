document.addEventListener("DOMContentLoaded", function () {
  function setProgressWidths() {
    const progressPython = document.getElementById("progress-python");
    const progressHtml = document.getElementById("progress-html");
    const progressCss = document.getElementById("progress-css");

    if (window.innerWidth <= 480) {
      progressPython.style.width = "70%";
      progressHtml.style.width = "60%";
      progressCss.style.width = "65%";
    } else if (window.innerWidth <= 768) {
      progressPython.style.width = "80%";
      progressHtml.style.width = "70%";
      progressCss.style.width = "75%";
    } else {
      progressPython.style.width = "90%";
      progressHtml.style.width = "80%";
      progressCss.style.width = "85%";
    }
  }

  // Set initial widths
  setProgressWidths();

  // Adjust widths on window resize
  window.addEventListener("resize", setProgressWidths);
});
