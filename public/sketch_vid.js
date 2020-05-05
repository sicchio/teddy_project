var canvas;
var h2;
var socket;
var img;



function setup() {
  // create canvas
  socket = io.connect('http://localhost:3000');
  socket.on('words', vid);

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
}






function vid(){

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

cconsole.log('Sending:' + name + name2 + name3);

}



function draw(data){
//image(data.capture, 0,0);
console.log ('receive ' + name );

}
