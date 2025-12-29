function jadiJelas() {
  const dots = document.getElementById("dots");
  const more = document.getElementById("more");
  const btn = document.getElementById("btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.textContent = "Lihat lebih banyak";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Lihat lebih sedikit";
    more.style.display = "inline";
  }
}
