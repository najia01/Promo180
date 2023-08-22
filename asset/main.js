// *-*-*-*-*MENU BURGER*-*-*-*-*-

const menuBurger = document.getElementById("menuBurger");
const navigation = document.getElementById("navigation");

menuBurger.addEventListener('click', function() {
    navigation.classList.toggle("active")
})