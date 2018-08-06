// var expanded = false;

// function showCheckboxes() {
//     var checkboxesProperty = document.getElementById("checkboxesProperty");
//     if (!expanded) {
//         checkboxesProperty.style.display = "block";
//         expanded = true;
//     } else {
//         checkboxesProperty.style.display = "none";
//         expanded = false;
//     }
// }

// var expanded1 = false;

// function showCheckboxes1() {
//     var checkboxesRoom = document.getElementById("checkboxesRoom");
//     if (!expanded1) {
//         checkboxesRoom.style.display = "block";
//         expanded1 = true;
//     } else {
//         checkboxesRoom.style.display = "none";
//         expanded1 = false;
//     }
// }

// var expanded2 = false;

// function showCheckboxes2() {
//     var checkboxesRoom = document.getElementById("checkboxesAuction");
//     if (!expanded2) {
//         checkboxesAuction.style.display = "block";
//         expanded2 = true;
//     } else {
//         checkboxesAuction.style.display = "none";
//         expanded2 = false;
//     }
// }

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});