function updateFavoriteCounter() {
  const cachedIds = localStorage.getItem("cachedIds");
  if(cachedIds) {
    const label = cachedIds.toString().split(",").length;
    console.log(label);
    document.getElementById("fav-counter").textContent = label; //AQUI
    return label;
  } else {
    return("no cachedIds");
  }
}

module.exports =  { updateFavoriteCounter };