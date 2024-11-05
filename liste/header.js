let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    
    if (st > lastScrollTop) {
        // Aşağı kaydırma
        header.style.top = "-100px"; // Header'ı yukarı kaydır
    } else {
        // Yukarı kaydırma
        header.style.top = "0"; // Header'ı geri getir
    }
    lastScrollTop = st <= 0 ? 0 : st; // Sayfanın üst kısmına kaydırmayı engelle
});
