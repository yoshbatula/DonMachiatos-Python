(async function () {
  const mount = document.getElementById("siteHeader");
  if (!mount) return;

  const res = await fetch("/core/components/header.html", { cache: "no-cache" });
  mount.innerHTML = await res.text();
})();
