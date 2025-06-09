window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }

document.getElementById('btn-mob-menu').addEventListener('click',function (){
  document.getElementById('modal-wrapp-menu').classList.add('active')
})
function closeModal(){
  document.getElementById('modal-wrapp-menu').classList.remove('active')

}  


const boxes = Array.from(document.querySelectorAll(".box"));

boxes.forEach((dude) => {
    dude.addEventListener("click", boxHandler);
});

function boxHandler(e) {
  console.log(e)
  let target = e.target;

  if (target.tagName !== "A") {
    e.preventDefault();
  }

  let currentBox = e.target.closest(".box");
  let currentContent = currentBox.querySelector(".content");
  currentBox.classList.toggle("active");
  if (currentBox.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else {
    currentContent.style.maxHeight = 0;
  }
}
const myArray = ['dude','pepe','car'];