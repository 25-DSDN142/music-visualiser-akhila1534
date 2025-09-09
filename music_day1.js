
function draw_one_frame(words, vocal, drum, bass, other, counter) {
// let Xcol = map (mouseX, 0, width, 0, 255);
// let Ycol = map(mouseY, 0, height, 0, 255);
let Bob = map (drum, 0, 100, -30, 30) //change last 2 to make more bob 
let sky = map (counter, 0, 12053, 175, 315)
colorMode (HSB)
background (sky, 20, 100)
// for (let x=0; x<5; x++) {
//     let Space = 30*x
//     circle (20,10+Space,30)

// }
 //background 
 
 
 //ellipse 
 fill (255)
//circle (mouseX,mouseY,40)

//cloud
noStroke ()
fill(255)
circle (500,190+Bob,120)
circle (450,210+Bob,90)
circle (550,210+Bob,90)
circle (400,230+Bob,60)
circle (590,230+Bob,60)

//cloud 2
fill (255)
circle (100,45+Bob,90)
circle (70,60+Bob,70)
circle (130,60+Bob,70)
circle (40,70+Bob,50)
circle (160,70+Bob,50)

//cloud 3
fill (255)
circle (800,500+Bob,90)
circle (760,520+Bob,70)
circle (840,520+Bob,70)
circle (720,530+Bob,50)
circle (880,530+Bob,50)

//cloud 4 
fill(255)
circle (200,400+Bob,90)
circle (150,410+Bob,70)
circle (250,410+Bob,70)
circle (290,420+Bob,50)
circle (110,420+Bob,50)

//cloud 5 
fill (255)
circle (800,80+Bob,90)
circle (760,90+Bob,70)
circle (840,90+Bob,70)
circle (880,100+Bob,50)
circle (720,100+Bob,50)





}