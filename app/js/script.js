const dragDrop = document.querySelector(".dragdrop");
const ddInput = dragDrop.getElementsByTagName("input");

console.log("Linking sucessfull");

dragDrop.addEventListener("click", () => {
  //   alert("DragDrop is clicked");
  ddInput.focus();
});
