var canvas;
var h2;
var socket;
var img;



function setup() {
  // create canvas
  socket = io.connect('http://167.172.247.68:3000');
  socket.on('words', newDraw);

  canvas = createCanvas(640, 480);
canvas.position(400,0);

  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();


  input = createInput();
  input.position(20, 65);
  input2 = createInput();
  input2.position(20, 130);
  input3 = createInput();
  input3.position(20, 195);
  input4 = createInput();
  input4.position(20, 260);
  input5 = createInput();
  input5.position(20, 325);

  question = createElement('h3', 'How would you describe your mood?');
  question.position(5, 5);

  question2 = createElement('h3', 'What do you see when you close your eyes?');
  question2.position(5, 70);

  question3 = createElement('h3', 'What sound/music do you need to hear now?');
  question3.position(5, 135);

  question4 = createElement('h3', 'What do you wish you could be doing right now?');
  question4.position(5, 200);

  question5 = createElement('h3', 'Other information you’d like to share?');
  question5.position(5, 265);

  // textAlign(CENTER);
   textSize(50);
  // textFont('Helvetica');

}






function draw(){

  image(capture, 0,0);

var name = input.value();
var name2 = input2.value();
var name3 = input3.value();
var name4 = input4.value();
var name5 = input5.value();

var data = {
  overall: name,
  projection: name2,
  sound: name3,
  movement:name4,
  other: name5
}

socket.emit('words', data);


fill(255);
text(name, 50, 50);

//translate(random(0,800), random(0,800));
  fill(255);
  text(name2, 600,100);

  // translate(random(0,800), random(0,800));
    fill(255);
    text(name3, 100, 100);

    // translate(random(0,800), random(0,800));
      fill(255);
      text(name4, 500, 50);

      // translate(random(0,800), random(0,800));
        fill(255);
        text(name5, 50, 200);
//  pop();


console.log('Sending:' + name + name2 + name3);


}

function newDraw(data){

  // var name = input.value();
  // var name2 = input2.value();
  // var name3 = input3.value();
  // var name4 = input4.value();
  // var name5 = input5.value();

  fill(0,0,255);
  text(data.name, 50, 50);

  //translate(random(0,800), random(0,800));
    fill(0,0,255);
    text(data.name2, 600,100);

    // translate(random(0,800), random(0,800));
      fill(0,0,255);
      text(data.name3, 100, 100);

      // translate(random(0,800), random(0,800));
        fill(0,0,255);
        text(data.name4, 500, 50);

        // translate(random(0,800), random(0,800));
          fill(0,0,255);
          text(data.name5, 50, 200);

          console.log ('Receiving: ' + data.name + data.name2 + data.name3);
}
