var GS=0;
var pc=0;
var form,player,game;
var database;
var allPlayers;
var cars,car1,car2,car3,car4;
var alertD=0;
function preload(){
    track=loadImage("images/track.jpg");
    car1img=loadImage("images/car1.png");
    car2img=loadImage("images/car2.png");
    car3img=loadImage("images/car3.png");
    car4img=loadImage("images/car4.png");

}
function setup(){
    database=firebase.database();
    createCanvas(displayWidth-100,displayHeight-220);
    game = new Game();
    game.getState();
    game.start();
   }

function draw(){
    background("white");
   if(pc===4){
       game.updateGS(1)
   }
   if(GS===1){
       clear();
       game.play();
   }
   if(GS===2&&alertD===0){
       game.end();
       alertD=1
   }
}

