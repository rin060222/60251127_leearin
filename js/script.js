console.log("script loaded");

//별!!
let star_state = 0;
let shine_state = 0;

$(".sky-area").on("mousedown", function (event) {
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  
  let star = $(".star-1");
  let lake = $(".lake-star-1");
  if (star_state == 0) {
    star = $(".star-1");
    lake = $(".lake-star-1");
    star_state = 1;
  } else if (star_state == 1) {
    star = $(".star-2");
    lake = $(".lake-star-2");
    star_state = 2;
  } else if (star_state == 2) {
    star = $(".star-3");
    lake = $(".lake-star-3");
    star_state = 3;
  } else if (star_state == 3) {
    star = $(".star-4");
    lake = $(".lake-star-4");
    star_state = 0;
    if (shine_state == 0) {
      shine_state = 1;
    } else {
      shine_state = 0;
    }
  }

  let imgWidth = $(star).width();
  let imgHeight = $(star).height();
  $(star).css("left", mouseX - imgWidth / 2 + "px");
  $(star).css("top", mouseY - imgHeight / 2 + "px");





  //호수
  let lakeX = 830 + (mouseX - 756) * 0.6;
  let lakeY = 410 - (mouseY - 130) * 0.5;
  let lakeWidth = $(lake).width();
  let lakeHeight = $(lake).height();
  $(lake).css("left", lakeX - lakeWidth / 2 + "px");
  $(lake).css("top", lakeY - lakeHeight / 2 + "px");


  if (shine_state == 0) {
    $(star).removeClass("shine-b");
    $(star).addClass("shine-a");
    $(lake).removeClass("shine-b");
    $(lake).addClass("shine-a");
  } else {
    $(star).removeClass("shine-a");
    $(star).addClass("shine-b");
    $(lake).removeClass("shine-a");
    $(lake).addClass("shine-b");
  }
});








//끈
let rope_done = false;

$(".rope-off").on("click", function () {
  if (rope_done == false) {
    $(".rope-off").addClass("hide");
    $(".taki").addClass("meet");
    $(".mitsuha").addClass("meet");
    $(".rope-on").addClass("show");
    $(".world").addClass("light");
    $(".bar").addClass("show");
    $(".sub").addClass("show");
    $(".poster-text").addClass("show");
    rope_done = true;
  }
});