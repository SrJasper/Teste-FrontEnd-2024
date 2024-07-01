function updateFavoriteCounter() {
  const cachedIds = localStorage.getItem("cachedIds");
  const label = cachedIds.toString().split(",").length;
  console.log(label);
  if (cachedIds) {
    document.getElementById("fav-counter").textContent = label;
  } else {
    console.log("no cachedIds");
  }
}

updateFavoriteCounter();
