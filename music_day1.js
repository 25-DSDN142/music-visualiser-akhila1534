
// let planeImg; 
// function preload() {
//     planeImg = loadImage('plane.png'); // Ensure plane.png is in your project folder
// }

// function setup () {
//     createCanvas (900,600);
//    colorMode (HSB);
// }

let firstRun = true;
let img;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
// let Xcol = map (mouseX, 0, width, 0, 255);
// let Ycol = map(mouseY, 0, height, 0, 255);

let Bob = map (drum, 0, 100, -30, 30) //change last 2 to make more bob 
let sky = map (counter, 0, 12053, 290, 300)
colorMode (HSB); 

if (firstRun) {
    img = loadImage('paperplane.png'); // Ensure plane.png is in your project folder
    firstRun = false;
  }

// }
let c1 = color(sky, 50, 100)
let c2 = color((sky+60) % 360, 50, 100)
setGradient (c2, c1); // This code was from the help of Copilot 



//cloud
noStroke ()
fill(0,0,100,0.5)
circle (500,190+Bob,120)
circle (450,210+Bob,90)
circle (550,210+Bob,90)
circle (400,230+Bob,60)
circle (590,230+Bob,60)

//cloud 2

circle (100,45+Bob,90)
circle (70,60+Bob,70)
circle (130,60+Bob,70)
circle (40,70+Bob,50)
circle (160,70+Bob,50)

//cloud 3

circle (800,500+Bob,90)
circle (760,520+Bob,70)
circle (840,520+Bob,70)
circle (720,530+Bob,50)
circle (880,530+Bob,50)

//cloud 4 

circle (200,400+Bob,90)
circle (150,410+Bob,70)
circle (250,410+Bob,70)
circle (290,420+Bob,50)
circle (110,420+Bob,50)

//cloud 5 

circle (800,80+Bob,90)
circle (760,90+Bob,70)
circle (840,90+Bob,70)
circle (880,100+Bob,50)
circle (720,100+Bob,50)



fill(255); // Black text, change color if needed
textSize(28); // Adjust size as you like
textFont ("Tahoma"); // Change to your preferred font
textStyle(BOLD); // Make text bold
textAlign(RIGHT, CENTER);
text(words.toUpperCase(), width - 110, height / 2); // 30px from right and bottom edges

//Replace the image code with this inside draw_one_frame:
// let planeX = (counter * 3) % width; // Slow, continuous horizontal glide
// let planeY = height / 2 + 100 * sin(counter * 0.01); // Smooth vertical glide

// push();
// translate(planeX, planeY);
// scale(1.5); // Make the plane much bigger (adjust as needed)
// fill(220);
// stroke(0);
// strokeWeight(2);
// // Main body (bigger coordinates)
// triangle(0, 0, 80, 20, 0, 40);
// // Left wing
// triangle(0, 0, 30, 20, -20, 30);
// // Right wing
// triangle(0, 40, 30, 20, -20, 30);
// pop();


function setGradient(c2, c1) {
    for (let y = 0; y <= height; y++) {
      let inter = map(y, 0, height, 0, 1);
      let c = lerpColor(c2, c1, inter);
      stroke(c);
      line(0, y, width, y);
    } // This code was from the help of Copilot 
}

image(img, 300, 300, 100, 100)

push();
scale(-1,1);
image(img, -300, 400, 100, 100)
pop();

if (image > width) {
    image = -100; // Reset position to the left off-screen
  }
}

//Animating plane 

// background (sky, 20, 100)
// for (let x=0; x<5; x++) {
//     let Space = 30*x
//     circle (20,10+Space,30)
