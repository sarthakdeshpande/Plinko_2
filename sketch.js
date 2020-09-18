const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var play = 1;
var end = 0;

var balls = [];
var plinkos = [];
var divs = [];

var engine, world;
var ground, particle;
var divHeight = 200;

var gamestate = play;
var score = 0;
var count = 0;

function setup(){
    createCanvas(800, 750);
    engine = Engine.create();
    world = engine.world;

    //wall1 = new Wall(2, 300, 10, 600);
    //wall2 = new Wall(502, 300, 10, 600);

    
    for (var k = 12; k <= width; k = k+80) {
        divs.push(new Division(k, height - divHeight/2, 10, divHeight));
    }


    for (var j = 35; j <=width; j=j+50) {
        plinkos.push(new Plinko(j, 90, 10));
    }

    for (var j = 20; j <=width-10; j = j+50) {
        plinkos.push(new Plinko(j,160, 10));
    }

    for (var j = 35; j <=width; j=j+50) {
        plinkos.push(new Plinko(j, 230, 10));
    }

    for (var j = 20; j <=width-10; j = j+50) {
        plinkos.push(new Plinko(j,300, 10));
    }

    for (var j = 20; j <=width-10; j = j+50) {
        plinkos.push(new Plinko(j,370, 10));
    }

    for (var j = 20; j <=width-10; j = j+50) {
        plinkos.push(new Plinko(j,440, 10));
    }
    
}

function draw(){
    background("black");
    Engine.update(engine);

    fill("white");
    textSize(25);
    text("Score : ", 10, 30);
    text(score, 100, 30);
  text("1000", 25, 570);
  text("1000", 105, 570);
  text("300", 190, 570);
  text("500", 270, 570);
  text("500", 350, 570);
  text("500", 430, 570);
  text("500", 510, 570);
  text("300", 590, 570);
  text("1000", 660, 570);
  text("1000", 740, 570);


    
    for (var k = 0; k < divs.length; k++) {
        divs[k].display();
    }

    for (var j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
    }



        if(particle!=null) {
            particle.display();
    
            if (particle.body.position.y>400) {
    
                if (particle.body.position.x > 0 && particle.body.position.x < 160 && particle.body.position.y > 600){
                    score = score+500;
                    particle=null;
                    count = count+1;

                    if(count === 5) {
                        gamestate = end;
                    }

                    
                }
            }
        }

        if(particle!=null) {
            particle.display();
    
            if (particle.body.position.y>400) {
    
                if (particle.body.position.x > 160 && particle.body.position.x < 320 && particle.body.position.y > 600){
                    score = score+300;
                    particle=null;
                    count = count+1;

                    if(count === 5) {
                        gamestate = end;
                    }

                    
                }
            }
        }

        if(particle!= null){
            particle.display();
           
          if(particle.body.position.y > 760 && particle.body.position.x < 660){
                  score = score + 500;
                  particle=null;
                  //if (count >= 5) gameState= "end";
            }    
          }
          
         
          if(particle!= null){
            particle.display();
        
            if(particle.body.position.y > 760 && particle.body.position.x < 20){
                 score = score + 500;
                  particle=null;
                  if (count >= 5) gameState= "end";
                
            }
          }
        
          if(particle!= null){
            particle.display();
        
            if(particle.body.position.y > 760){
                if(particle.body.position.x < 100){
                  score = score + 500;
                  particle=null;
                  if (count >= 5) gameState= "end";
                }
            }
          }
        
          if(particle!= null){
            particle.display();
        
            if(particle.body.position.y > 760){
                if(particle.body.position.x < 180){
                  score = score + 500;
                  particle=null;
                  if (count >= 5) gameState= "end";
                }
            }
          }
          
          if(particle!= null){
            particle.display();
        
            if(particle.body.position.y > 760){
                if(particle.body.position.x < 260){
                  score = score + 500;
                  particle=null;
                  if (count >= 5) gameState= "end";
                }
            }
          }
        
          if(particle!= null){
            particle.display();
        
            if(particle.body.position.y > 760){
                if(particle.body.position.x < 340){
                  score = score + 500;
                  particle=null;
                  if (count >= 5) gameState= "end";
                }
            }
          }
        
          if(particle!= null){
            particle.display();
        
            if(particle.body.position.y > 760){
                if(particle.body.position.x < 420){
                  score = score + 500;
                  particle=null;
                  if (count >= 5) gameState= "end";
                }
            }
          }
        
          if(particle!= null){
            particle.display();
        
            if(particle.body.position.y > 760){
                if(particle.body.position.x < 500){
                  score = score + 500;
                  particle=null;
                  if (count >= 5) gameState= "end";
                }
            }
          }
        
          if(particle!= null){
            particle.display();
        
            if(particle.body.position.y > 760){
                if(particle.body.position.x < 580){
                  score = score + 500;
                  particle=null;
                  if (count >= 5) gameState= "end";
                }
            }
          }
        
          if(particle!= null){
            particle.display();
        
            if(particle.body.position.y > 760){
                if(particle.body.position.x < 660){
                  score = score+500;
                  particle=null;
                  if (count >= 5) gameState= "end";
                }
            }
          }
        
          if(particle!= null){
            particle.display();
        
            if(particle.body.position.y > 760){
                if(particle.body.position.x < 740){
                  score = score+500;
                  particle=null;
                  if (count >= 5) gameState= "end";
                }
            }
          }

        if(particle!=null) {
            particle.display();
    
            if (particle.body.position.y>400) {
    
                if (particle.body.position.x > 320 && particle.body.position.x < 480 && particle.body.position.y > 600){
                    score = score+100;
                    particle=null;
                    count = count+1;

                    if(count === 5) {
                        gamestate = end;
                    }
    
                   
                }
            }
        }
    
        if (gamestate === end) {
            
            textSize(50);
            fill("#AFFF33")
            text("GAME OVER", 90, 280);
        }


    
}

function mousePressed() {
    if (gamestate !== end) {
        //count++;
        particle = new Particle(mouseX, 10, 10, 10);
    }

    
}