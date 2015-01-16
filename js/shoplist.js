/* global $ */
$(document).ready(function() {

  function submit () {
    var itemtxt = document.getElementById('additem-txt');
    var itemvalue = $.trim(itemtxt.value);

    if (!itemvalue) {
      alert('Invalid item. Please input text to Add item text box.');
    } else {
      /*$('<li class="listitem"></li>').appendTo('.shoplist').html(
        '<input type="checkbox" class="unchkbox">' +
        '<span class="itemtxt"></span>' +
        '<img class="delete" src="images/delete.png">'
      ).children('.itemtxt').text(itemvalue);*/
      $('<li class="listitem"></li>').appendTo('.shoplist').html(
        '<input type="checkbox" class="unchkbox">' +
        '<span class="itemtxt"></span>' +
        '<img class="delete" src="images/delete.png">'
      ).children('.itemtxt').text(itemvalue);

      var test= $('.itemtxt');

      console.log(test);
    }
  }

  // add an item to shoplist
  $('#additem-btn').click(submit);

  $('#additem-txt').keydown(function(event){
    var enter = 13;

    if (event.keyCode === enter) {
      submit();
    }
  }); 

  // delete a shoplist item
  $('.shoplist').on('click', '.delete', function () {
    $(this).parent().remove();
  });

  // check / uncheck item
  /*$('.shoplist').on('click', 'li', function () {
    var $this = $(this);
    var checked = $this.hasClass('strike-itemtxt');

    $this.toggleClass('strike-itemtxt');
    $this.children('.unchkbox').attr('checked', checked ? 'checked' : '');
  });*/

  $('.shoplist').on('click', '.unchkbox', function () {
    var $this = $(this);
    var checked = $this.parent().hasClass('strike-itemtxt');

    $this.parent().toggleClass('strike-itemtxt');
    $this.attr('checked', checked ? 'checked' : '');
  });

});