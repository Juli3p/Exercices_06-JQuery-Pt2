$(document).ready(function(){
  $('#green').mouseenter(function(){
  $('#text').css('color', 'green');
});
  $('#green').mouseleave(function(){
  $('#text').css('color', 'black');
  });
  $('#blue').mouseenter(function(){
  $('#text').css('color', 'blue');
});
  $('#green').mouseleave(function(){
  $('#blue').css('color', 'black');
  });
  $('#red').mouseenter(function(){
  $('#text').css('color', 'red');
});
  $('#red').mouseleave(function(){
  $('#text').css('color', 'black');
  });
});
