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
  var $four = $("[data-block-number='4']")

  function moveSnakeRight() {
    $snake.animate({
      left: 318 + "px",
    },1000);
  };

  function turnDownFromRight() {

      var id10 = setInterval(frame,500);
      var counter = 1
      var distanceOfTailFromBorder;
      var newDistanceOfHead;
      var distanceOfTailFromBorderForTurn;

      function frame(){

          if (counter == 1) {
            distanceOfTailFromBorder = $tail.css("left").slice(0, -2);
            newDistanceOfHead = +distanceOfTailFromBorder + 60;
            $head.css({"display":"inherit","left": newDistanceOfHead + "px"});
            distanceOfTailFromBorderForTurn = +distanceOfTailFromBorder + 20;
            $two.css("left", distanceOfTailFromBorderForTurn + "px");
            $three.css("left", distanceOfTailFromBorderForTurn + "px");
            $four.css("left", distanceOfTailFromBorderForTurn + "px");
            counter++
            console.log('1')
          }
          else if (counter == 2) {
            $two.css({"display":"inherit","left": newDistanceOfHead + "px"});
            $three.css("left", +distanceOfTailFromBorderForTurn + 20 + "px");
            $four.css("left", +distanceOfTailFromBorderForTurn + 20 + "px");
            counter++
            console.log('2')
          }
          else if (counter == 3) {
            $three.css({"display":"inherit","left": newDistanceOfHead + "px"});
            $tail.css("left", +distanceOfTailFromBorderForTurn + 40 + "px")
            counter++
            console.log('3')
          }
          else if (counter == 4) {
            $snake.animate({
              top: 318 + "px"
            },1000);
            counter++
            console.log('4')
            clearInterval(id10);
          }

        }

    };



  function moveSnakeLeftFromDown() {
    // $snake.animate({
    //   left: 0 + "px",
    //
    // },1000);

    var id10 = setInterval(frame,500);
    var counter = 1
    var distanceOfTailFromBorder;
    var newDistanceOfHead;
    var distanceOfTailFromBorderForTurn;

    function frame(){

        if (counter == 1) {
          distanceOfTailFromBorder = $tail.css("left").slice(0, -2);
          newDistanceOfHead = +distanceOfTailFromBorder - 20;
          $head.css({"display":"inherit","left": newDistanceOfHead + "px"});
          distanceOfTailFromTopBorder = $tail.css("top").slice(0, -2);
          $two.css("top",+distanceOfTailFromTopBorder + 20 + "px");
          $three.css("top",+distanceOfTailFromTopBorder + 20 + "px");
          $four.css("top",+distanceOfTailFromTopBorder + 20 + "px");
          counter++;
          console.log('1')

        }
        else if (counter == 2) {
          $head.css({"left": +newDistanceOfHead - 20 + "px"});
          $two.css("left", +distanceOfTailFromBorder - 20 + "px")
          $three.css("top",+distanceOfTailFromTopBorder + 40 + "px");
          $four.css("top",+distanceOfTailFromTopBorder + 40 + "px");
          counter++
          console.log('2')

        }
        else if (counter == 3) {

          distanceOfTailFromBorder = $head.css("left").slice(0, -2);
          $head.css("left", +distanceOfTailFromBorder - 20 + "px");
          distanceOfTailFromBorder = $two.css("left").slice(0, -2);
          $two.css("left", +distanceOfTailFromBorder - 20 + "px");
          distanceOfTailFromBorder = $three.css("left").slice(0, -2);
          $three.css("left", +distanceOfTailFromBorder - 20 + "px");


          // $two.css({"position":"relative","right":"20px"});
          // $three.css({"position":"relative","right":"20px"});
          // $four.css({"position":"relative","top":"40px"});
          // $three.css({"display":"inherit","marginLeft": newDistanceOfHead + "px"});
          // $tail.css("marginLeft", +distanceOfTailFromBorderForTurn + 40 + "px")
          counter++
          console.log('3')
          clearInterval(id10);
        }
        // else if (counter == 0) {
        //   $tail.animate({
        //     marginTop: 318 + "px"
        //   },1000);
        //   counter++
        //   console.log('4')
        //   clearInterval(id10);
        // }

      }




  };

  function moveSnakeUp() {
    $snake.animate({
      marginTop: 0 + "px"
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
          moveSnakeLeftFromDown();
        } else if (event.which == 38 ) {
          $snake.stop();
          moveSnakeUp();
        } else if (event.which == 40) {
          $snake.stop();
          turnDownFromRight();
        }
    });
  });


})
