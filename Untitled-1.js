/* ==========================================
   BIHS SHARED FOOTER LOADER
   ========================================== */

document.addEventListener("DOMContentLoaded", async function () {

  const container = document.getElementById("bihs-footer-container");

  if (!container) return;

  try {

    const response = await fetch("footer.html");

    if (!response.ok) {
      throw new Error("Unable to load BIHS footer");
    }

    container.innerHTML = await response.text();

    /* Automatically update copyright year */

    container.querySelectorAll(".footer-year").forEach(function (year) {
      year.textContent = new Date().getFullYear();
    });

    /* Disable links awaiting their final URLs */

    container.querySelectorAll("[data-pending-link]").forEach(function (link) {
      link.removeAttribute("href");
      link.setAttribute("aria-disabled", "true");
    });

  } catch (error) {

    console.error("BIHS footer:", error);

  }

});

/* END BIHS SHARED FOOTER LOADER */// JavaScript Document