function changeColor(element) {
  $(element).toggleClass('text-danger');
}

function visibilityOfComments(element) {
  var identificador = $(element).attr('id').split('-')[1];
  $('#comments-' + identificador).toggleClass('visually-hidden');
}

function addComment(element) {
  var identificador = $(element).attr('id').split('-')[1];
  var elMensaje = $(`#msg-${identificador}`).val();
  $(`#listOfComments-${identificador} ul`).append(`<li>${elMensaje}</li>`);
}

$(document).ready(() => {

  $('.fa-regular').click(function () { changeColor(this) });
  $('.fa-comment').click(function () { visibilityOfComments(this) });
  $('.btn-primary').click(function () { addComment(this) });
  $("a#img5").fancybox({
    'transitionIn': 'elastic',
    'transitionOut': 'elastic',
    'speedIn': 600,
    'speedOut': 200,
    'overlayShow': false
  });
  $("a#img6").fancybox({
    'transitionIn': 'elastic',
    'transitionOut': 'elastic',
    'speedIn': 600,
    'speedOut': 200,
    'overlayShow': false
  });
  $("a#img7").fancybox({
    'transitionIn': 'elastic',
    'transitionOut': 'elastic',
    'speedIn': 600,
    'speedOut': 200,
    'overlayShow': false
  });
});

