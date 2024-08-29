// script.js

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
document.getElementById("learnMoreBtn").addEventListener("click", function() {
    var moreInfo = document.getElementById("moreInfo");
    if (moreInfo.classList.contains("hidden")) {
        moreInfo.classList.remove("hidden");
        this.textContent = "Tutup Informasi";
    } else {
        moreInfo.classList.add("hidden");
        this.textContent = "Pelajari Lebih Lanjut";
    }
});
    

