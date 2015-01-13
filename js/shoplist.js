$(document).ready(function() {
  // add an item to shoplist
  $('#additem-btn').click(function(){
    var itemtxt = document.getElementById('additem-txt');
    var itemvalue = itemtxt.value;
    console.log(itemvalue);

    if(!$.trim($('#additem-txt').val())) {
      alert('Invalid item. Please input text to Add item text box.');
    } else {
      //$('<li class="listitem"></li>').appendTo('.shoplist').html('<img id="unchkbox" src="images/uncheck.png"/><input id="itemtxt" value=' + itemvalue + '><input id="qty-num" type="number" min="1" max="1000" value="1"><img id="delete" src="images/delete.png"/>');
      //$('<li class="listitem"></li>').appendTo('.shoplist').html('<div class="unchkbox"></div><span class="itemtxt">' + itemvalue + '</span><input id="qty-num" type="number" min="1" max="1000" value="1"><img id="delete" src="images/delete.png"/>');
      $('<li class="listitem"></li>').appendTo('.shoplist').html('<div class="unchkbox"></div><span class="itemtxt">' + itemvalue + '</span><img id="delete" src="images/delete.png"/>');
    };
  });

  $('#additem-txt').keydown(function(event){
    var enter = 13;
    if(event.keyCode == enter) {
      $('#additem-btn').click();
    };
  }); 

  // delete a shoplist item
  $('.shoplist').on('click', '#delete', function(e){$(this).parent().remove()});

  // check / uncheck item
  $('.shoplist').on('click', 'li', function(){
      $(this).toggleClass('strike-itemtxt');
      $(this).children('.unchkbox').toggleClass('checked');
  });

});