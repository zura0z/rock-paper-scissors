function Game(myChoice){
    var humanChoice, botChoice;
    humanChoice = myChoice.id;
    botChoice = numberToChoose(rand());
    result = winner(humanChoice, botChoice);
    message = finallMsg(result);
    front(myChoice.id, botChoice, message);
}
function rand(){
  return Math.floor(Math.random()*3);
}
function numberToChoose(number){
  return ['rock', 'paper', 'scissors'][number]
}
function winner(myChoice, compChoise){
  var gameDatabase = {
      'rock' : {'scissors': 1, 'rock': 0.5, 'paper': 0},
      'paper' : {'rock': 1, 'paper': 0.5, 'scissors': 0},
      'scissors' : {'paper': 1, 'scissors': 0.5, 'rock': 0},
  }
  var yourScore = gameDatabase[myChoice][compChoise];
  var compScore = gameDatabase[compChoise][myChoice];

  return [yourScore, compScore];
}
function finallMsg([yourScore, compScore]){
    if (yourScore === 0){
      return {'message': 'You Lost', 'color': 'red'};
    } else if (yourScore === 0.5){
      return {'message': 'Draw', 'color': 'yellow'};
    } else {
      return {'message': 'You Win', 'color': 'green'};
    }
}
function front(myImage, compImage, finallMsg){
  var imgDatabase = {
   'rock' : document.getElementById('rock').src,
    'paper' : document.getElementById('paper').src,
    'scissors' : document.getElementById('scissors').src
  }
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

    var myDiv = document.createElement('div');
    myDiv.setAttribute('id', 'my');
    var compDiv = document.createElement('div');
    compDiv.setAttribute('id', 'comp');
    var msg = document.createElement('div');
    msg.setAttribute('id', 'msg');

    myDiv.innerHTML = '<a href="main.html">'+"<img src='"+ imgDatabase[myImage] + "'>" +'</a>';
    msg.innerHTML = "<h1>"+ finallMsg['message']+"</h1>";
    compDiv.innerHTML = '<a href="main.html">'+"<img src='"+ imgDatabase[compImage] + "'>"+'</a>';

    document.getElementById('omg').appendChild(myDiv);
    document.getElementById('omg').appendChild(msg);
    document.getElementById('omg').appendChild(compDiv);
}