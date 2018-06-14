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

      var id10 = setInterval(frame,1000);

      var counter = 1

      var distanceOfTailFromBorder;
      var newDistanceOfHead;
      var distanceOfTailFromBorderForTurn;



      function frame(){

          
          ///
          if (counter == 1) {
            distanceOfTailFromBorder = $tail.css("marginLeft").slice(0, -2);
            newDistanceOfHead = +distanceOfTailFromBorder + 60
            $head.css({"display":"inherit","marginLeft": newDistanceOfHead + "px"});
            distanceOfTailFromBorderForTurn = +distanceOfTailFromBorder + 20;
            $tail.css("marginLeft", distanceOfTailFromBorderForTurn + "px")
            counter++
            console.log('1')
          }
          else if (counter == 2) {
            $two.css({"display":"inherit","marginLeft": newDistanceOfHead + "px"});
            $tail.css("marginLeft", +distanceOfTailFromBorderForTurn + 20 + "px")
            counter++
            console.log('2')
          }
          else if (counter == 3) {
            $three.css({"display":"inherit","marginLeft": newDistanceOfHead + "px"});
            $tail.css("marginLeft", +distanceOfTailFromBorderForTurn + 40 + "px")
            counter++
            console.log('3')
          }
          else if (counter == 4) {
            $tail.animate({
              marginTop: 318 + "px"
            },1000);
            counter++
            console.log('4')
            clearInterval(id10);
          }

        }





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
