var GameState = "wait"
var wall1,wall2,wall3,wall4,Player,wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall2,wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, Enemy, Enemy1, Enemy2, Enemy3,coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10;
//var walls = [wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall2,wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20]
//var zombies = [Enemy, Enemy1, Enemy2, Enemy3]
//var coins = [coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10]
//var sprites = [wall1,wall2,wall3,wall4,Player,wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall2,wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, Enemy, Enemy1, Enemy2, Enemy3,coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10]
var score = 0
var life = 3;
function preload(){
  splashscreenbg = loadImage("splashscreen.gif");
    player_img = loadImage("mcimage.png");
    zombie_img = loadImage("zombieimage.png");
    zombie_img1 = loadImage("zombieimage2.png")
    zombie_img2 = loadImage("zombieimage3.png")
    zombie_img3 = loadImage("zombieimage4.png")
    Game_Screen = loadImage('bg2.jpg');

    //upload images of enemy, coin, trophy
    trophy = loadImage("trophy.png")
    coin = loadImage("coin.png")

    //upload sounds
    win_sound=loadSound("win.mp3");
    die_sound=loadSound("die.mp3");

}
function setup(){
    createCanvas(600,600)
   
    playbutton = createImg("playgrey.png");
    playbutton.position(200, 300);
    playbutton.size(100,100);
    infobutton = createImg("infon.png");
    infobutton.position(300, 300);
    infobutton.size(100,100);
    infobutton.hide()
    playbutton.hide()

    


//create boundary walls
wall1 = createSprite(30,300,10,550)
wall1.shapeColor = "orange";
wall2 = createSprite(300,25,550,10)
wall2.shapeColor = "blue";
wall3 = createSprite(300,580,550,10)
wall3.shapeColor = "pink";
wall4 = createSprite(570,300,10,550)
wall4.shapeColor = "tan";

//create player 
Player = createSprite(300,260)
Player.addImage(player_img);
Player.scale = 0.09
 

//create enemies
Enemy = createSprite(100, 200);
Enemy.addImage(zombie_img);
Enemy.scale = 0.2;
Enemy.velocityX = 1
Enemy.velocityY = -1
Enemy1 = createSprite(540, 400);
Enemy1.addImage(zombie_img1);
Enemy1.scale = 0.1;
Enemy1.velocityX = -1
Enemy1.velocityY = 1
Enemy2 = createSprite(210,190);
Enemy2.addImage(zombie_img2);
Enemy2.scale = 0.1;
Enemy2.velocityX = 1
Enemy2.velocityY = 1
Enemy3 = createSprite(270,480);
Enemy3.addImage(zombie_img3);
Enemy3.scale = 0.2;
Enemy3.velocityX = -1
Enemy3.velocityY = 1


//create maze

wall5 = createSprite(300,300,160,10)
wall5.shapeColor = "black";
wall6 = createSprite(300,350,160,10)
wall6.shapeColor = "black";
wall7 = createSprite(255,250,10,100)
wall7.shapeColor = "black";
wall8 = createSprite(255,400,10,100)
wall8.shapeColor = "black";
wall9 = createSprite(345,250,10,100)
wall9.shapeColor = "black";
wall10 = createSprite(345,400,10,100)
wall10.shapeColor = "black";
wall11 = createSprite(180,200,160,10)
wall11.shapeColor = "black";
wall12 = createSprite(225,450,100,10)
wall12.shapeColor = "black";
wall13 = createSprite(395,200,200,10)
wall13.shapeColor = "black";
wall14 = createSprite(375,450,100,10)
wall14.shapeColor = "black";
wall15 = createSprite(180,250,10,100)
wall15.shapeColor = "black";
wall16 = createSprite(180,400,10,100)
wall16.shapeColor = "black";
wall17 = createSprite(420,250,10,100)
wall17.shapeColor = "black";
wall18 = createSprite(420,400,10,100)
wall18.shapeColor = "black";
wall19 = createSprite(490,323,10,400)
wall19.shapeColor = "black";
wall20 = createSprite(100,330,10,490)
wall20.shapeColor = "black";

//create Exit
Exit = createSprite(65,545)
Exit.addImage(trophy)
Exit.scale = 0.15;


//create coins
coin1 = createSprite(300,320)
coin1.addImage(coin);
coin1.scale = 0.1
coin2 = createSprite(300,500)
coin2.addImage(coin);
coin2.scale = 0.1
coin3 = createSprite(300,400)
coin3.addImage(coin);
coin3.scale = 0.1
coin4 = createSprite(460,250)
coin4.addImage(coin);
coin4.scale = 0.1
coin5 = createSprite(380,250)
coin5.addImage(coin);
coin5.scale = 0.1
coin6 = createSprite(380,400)
coin6.addImage(coin);
coin6.scale = 0.1
coin7 = createSprite(140,400)
coin7.addImage(coin);
coin7.scale = 0.1
coin8 = createSprite(220,400)
coin8.addImage(coin);
coin8.scale = 0.1
coin9 = createSprite(220,250)
coin9.addImage(coin);
coin9.scale = 0.1
coin10 = createSprite(120,250)
coin10.addImage(coin);
coin10.scale = 0.1

}

function draw(){
 

if (GameState == "wait")
{background(splashscreenbg);
  score=0;
playbutton.show();
infobutton.show();

//make player, walls, coins and Exit invisible in wait state
Player.visible = false;
Enemy.visible = false;
Enemy1.visible = false;
Enemy2.visible = false;
Enemy3.visible = false;
wall1.visible = false;
wall2.visible = false;
wall3.visible = false;
wall4.visible = false;
wall5.visible = false;
wall6.visible = false;
wall7.visible = false;
wall8.visible = false;
wall9.visible = false;
wall10.visible = false;
wall11.visible = false;
wall12.visible = false;
wall13.visible = false;
wall14.visible = false;
wall15.visible = false;
wall16.visible = false;
wall17.visible = false;
wall18.visible = false;
wall19.visible = false;
wall20.visible = false;
coin1.visible = false;
coin1.visible = false;
coin2.visible = false;
coin3.visible = false;
coin4.visible = false;
coin5.visible = false;
coin6.visible = false;
coin7.visible = false;
coin8.visible = false;
coin9.visible = false;
coin10.visible = false;
Exit.visible = false;
score.visible = false;


}
    infobutton.mousePressed(() => {
playbutton.hide();
infobutton.hide()
GameState = "about"
    })
    playbutton.mousePressed(() => {
        playbutton.hide();
        infobutton.hide()
        GameState = "play"
            })
    if (GameState == "about"){
        aboutGame()
    }
if (GameState == "play"){
  background(Game_Screen)
   

  // make player, Exit, coins, visible in play state
  Player.visible = true;
  Exit.visible = true;
Enemy.visible = true;
Enemy1.visible = true;
Enemy2.visible = true;
Enemy3.visible = true;
wall1.visible = true;
wall2.visible = true;
wall3.visible = true;
wall4.visible = true;
wall5.visible = true;
wall6.visible = true;
wall7.visible = true;
wall8.visible = true;
wall9.visible = true;
wall10.visible = true;
wall11.visible = true;
wall12.visible = true;
wall13.visible = true;
wall14.visible = true;
wall15.visible = true;
wall16.visible = true;
wall17.visible = true;
wall18.visible = true;
wall19.visible = true;
wall20.visible = true;
coin1.visible = true;
coin1.visible = true;
coin2.visible = true;
coin3.visible = true;
coin4.visible = true;
coin5.visible = true;
coin6.visible = true;
coin7.visible = true;
coin8.visible = true;
coin9.visible = true;
coin10.visible = true;
score.visible = true;


    //write conditions for moving the player using arrow keys
  if(keyDown('UP_ARROW')){
    Player.velocityY=-5
    Player.velocityX = 0
  };
  if(keyDown('DOWN_ARROW')){
    Player.velocityY=5
    Player.velocityX = 0
  };
  if(keyDown('LEFT_ARROW')){
    Player.velocityY=0
    Player.velocityX = -5
  };
  if(keyDown('RIGHT_ARROW')){
    Player.velocityY=0
    Player.velocityX = 5
  }
  if(keyWentUp('UP_ARROW')){
    Player.velocityX = 0
    Player.velocityY = 0
  }
  if(keyWentUp('DOWN_ARROW')){
    Player.velocityX = 0
    Player.velocityY = 0
  }
  if(keyWentUp('RIGHT_ARROW')){
    Player.velocityX = 0
    Player.velocityY = 0
  }
  if(keyWentUp('LEFT_ARROW')){
    Player.velocityX = 0
    Player.velocityY = 0
  }
   
  
  
//write conditions for player bouncing off all the walls


Player.bounceOff(wall1)
Player.bounceOff(wall2)
Player.bounceOff(wall3)
Player.bounceOff(wall4)
Player.bounceOff(wall5)
Player.bounceOff(wall6)
Player.bounceOff(wall7)
Player.bounceOff(wall8)
Player.bounceOff(wall9)
Player.bounceOff(wall10)
Player.bounceOff(wall11)
Player.bounceOff(wall12)
Player.bounceOff(wall13)
Player.bounceOff(wall14)
Player.bounceOff(wall15)
Player.bounceOff(wall16)
Player.bounceOff(wall17)
Player.bounceOff(wall18)
Player.bounceOff(wall19)
Player.bounceOff(wall20)

  //write conditions for enemies bouncing off all the walls
Enemy.bounceOff(wall1)
Enemy.bounceOff(wall2)
Enemy.bounceOff(wall3)
Enemy.bounceOff(wall4)
Enemy.bounceOff(wall5)
Enemy.bounceOff(wall6)
Enemy.bounceOff(wall7)
Enemy.bounceOff(wall8)
Enemy.bounceOff(wall9)
Enemy.bounceOff(wall10)
Enemy.bounceOff(wall11)
Enemy.bounceOff(wall12)
Enemy.bounceOff(wall13)
Enemy.bounceOff(wall14)
Enemy.bounceOff(wall15)
Enemy.bounceOff(wall16)
Enemy.bounceOff(wall17)
Enemy.bounceOff(wall18)
Enemy.bounceOff(wall19)
Enemy.bounceOff(wall20)
Enemy1.bounceOff(wall1)
Enemy1.bounceOff(wall2)
Enemy1.bounceOff(wall3)
Enemy1.bounceOff(wall4)
Enemy1.bounceOff(wall5)
Enemy1.bounceOff(wall6)
Enemy1.bounceOff(wall7)
Enemy1.bounceOff(wall8)
Enemy1.bounceOff(wall9)
Enemy1.bounceOff(wall10)
Enemy1.bounceOff(wall11)
Enemy1.bounceOff(wall12)
Enemy1.bounceOff(wall13)
Enemy1.bounceOff(wall14)
Enemy1.bounceOff(wall15)
Enemy1.bounceOff(wall16)
Enemy1.bounceOff(wall17)
Enemy1.bounceOff(wall18)
Enemy1.bounceOff(wall19)
Enemy1.bounceOff(wall20)
Enemy2.bounceOff(wall1)
Enemy2.bounceOff(wall2)
Enemy2.bounceOff(wall3)
Enemy2.bounceOff(wall4)
Enemy2.bounceOff(wall5)
Enemy2.bounceOff(wall6)
Enemy2.bounceOff(wall7)
Enemy2.bounceOff(wall8)
Enemy2.bounceOff(wall9)
Enemy2.bounceOff(wall10)
Enemy2.bounceOff(wall11)
Enemy2.bounceOff(wall12)
Enemy2.bounceOff(wall13)
Enemy2.bounceOff(wall14)
Enemy2.bounceOff(wall15)
Enemy2.bounceOff(wall16)
Enemy2.bounceOff(wall17)
Enemy2.bounceOff(wall18)
Enemy2.bounceOff(wall19)
Enemy2.bounceOff(wall20)
Enemy3.bounceOff(wall1)
Enemy3.bounceOff(wall2)
Enemy3.bounceOff(wall3)
Enemy3.bounceOff(wall4)
Enemy3.bounceOff(wall5)
Enemy3.bounceOff(wall6)
Enemy3.bounceOff(wall7)
Enemy3.bounceOff(wall8)
Enemy3.bounceOff(wall9)
Enemy3.bounceOff(wall10)
Enemy3.bounceOff(wall11)
Enemy3.bounceOff(wall12)
Enemy3.bounceOff(wall13)
Enemy3.bounceOff(wall14)
Enemy3.bounceOff(wall15)
Enemy3.bounceOff(wall16)
Enemy3.bounceOff(wall17)
Enemy3.bounceOff(wall18)
Enemy3.bounceOff(wall19)
Enemy3.bounceOff(wall20)

  

  //write conditions for player touching all the coins
  if(Player.isTouching(coin1)){
    coin1.remove();
    score = score +1
  }
  if(Player.isTouching(coin9)){
    coin9.remove();
    score = score +1
  }
  if(Player.isTouching(coin10)){
    coin10.remove();
    score = score +1
  }
  if(Player.isTouching(coin2)){
    coin2.remove();
    score = score +1
  }
  if(Player.isTouching(coin3)){
    coin3.remove();
    score = score +1
  }
  if(Player.isTouching(coin4)){
    coin4.remove();
    score = score +1
  }
  if(Player.isTouching(coin5)){
    coin5.remove();
    score = score +1
  }
  if(Player.isTouching(coin6)){
    coin6.remove();
    score = score +1
  }
  if(Player.isTouching(coin7)){
    coin7.remove();
    score = score +1
  }
  if(Player.isTouching(coin8)){
    coin8.remove();
    score = score +1
  }

  if(Player.isTouching(Enemy)){
    die_sound.play();
    Player.x = 300;
    Player.y = 260;
    life = life - 1
  }
  if(Player.isTouching(Enemy1)){
    die_sound.play();
    Player.x = 300;
    Player.y = 260;
    life = life - 1
  }
  if(Player.isTouching(Enemy2)){
    die_sound.play();
    Player.x = 300;
    Player.y = 260;
    life = life - 1
  }
  if(Player.isTouching(Enemy3)){
    die_sound.play();
    Player.x = 300;
    Player.y = 260;
    life = life - 1
  }
  
 if(life <= 0){
  GameState = "lose"
 }



//write condition for player touching the Exit
  if(Player.isTouching(Exit)){
    win_sound.play();
    GameState = "win";
  }

  //write conditions for win 
  if(GameState == "win"){
    Enemy1.velocityX = 0
    Enemy1.velocityY = 0
    Enemy.velocityY = 0
    Enemy.velocityX = 0
    Enemy2.velocityY = 0
    Enemy2.velocityX = 0
    Enemy3.velocityY = 0
    Enemy3.velocityX = 0
    Player.velocityX = 0
    Player.velocityY = 0
    winState();
  }
  
 
}

drawSprites();

//display score
textSize(30);
fill('red')
text("score:" + score, 450,60)
text("lives: " + life, 40,60)

//write condition for game state lose
if(GameState == "lose"){
  Enemy1.velocityX = 0
    Enemy1.velocityY = 0
    Enemy.velocityY = 0
    Enemy.velocityX = 0
    Enemy2.velocityY = 0
    Enemy2.velocityX = 0
    Enemy3.velocityY = 0
    Enemy3.velocityX = 0
    Player.velocityX = 0
    Player.velocityY = 0
    loseState();
}

}

//write function for win game
function winState(){
  swal({
    title: "YOU WIN",
    text: "Congratulations!",
    textAlign: "center",
    imageUrl: "mcimage.png",
    imageSize: "200x200",
    },
    function(){
        window.location.reload();
    })
}


function aboutGame(){
  swal({
    title: "ABOUT GAME",
    text: "Collect all of the coins using the arrow keys. Each time you collect a coin a new zombie appears. Don't get infected!",
    textAlign: "center",
    imageUrl: "zombieimage.png",
    imageSize: "200x200",
    confirmButtonText: "Got It!",
    confirmButtonColor: "lightgreen",

    },
    function(){
        GameState = "wait"
    })
}

//write code for pop up in case of gameOver
function loseState(){
  swal({
    title: "YOU LOST!",
    text: "Better Luck Next Time!",
    textAlign: "center",
    imageUrl: "zombieimage.png",
    imageSize: "200x200",
    },
    function(){
      window.location.reload();
    })
}

