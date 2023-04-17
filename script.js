$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.top-nav .nav-main').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
})
let popup= document.getElementById('soc-linkspop');
let loginpopup = document.getElementById('loginmain');
function openPopup(){
    popup.classList.add("open-popup");
    document.getElementById("overlay").style.display = "block";
}
function closePopup(){
    popup.classList.remove("open-popup");
    document.getElementById("overlay").style.display = "none";
}
function openLogin(){
    loginpopup.classList.add("open-login");
    document.getElementById("overlay").style.display = "block";
}
function closeLogin(){
    loginpopup.classList.add("open-login");
    document.getElementById("overlay").style.display = "none";
}