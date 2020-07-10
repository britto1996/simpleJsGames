//challenge1: print my birthdate
function addBirthdays(){
    var yourBirth = prompt('my birthdate is?');
    var birthDays = (2020 - yourBirth) * 365;
    // console.log(birthDays);
    // document.getElementById('finalResult').innerHTML = birthDays;
   var h1 = document.createElement('h1');
   var birthdate = document.createTextNode('you have ' + birthDays + ' years old');
   h1.setAttribute('id' , 'birthdays');
   h1.appendChild(birthdate);
   document.getElementById('finalResult').appendChild(h1);
}
function resetBirthdays(){
    document.getElementById('birthdays').remove();
}
//challenge2: photo generator
function photoGenerate(){
    var image = document.createElement('img');
    var div = document.getElementById('generatePhoto');
    image.src = '../images/rakul-preet-singh-2014-wallpaper.jpg';
    div.appendChild(image);
}
//challenge3: rock , paper , scissors
function rpsGame(play){
    var humanChoice , botChoice;
    var humanChoice = play.id;
    
    var botChoice = rpsRand(randtoInt());
    // console.log('computerChoice:' , botChoice);
    var decideWinner = gameWinner(humanChoice , botChoice);
    // console.log(decideWinner);
    
    var message = finalMessage(decideWinner);
    console.log(message);
    
    var finalDisplay = finalResult(humanChoice , botChoice , message);
}

function randtoInt(){
    var mathResult = Math.floor(Math.random() * 3);
    return mathResult;
}

function rpsRand(number){
    var result = ['rock' , 'paper' , 'scissor'][number];
    return result;
}

function gameWinner(myChoice , computerChoice){
    var rpsDatabase = {
        'rock': {'rock': 0.5 , 'paper': 1 , 'scissor': 0},
        'paper': {'rock': 0 , 'paper': 0.5 , 'scissor': 1},
        'scissor': {'rock': 1 , 'paper': 0 , 'scissor': 0.5},
    };
    var myScore =  rpsDatabase[myChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][myChoice];
    return [myScore , computerScore];
}

function finalMessage([myScore , computerScore]){
    if(myScore === 0){
        return {'message': 'you lost!' , 'color': 'red'};
    }else if(myScore === 0.5){
        return {'message': 'tied!' , 'color': 'yellow'};
    }else {
        return {'message': 'you won!' , 'color': 'green'};
    }
}

function finalResult(humanImageChoice , botImageChoice , message){
    var imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    humanimageDiv = document.createElement('div');
    botimageDiv = document.createElement('div');
    messageDiv = document.createElement('div');

    humanimageDiv.innerHTML = "<img src='" + imageDataBase[humanImageChoice] + "'style='box-shadow: 0px 10px 50px rgba(37 , 50 , 233 ,1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size: 60px; padding: 30px; '>" + message['message'] + "</h1>"
    botimageDiv.innerHTML = "<img src='" + imageDataBase[botImageChoice] + "' style='box-shadow: 0px 10px 50px rgba(248 , 33 , 24 , 1);'>"

    document.getElementById('flexbox-rps-div').appendChild(humanimageDiv);
    document.getElementById('flexbox-rps-div').appendChild(messageDiv);
    document.getElementById('flexbox-rps-div').appendChild(botimageDiv);

   }

   //challenge4: change button colors

   var addButtons = document.getElementsByTagName("button");
   console.log(addButtons);

//    var copyButtons = [];
//    for(let i=0; i < addButtons.length; i++){
//        copyButtons.push(addButtons[i]);
//    }
//    console.log(copyButtons);
   