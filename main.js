song = "";
song2 = "";
function setup()
{
    canvas = createCanvas(500, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function preload()
{
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function draw()
{
    image (video, 0, 0, 600, 500);
}