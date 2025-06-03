$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").show();
    } else {
      $("#scroll").hide();
    }
  });

  $("#scroll").click(function () {
    $("html").scrollTop(0);
    return false;
  });
});

  // Modified from https://stackoverflow.com/a/49331692
let divId;
$(".anchor").click(function () {
  divId = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(divId).offset().top - 165,
    },
    100
  );
});
