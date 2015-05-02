$(document).ready(resizeCard);

$(window).resize(resizeCard);


function resizeCard() {
  $('.profile-card + .profile-card').css({
    'max-width': $('.profile-card:first-child').width()
    });
}
