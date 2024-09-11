const menuToggle = document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')
menuToggle.onclick = function () {
 navigation.classList.toggle('open')
}
const list = document.querySelectorAll('.list')
function activarLink() {
 list.forEach((item) => item.classList.remove('active'))
 this.classList.add('active')
}
list.forEach((item) => item.addEventListener('click', activarLink))

boton
function toggleModal() {
 const modal = document.getElementById('modal')
 modal.style.display = 'flex' // Show the modal
}

function closeModal() {
 const modal = document.getElementById('modal')
 modal.style.display = 'none' // Hide the modal
}
