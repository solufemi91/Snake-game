$(function(event) {

  var $snake = $('.snake');
  var $demo = $('#demo');
  var $button = $('#myBtn');
  var $body = $('body');
  var $head = $('#head');
  var $tail = $('#tail');

  function moveSnakeRight() {
    $snake.animate({
      marginLeft: 318 + "px",
      marginRight: -318 + "px"
    },1000);


  };

  function moveSnakeLeft() {
    $snake.animate({
      marginLeft: 0 + "px",
      marginRight: 0 + "px"
    },1000);
  };

  function moveSnakeUp() {
    $snake.animate({
      marginTop: 0 + "px"
    },1000);
  };

  function moveSnakeDown() {
      // $snake.animate({
      //   marginTop: 378 + "px"
      // },1000);
      // $head.css({marginTop: 0 + "px", display: inherit, marginLeft: 60 + "px"});
      var distanceOfTailFromBorder = $tail.css("marginLeft").slice(0, -2);
      //console.log(distanceOfTailFromBorder)
      var newDistanceOfHead = +distanceOfTailFromBorder + 60
      //console.log(newDistanceOfHead)
      $head.css({"display":"inherit","marginLeft": newDistanceOfHead + "px"});
    };


  $(document).ready(function(){
    $body.keydown(function(event){
        console.log("Key: " + event.which);
        if (event.which == 39 ) {
          $snake.stop();
          moveSnakeRight();
        }  else if (event.which == 37 ) {
          $snake.stop();
          moveSnakeLeft();
        } else if (event.which == 38 ) {
          $snake.stop();
          moveSnakeUp();
        } else if (event.which == 40) {
          $snake.stop();
          moveSnakeDown();
        }
    });
  });


})
