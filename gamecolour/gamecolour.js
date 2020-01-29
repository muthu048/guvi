
        var resultColor = [];
        var shiftCircle = 0;
        var randomColor = [];
        var repeatArr = [];
        //Game Over GIF
        var gameOver = document.createElement('img');
        var gameOverDiv = document.createElement('div');
        gameOver.setAttribute('src',"https://media.giphy.com/media/fdGbhuUQpGQkkuuzIr/giphy.gif");
        gameOver.style.height = "200px";
        gameOver.style.width = "500px";
        gameOverDiv.appendChild(gameOver);
        // var gameWon = document.createElement('img');
        // var gameWonDiv = document.createElement('div');
        // gameWon.setAttribute('src',"https://media.giphy.com/media/fdGbhuUQpGQkkuuzIr/giphy.gif");
        // gameWon.style.height = "200px";
        // gameWon.style.width = "500px";
        // gameWonDiv.appendChild(gameWon);
 
        function getRandomColor(){
            var myArr = ["#A93226","#76448A","#1F618D","#17A589","#D4AC0D","#D68910","#BA4A00","#D0D3D4","#707B7C","#ABEBC6","#85C1E9","#EC7063"];
            var color=myArr[Math.floor(Math.random()*myArr.length)];
            repeatArr.push(color);
            randomColor.push(color);
            return color;
        }
        console.log(randomColor)
        var circleOne = document.createElement('div');
        circleOne.id="box1";
        circleOne.style.backgroundColor=getRandomColor();
        circleOne.style.margin = "30px";
        circleOne.style.border = "1px solid black";
        circleOne.style.height = "50px";
        circleOne.style.width = "50px";
        circleOne.style.borderRadius = "50%";
        circleOne.style.display = "inline-block";
        document.body.appendChild(circleOne);
        //Circle Two
        var circleTwo = document.createElement('div');
        circleTwo.id="box2";
        circleTwo.style.backgroundColor=getRandomColor();
        circleTwo.style.margin = "30px";
        circleTwo.style.border = "1px solid black";
        circleTwo.style.height = "50px";
        circleTwo.style.width = "50px";
        circleTwo.style.borderRadius = "50%";
        circleTwo.style.display = "inline-block";
        document.body.appendChild(circleTwo);
        //Circle Three
        var circleThree = document.createElement('div');
        circleThree.id="box3";
        circleThree.style.backgroundColor=getRandomColor();
        circleThree.style.margin = "30px";
        circleThree.style.border = "1px solid black";
        circleThree.style.height = "50px";
        circleThree.style.width = "50px";
        circleThree.style.borderRadius = "50%";
        circleThree.style.display = "inline-block";
        document.body.appendChild(circleThree);
        //Circle Four
        var circleFour = document.createElement('div');
        circleFour.id="box4";
        circleFour.style.backgroundColor=getRandomColor();
        circleFour.style.margin = "30px";
        circleFour.style.border = "1px solid black";
        circleFour.style.height = "50px";
        circleFour.style.width = "50px";
        circleFour.style.borderRadius = "50%";
        circleFour.style.display = "inline-block";
        document.body.appendChild(circleFour);
        //remove
        var delay=5000;
        setTimeout(function getRandomColor(){
        document.getElementById('box1').style.backgroundColor="";
        document.getElementById('box2').style.backgroundColor="";
        document.getElementById('box3').style.backgroundColor="";
        document.getElementById('box4').style.backgroundColor="";
        },delay);
 
        //Heart Life
       
        var heart1 = document.createElement('img');
        heart1.setAttribute('src',"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png")
        heart1.style.height = "50px;"
        heart1.style.width = "50px";
        heart1.style.float = "right";
        document.body.appendChild(heart1);
        var heart2 = document.createElement('img');
        heart2.setAttribute('src',"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png")
        heart2.style.height = "50px;"
        heart2.style.width = "50px";
        heart2.style.float = "right";
        document.body.appendChild(heart2);
        var heart3 = document.createElement('img');
        heart3.setAttribute('src',"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png")
        heart3.style.height = "50px;"
        heart3.style.width = "50px";
        heart3.style.float = "right";
        document.body.appendChild(heart3);
       
        // Color Pallete
        const myArr = ["#A93226","#76448A","#1F618D","#17A589","#D4AC0D","#D68910","#BA4A00","#D0D3D4","#707B7C","#ABEBC6","#85C1E9","#EC7063"];
        for(let i = 0 ;i< 12;i++){
        var colorPalette = document.createElement('button');
        colorPalette.setAttribute('id',""+i+"");
        colorPalette.style.background = myArr[i];
        colorPalette.style.height = "60px";
        colorPalette.style.width = "100px";
        colorPalette.setAttribute('onClick',"printPalette("+i+")");
        document.body.appendChild(colorPalette);
        }
 
        function printPalette(color){
            for (let index = 0; index < 12; index++) {
                if(index == color){
                    circleOne.style.backgroundColor = myArr[index];
                }
            }
        }
        var tryLife =0
        function printPalette(color){
            shiftCircle++
            for (let index = 0; index < 12; index++) {
                if(index == color){
                    if(shiftCircle==1){
                    circleOne.style.backgroundColor = myArr[index];
                    resultColor.push(myArr[index]);
                    }
                    if(shiftCircle==2){
                        circleTwo.style.backgroundColor = myArr[index];
                        resultColor.push(myArr[index]);
                        }
                    if(shiftCircle==3){
                        circleThree.style.backgroundColor = myArr[index];
                        resultColor.push(myArr[index]);
                        }
                    if(shiftCircle==4){
                        circleFour.style.backgroundColor = myArr[index];
                        resultColor.push(myArr[index]);
                        shiftCircle=0
                        }
                   
 
                }
               
            }
            if(resultColor.length==4){
                var result1=JSON.stringify(resultColor)
                var result2=JSON.stringify(randomColor)
                if (result1==result2)
                {
                    alert('you won')
                    //document.body.appendChild(gameWonDiv);
                }
                else{
                     tryLife++
                     if(tryLife==3){
                         removeHeartLife();
                        //alert('game over');
                        document.body.appendChild(gameOverDiv);
                    }
                     else{
                        removeHeartLife(tryLife);
                        resultColor=[];
                        circleOne.style.background = "";
                        circleTwo.style.background = "";
                        circleThree.style.background = "";
                        circleFour.style.background = "";
                     }
                }
               
 
            }
        }
        function removeHeartLife(tryLife){
            if(tryLife == 1){
                document.body.removeChild(heart1);
            }else if(tryLife == 2){
                document.body.removeChild(heart2);
            } else {
                document.body.removeChild(heart3);
            }
        }