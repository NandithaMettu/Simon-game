var gamepattern=[];
var clickedpattern=[];
var level=0;
var score=0;
var started=false;
var buttons=["red","green","yellow","blue"];
$(document).keypress(function() {
  if (!started) {
    $("#title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
function nextSequence(){
  clickedpattern=[];
  level=level+1
  $("h1").text("level "+ level);
    var r=Math.floor(Math.random()* 4);
    var chosen=buttons[r];
    gamepattern.push(chosen);
      
  $("#" + chosen).fadeIn(100).fadeOut(100).fadeIn(100);

  
  var audio = new Audio("sounds/" + chosen+ ".mp3");
  audio.play();
   
}
$(".btn").click(function(){
  var clicked=$(this).attr("id");
  clickedpattern.push(clicked);
    
  var audio = new Audio("sounds/" + clicked+ ".mp3");
  audio.play();
  $("#"+clicked).addClass("pressed");
  setTimeout(function() {
    $("#"+clicked).removeClass('pressed');
}, 100);
checkanswer(clickedpattern.length-1);
});

function checkanswer(currentlevel){
  if(gamepattern[currentlevel]==clickedpattern[currentlevel])
  { 
    console.log("success");
    if(gamepattern.length==clickedpattern.length)
    {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else{level=level-1;
    console.log("wrong");
    var audio = new Audio("./sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
}, 200);
$("h1").text("GAME OVER,Your Score is "+level+" . Press any key to restart");
gamepattern=[];
level=0;
started=false;
clickedpattern=[];
 }

}




