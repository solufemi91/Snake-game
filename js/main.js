$(function(event) {

  var $snake = $('#snake')
  var $demo = $('#demo')
  var $button = $('#myBtn')

  function moveSnakeRight() {
    $snake.animate({
      marginLeft: 198 + "px"
    },100);
  };
  function displayDate() {
      console.log(Date());
  }
  //moveSnakeRight();

  //$button.addEventListener("click", displayDate);
  $button.click(moveSnakeRight);

})
