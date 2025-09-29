
let firstRun = true;
let img;
let planeX = 0;

function draw_one_frame(words, vocal, drum, bass, other, counter) {

let Bob = map (drum, 0, 100, -30, 30) //change last 2 to make more bob 
let sky = map (counter, 0, 12053, 290, 300)
colorMode (HSB); 

if (firstRun) {
    img = loadImage('plane.png'); // Ensure plane.png is in your project folder
    firstRun = false;
  }

// }
let c1 = color(sky, 50, 100)
let c2 = color((sky+60) % 360, 50, 100)
setGradient (c2, c1); // This code was from the help of Copilot 



//cloud 1

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


function setGradient(c2, c1) {
    for (let y = 0; y <= height; y++) {
      let inter = map(y, 0, height, 0, 1);
      let c = lerpColor(c2, c1, inter);
      stroke(c);
      line(0, y, width, y);
    } // This code was from the help of Copilot 
}

image(img, planeX, 100, 400, 200)

push();
scale(-1,1);
image(img, planeX-width, 300, 300, 200)
pop();

if (planeX > width) { 
    planeX = 0; // Reset plane position when it goes off-screen
}
planeX ++
}
