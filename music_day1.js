
function draw_one_frame(words, vocal, drum, bass, other, counter) {
let Xcol = map (mouseX, 0, width, 0, 255);
let Ycol = map(mouseY, 0, height, 0, 255);
background (Xcol, Ycol, 255)
// for (let x=0; x<5; x++) {
//     let Space = 30*x
//     circle (20,10+Space,30)

// }
 //background 
 
 
 //ellipse 
 fill (255)
circle (mouseX,mouseY,40)

//cloud
fill(255)
circle (5,200,20)


}