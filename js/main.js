$(function(event) {

  var $snake = $('#snake')

  function moveSnakeRight() {
    $snake.animate({
      left: 150 + "px"
    },100);
  };

  moveSnakeRight();

})
