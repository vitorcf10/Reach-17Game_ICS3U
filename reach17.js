/*Vitor Caligaris
ICS3U JavaScript Challenge
3 June, 2019
Reach-17 the game where the goal is to reach exactly 17 points by getting random cards from the pile. For more information about rules run the program and click "Rules".
*/

background(0, 3, 1);//Set the background to black.
var score = 0;//Inicialize the score to 0.
var rCard;//Inatializa the random card(rCard).
var incrementX;//Initialize the x increment that will be responsible for changing the card's position.
var xCard;//Initialize x position of the cards(xCard).
var sIncrement;//Initialize the increment for the score(sIncrement) that will change the score position and update it.
var feedback;//Initialize feedback that will give feedback to the user if he wants to stop before 17.


var drawPile = function(xPos, yPos, wid, hei){//Function that draws the pile of cards(with the x, y, width, and height.
    strokeWeight(8);
    stroke(250, 247, 247);
    fill(230, 70, 70);
    rect(xPos, yPos, wid, hei);
    textSize(25);
    fill(255, 242, 242);
    text("Get a card", 275, 300);
};


var drawCard = function(xPos, yPos, wid, hei){//Function that draws a card.
    strokeWeight(3);
    stroke(255, 0, 0);
    fill(245, 175, 190);
    rect(xPos, yPos, wid, hei);
    textSize(20);
};


 var drawButton = function(btnX, btnY, btnWid, btnHei, strkWei, colour1, colour2, colour3){
    //Function that draws a button(with the parameters: x-position, y-position, width, height, stroke weight, and the 3 numbers for a color).
    strokeWeight(strkWei);
    stroke(245, 235, 235);
    fill(colour1, colour2, colour3);
    rect(btnX, btnY, btnWid, btnHei);
        
};


var loss = function(){//Fuction that creates the interface if the user loses.
    background(255, 0, 51);
    drawButton(260, 200, 140, 200, 6, 231, 142, 245);//Draw a play again button.
    fill(0);
    textSize(40);
    text("Play", 290, 270);
    //Text for the play again button.
    text("Again", 285, 320);
    fill(120, 235, 183);
    textSize(50);
    text("Loser", 100, 100);//Tell the user they lost.
    text("Score: " + score, 50 ,180);//Show that the score is greater than 17.
};


var win = function(){//Fuction that creates the interface if the user wins.
    background(0, 255, 242);
    drawButton(260, 200, 140, 200, 6, 231, 142, 245);//Draw a play again button.
    fill(0);
    textSize(40);
    text("Play", 290, 270);
    //Text for the play again button.
    text("Again", 285, 320);
    fill(242, 197, 119);
    textSize(50);
    text("Winner", 100, 100);//Tell the user they won.
    text("Score:" + score, 50 ,180);//Show the final score(17).
    
};


var stopGame = function(){//Function that creates the interface if the user stops before 17.
    if (score >= 14){//If the score is greater or equal to 14.
                feedback = "Oof! Almost there!" ;//Tell the user it was a great job.  
            }else if( score < 14 && score>7){//If the score is in between 7 and 14.
                feedback = "You could've got more cards!" ;//Tell the user it was not enough.  
            }else if(score <=7){//If the score is lower than or equal to 7.
                feedback = "Pathetic! Try harder!";//Tell the user it was bad.   
            }    
            
            background(0);
            drawButton(230, 280, 170, 120, 6, 231, 142, 245);//Draw a play again button.
            fill(0);
            textSize(30);
            text("Play", 290, 330);
            //Text for the play again button.
            text("Again", 285, 370);
            fill(252, 252, 252);
            textSize(45);
            text("Results:", 100,100);
            text("Score:" + score +"/17", 50 ,170);//Show the user their score.
            textSize(30);
            text(feedback, 15, 250);  
};    


var gameSetup = function(){//Function that creates game's interface.
    background(5, 120, 30);
    drawPile(260, 200, 140, 200);//Draw the pile.
    text("Your cards:", 15, 20);//Label for the user to know their cards.
    drawButton(270, 125, 120, 60, 5, 130, 165,245);//Draw the button to stop before 17.
    fill(3, 0, 0);
    textSize(20);
    text("Click to stop!", 273, 160);
};  

    
var game = function(){//Function for the actual game.
    incrementX = 50;
    sIncrement = 0;
    score = 0;
    rect(0, 180, 160, 260);
    mouseClicked = function(){//Function called every time the mouse is clicked.
        if(mouseX>260 && mouseX<400 && mouseY < 400 && mouseY>200) {//Borders for the pile.
            rCard = floor(random(1 , 12));//Generate a random between 1 and 11;
            drawCard(-40+incrementX, 30, 70, 90);//Draw a new card using the x increment for a new place every time.
            xCard = -20 + incrementX;//Use the x increment to change the number's position.
            fill(8, 0, 0);
            textSize(40);
            text(rCard, xCard, 90);
            incrementX+=80;
            fill(184, 36, 214);
            score+=rCard;//Update the score by adding the value of the cards the user gets.
            textSize(20);
            fill(250, 250, 250);
            text("Your score: " + score, 15, 210 + sIncrement);//Tell the score using the s increment to draw the score in a different place every time.
            sIncrement += 40;
            textSize(60);
        }
        if(score === 17){//If the score is 17.
            win();//Win runs.
            mouseClicked = function(){//Function called every time the mouse is clicked.
                if(mouseX>260 && mouseX<400 && mouseY < 400 && mouseY>200) {//Borders for the play again button. If the user wants to play again:
                    gameSetup();//gameSetup runs. 
                    game();//Game runs.
                }  
            };
        }else if(score> 17){
            loss();//loss runs.
            mouseClicked = function(){//Function called every time the mouse is clicked.
                if(mouseX>260 && mouseX<400 && mouseY < 400 && mouseY>200) {//Borders for the play again button. If the user wants to play again:
                    gameSetup();//gameSetup runs. 
                    game();//Game runs.
                }  
            };    
        }
        
        if(mouseX>270 && mouseX<390 && mouseY >125 && mouseY < 185){//Borders for the stop game button.If the game is stoped:
            stopGame();//Run stopGame.
            mouseClicked = function(){//Function called every time the mouse is clicked.
                    if(mouseX>230 && mouseX<400 && mouseY < 400 && mouseY>280) {//Borders for the play again button. If the user wants to play again:
                        gameSetup();//gameSetup runs. 
                        game();//Game runs.
                    }  
            };  
        }
    };
    
};
    
    
var menu = function(){//Function that creates the menu's interface.
    background(0, 3, 1);
    textSize(80);
    fill(120, 212, 240);
    text("Reach-17", 20, 100);//Game's name.
    noStroke();
    fill(0);
    drawButton(110, 190, 170, 60, 2, 242, 167, 167);//Draw the play button.
    textSize(35);
    fill(0);
    text("Play!", 155, 230);//Label play.
    drawButton(135, 260, 120, 60, 2, 242, 167, 167);//Draw the rules button.
    fill(0);
    text("Rules", 150, 300);//Label rules.
};
    
    
var rules = function(){//Fuction for the rules's interface.
    background(0, 75, 20);
    fill(255, 255, 255);
    textSize(60);
    text("Rules", 15, 70);
    textSize(20);
    text("1- Goal: To win make the sum of your ", 15, 100);
    text("cards be equal to 17.", 15, 120);
    text("2- Get a new card by clicking on the pile.", 15, 150);
    text("3- The cards are random numbers ", 15, 175);
    text("between 1 and 11.", 15, 195);
    text("4- If the sum is greater than 17 you lose.", 15, 220);
    text("5- You may stop before 17 and get a ", 15, 245);
    text("lower score.", 15, 265);
    drawButton(15, 330, 160, 60, 2, 255, 0, 0);//Draw the back to menu button.
    fill(0);
    textSize(20);
    text("<-- Back to menu", 20, 365);
    mouseClicked = function(){//Called every time the mouse is clicked.
        if(mouseX>15 && mouseX<165 && mouseY>330 && mouseY<390){//If back to menu is clicked.
            menu();//menu runs.
            mouseClicked = function(){//Called every time the mouse is clicked.
                if(mouseX >110 && mouseX <280 && mouseY > 190 && mouseY < 250){//If the play button is clicked.
                gameSetup();//gameSetup runs.
                game();//game runs.
                }
                if(mouseX > 135 && mouseX<255 && mouseY>260 && mouseY < 320){//If rules button is clicked.
                rules();//rules runs.
                }
            };  
        }
    };
};
    

menu();//menu runs.
mouseClicked = function(){//Called every time the mouse is clicked.
    if(mouseX >110 && mouseX <280 && mouseY > 190 && mouseY < 250){//If the play button is clicked.
        gameSetup();//gameSetup runs.
        game();//game runs.
    }
    if(mouseX > 135 && mouseX<255 && mouseY>260 && mouseY < 320){//If rules button is clicked.
        rules();//rules runs.
    }
};
   
//End.