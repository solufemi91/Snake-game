$(function(event) {

  var $snake = $('.snake');
  var $demo = $('#demo');
  var $button = $('#myBtn');
  var $body = $('body');
  var $head = $('#head');
  var $tail = $('#tail');
  var $snakeNoHead = $("[class='snake'][id!='head']");
  var $two = $("[data-block-number='2']")
  var $three = $("[data-block-number='3']")

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

  function moveSnakeDown2() {
      // $snake.animate({
      //   marginTop: 378 + "px"
      // },1000);
      // $head.css({marginTop: 0 + "px", display: inherit, marginLeft: 60 + "px"});
    };

  function moveSnakeDown() {

      var distanceOfTailFromBorder = $tail.css("marginLeft").slice(0, -2);
      var newDistanceOfHead = +distanceOfTailFromBorder + 60
      $head.css({"display":"inherit","marginLeft": newDistanceOfHead + "px"});
      var distanceOfTailFromBorderForTurn = +distanceOfTailFromBorder + 20
      $tail.css("marginLeft", distanceOfTailFromBorderForTurn + "px")
      $two.css({"display":"inherit","marginLeft": newDistanceOfHead + "px"});
      $tail.css("marginLeft", +distanceOfTailFromBorderForTurn + 20 + "px")
      $three.css({"display":"inherit","marginLeft": newDistanceOfHead + "px"});
      $tail.css("marginLeft", +distanceOfTailFromBorderForTurn + 40 + "px")
      $tail.animate({
        marginTop: 318 + "px"
      },1000);
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
