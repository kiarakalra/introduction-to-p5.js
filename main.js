function preload() 
{}

function setup() 
{
    canvas = createCanvas(600,400);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}

function  draw() 
{
    image(video, 0, 0, 640, 480);
    fill(255,0,0)
    circle(130,130,100);
    circle(130,330,100);
    circle(430,130,100);
    circle(430,330,100);
    rect(130,130,20,200);
    rect(420,130,20,200);
    rect(130,130,300,20);
    rect(130,330,300,20)

} 
function take_snapshot() 
{
    save('student_name.png')
}