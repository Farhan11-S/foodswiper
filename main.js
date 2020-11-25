var items = [{
    name: "BAKSO KUAH KALDU",
    price: "20.000"
}, {
    name: "BAKSO KUAH TAICHAN",
    price: "22.000"
}, {
    name: "CEKER KUAH KALDU",
    price: "13.000"
}, {
    name: "CAKAR KUAH TAICHAN",
    price: "15.000"
}, {
    name: "IGA KUAH KALDU",
    price: "30.000"
}, {
    name: "IGA KUAH TAICHAN",
    price: "32.000"
}, {
    name: "TAHU KUAH KALDU",
    price: "12.000"
}, {
    name: "TAHU KUAH TAICHAN",
    price: "14.000"
}, {
    name: "TETELAN KUAH KALDU",
    price: "16.000"
}, {
    name: "TETELAN KUAH TAICHAN",
    price: "18.000"
}];
var carousellItems = [{
    name: "BAKSO KUAH KALDU",
    price: "20.000"
}, {
    name: "BAKSO KUAH TAICHAN",
    price: "22.000"
}, {
    name: "CEKER KUAH KALDU",
    price: "13.000"
}, {
    name: "CAKAR KUAH TAICHAN",
    price: "15.000"
}, {
    name: "IGA KUAH KALDU",
    price: "30.000"
}, {
    name: "IGA KUAH TAICHAN",
    price: "32.000"
}, {
    name: "TAHU KUAH KALDU",
    price: "12.000"
}, {
    name: "TAHU KUAH TAICHAN",
    price: "14.000"
}, {
    name: "TETELAN KUAH KALDU",
    price: "16.000"
}, {
    name: "TETELAN KUAH TAICHAN",
    price: "18.000"
}];
var wrapperPotrait = document.getElementById("wrapper-potrait");
var wrapperLandscape = document.getElementById("wrapper-landscape");
var menuWrapperLandscape = document.getElementById("menu-landscape");
var menuWrapperPotrait = document.getElementById("menu-potrait");
var scrollable = document.getElementById("scrollable");
items.forEach(showImage);

var contentPotrait = "";
var contentLandscape = "";
var menuLandscape =  "";
var menuPotrait = "";
var scrollabItem = "";
function showImage(item, index, arr) {
    contentPotrait = `<div class="swiper-slide">
    <img src="img/${item.name}.jpg" alt="${item.name}" width="100%">
    <div class="content wow slideInLeft" id="content-potrait">
            <h1 class="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".9s">${item.name}</h1>
            <p class="wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".9s">RP ${item.price}</p>
    </div>
    </div>`;
    contentLandscape =
        `<div class="swiper-slide landscape">
            <div data-swiper-parallax="500" data-swiper-parallax-opacity="0">
                <img src="img/${item.name}.jpg" alt="${item.name}" style="width:100%;">
                <div class="content" id="content-landscape">
                    <div class="content-landscape-name wow slideInLeft">
                        <h1 class="font-weight-bold wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".9s">${item.name}</h1>
                    </div>
                    <div class="content-landscape-price my-5 wow slideInLeft">
                        <h3 class="wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".9s">RP ${item.price}</h3>
                    </div>
                </div>
            </div>
        </div>`;

    menuLandscape = `<div class="card-barang p-2 mx-auto my-2 mt-3" style="width: 18rem;">
    <img class="card-img-top" src="img/${item.name}.jpg" alt="${item.name}">
    <div class="card-body">
        <h5 class="card-title font-weight-bold">${item.name}</h5>
        <p class="card-text">RP ${item.price}</p>
    </div>
    </div>`;
    menuPotrait =
        `<div class="card-barang p-2 mx-auto my-2 mt-3" style="width: 80vw;">
    <img class="card-img-top" src="img/${item.name}.jpg" alt="${item.name}">
    <div class="card-body">
        <h6 class="card-title font-weight-bold">${item.name}</h6>
        <p class="card-text">RP ${item.price}</p>
    </div>
    </div>`;

    scrollabItem = `<a class="dropdown-item scroll-item" href="#" onclick="changeSlides(${index + 1})">${item.name}</a>`;

    menuWrapperLandscape.innerHTML += menuLandscape;
    menuWrapperPotrait.innerHTML += menuPotrait;
    wrapperPotrait.innerHTML += contentPotrait;
    wrapperLandscape.innerHTML += contentLandscape;
    scrollable.innerHTML += scrollabItem;
}
console.log(wrapperLandscape);
var allMenuId = "all-menu-landscape";
var navbar = document.getElementById("navbar");
var sidebarWidth = "250px";

function screenResize() {
    if (window.innerWidth < 768) {
        navbar.classList.remove("fixed-top");
        allMenuId = "all-menu-potrait";
        sidebarWidth = "100vw";
    } else {
        navbar.classList.add("fixed-top");
        allMenuId = "all-menu-landscape";
        sidebarWidth = "20vw";
    }
}
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidersPerView: 1,
    effect: "fade",
    fadeEffect: { crossFade: true },
    virtualTranslate: true,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        position: 'absolute'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        position: 'absolute'

    },

    autoplay: {
        delay: 5000,
    },
});
document.getElementById("menu-button").onclick = function () {
    window.location.href = `#${allMenuId}`;
};

function changeSlides(id) {
    mySwiper[0].slideTo(id);
    mySwiper[1].slideTo(id);
    closeNav();
} 

window.onload = screenResize;
window.onresize = screenResize;

// Sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = sidebarWidth;
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementsByTagName("body")[0].style.overflow = "initial";
}

