// Slider initialization and settings

const outter_swiper = new Swiper('.outter-swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    breakpoints: {},
});
  

const inner_swiper = new Swiper('.inner-swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    breakpoints: {},
    nested: true
});

$(document).ready(function() {
    $("#playdate_mode").on("change", function () {
        if($(this).prop("checked") == true){
            // show owners
            outter_swiper.slideTo('1');
            outter_swiper.update();
        }
        else if($(this).prop("checked") == false){
            // show pets
            outter_swiper.slideTo('0');
            outter_swiper.update();
        }
    });
    outter_swiper.on('slideChange', function () {
        if(outter_swiper.activeIndex == 0){
            // toggle switch to pets
            // console.log("to_pets");
            $("#playdate_mode").prop("checked", false);
        }
        else if(outter_swiper.activeIndex == 1){
            // toggle switch to owners
            // console.log("to_owners");
            $("#playdate_mode").prop("checked", true);
        }
    });
});
