$(function(event) {

  var $snake = $('#snake')
  var $demo = $('#demo')
  var $button = $('#myBtn')
  var $body = $('body')

  function moveSnakeRight() {
    $snake.animate({
      marginLeft: 198 + "px"
    },10000);
  };

  function moveSnakeLeft() {
    $snake.animate({
      marginLeft: 0 + "px"
    },1000);
  };


  $(document).ready(function(){
    $body.keydown(function(event){
        console.log("Key: " + event.which);
        if (event.which == 39 ) {
          moveSnakeRight();
        }  else if (event.which == 37 ) {
          moveSnakeLeft();
        }
    });
  });


})
