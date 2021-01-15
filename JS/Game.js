class Game{
     constructor(){

     }
    getState(){
        var GSref=database.ref('gameState');
        GSref.on("value",function(data){
            GS=data.val();
        })

    }
    updateGS(state){
        database.ref('/').update({
          'gameState':state  
        })
    }
   async start(){
        if(GS===0){
            player=new Player();
            var pcref=await database.ref('playerCount').once("value");
            if(pcref.exists()){
                pc=pcref.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
        car1=createSprite(100,200);
                car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        car1.addImage(car1img);
        car2.addImage(car2img);
        car3.addImage(car3img);
        car4.addImage(car4img);
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.formHide();
                Player.getPlayerinfo();
                player.getCarsAtEnd();
        if(allPlayers!==undefined){
            background(46)
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index=0;
            var x=200;
            var y;
            for( var plr in allPlayers){
                index=index+1
                 y=displayHeight-allPlayers[plr].distance;
                 x=x+250
                 cars[index-1].x=x
                 cars[index-1].y=y
              if(index===player.index){
                  strokeWeight(10);
                  fill("green");
                  ellipse(x,y,60,60);
                  camera.position.x=displayWidth/2;
                  camera.position.y=cars[index-1].y
              }
            }
        }
      if(keyIsDown(UP_ARROW)&&player.index!==null){
          player.distance+=50;
          player.update();
      }  
      if(player.distance>4350){
          player.rank+=1
          GS=2;
          Player.updateCarsAtEnd(player.rank)
          console.log("Rank:"+player.rank)
      }
    drawSprites();
    }
    end(){
        alert("Game Over!")
    }
}