document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const slides = document.querySelectorAll(".carousel img");
    setInterval(() => {
        index = (index + 1) % slides.length;
        document.querySelector(".carousel").style.transform = `translateX(-${index * 100}%)`;
    }, 100);
});
