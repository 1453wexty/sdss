let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Aşağı kaydırma
        header.style.top = "-80px"; // Header'ı yukarı kaydır
    } else {
        // Yukarı kaydırma
        header.style.top = "20px"; // Header'ı geri getir
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Scroll değerini güncelle
});
