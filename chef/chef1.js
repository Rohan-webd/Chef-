function opennav() {

    document.getElementById("slidenav").style.width = "180px";
    document.getElementById("menu-icon").style.display = "none";
    document.getElementById("close-icon").style.display = "block";



};

function closenav() {

    document.getElementById("slidenav").style.width = "0px";
    document.getElementById("menu-icon").style.display = "block";
    document.getElementById("close-icon").style.display = "none";


};

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})