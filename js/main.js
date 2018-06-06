$(function(event) {

  var $snake = $('#snake')
  var $demo = $('#demo')
  var $button = $('#myBtn')
  var $body = $('body')

  function moveSnakeRight() {
    $snake.animate({
      marginLeft: 198 + "px"
    },100);
  };
  function displayDate() {
      console.log(Date());
  }

  $(document).ready(function(){
    $body.keydown(function(event){
        console.log("Key: " + event.which);
        if (event.which == 39 ) {
          moveSnakeRight();
        }
    });
  });



  //$body.keydown(moveSnakeRight);

})
