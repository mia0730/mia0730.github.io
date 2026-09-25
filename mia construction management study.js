/* Shared behavior: theme toggle, nav highlight, checklist memory */
(function () {
  "use strict";

  /* ---- Theme ---- */
  var KEY = "conm1200-theme";
  function stored(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  var saved = stored(KEY);
  if (saved === "dark" || saved === "light") {
    document.documentElement.setAttribute("data-theme", saved);
  }

  function currentIsDark() {
    var attr = document.documentElement.getAttribute("data-theme");
    if (attr) return attr === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest(".theme-btn");
    if (!b) return;
    var next = currentIsDark() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    save(KEY, next);
    b.textContent = next === "dark" ? "☀" : "☾";
  });

  /* ---- Nav highlight ---- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.main a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here) a.classList.add("here");
  });

  /* ---- Set theme button glyph on load ---- */
  document.querySelectorAll(".theme-btn").forEach(function (b) {
    b.textContent = currentIsDark() ? "☀" : "☾";
  });

  /* ---- Persistent checklists ---- */
  document.querySelectorAll(".check input[type=checkbox][data-key]").forEach(function (cb) {
    var k = "conm1200-" + cb.dataset.key;
    if (stored(k) === "1") { cb.checked = true; }
    if (cb.checked) cb.closest("li").classList.add("done");
    cb.addEventListener("change", function () {
      save(k, cb.checked ? "1" : "0");
      cb.closest("li").classList.toggle("done", cb.checked);
    });
  });

  /* ---- Expand / collapse all ---- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-toggle-all]");
    if (!b) return;
    var open = b.dataset.state !== "open";
    document.querySelectorAll("details.qa").forEach(function (d) { d.open = open; });
    b.dataset.state = open ? "open" : "closed";
    b.textContent = open ? "Collapse all" : "Expand all";
  });
})();
