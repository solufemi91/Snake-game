$(function(event) {

  var $snake = $('#snake')

  function moveSnakeRight() {
    $snake.animate({
      marginLeft: 198 + "px"
    },10000);
  };

  moveSnakeRight();

})
