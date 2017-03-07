//définition taille hitBox
var hitboxSize = 40;

//creation du canvas 
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1300;
canvas.height = 1390;
document.body.appendChild(canvas);




//image de fond; utilisation d'une variable bgReady permet que l'image soit bien chargée avant d'etre affichée
var bgReady = false; //bg pour background
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/background.jpg";

//image de helmut; utilisation d'une variable helmutReady permet que l'image soit bien chargée avant d'etre affichée
var helmutReady = false; 
var helmutImage = new Image();
helmutImage.onload = function () {
    helmutReady = true;
};
helmutImage.src = "images/helmut.jpg";
    
//image de misterNed; utilisation d'une variable misterNedReady permet que l'image soit bien chargée avant d'etre affichée
var misterNedReady = false; 
var misterNedImage = new Image();
misterNedImage.onload = function () {
    misterNedReady = true;
};
misterNedImage.src = "images/misterNed.jpg";
         
       
//image du projectile; utilisation d'une variable projectileReady permet que l'image soit bien chargée avant d'etre affichée
var projectileReady = false; 
var projectileImage = new Image();
projectileImage.onload = function () {
    projectileReady = true;
};
projectileImage.src = "images/projectile.png";


//objets du jeu
var helmut = {
    speed : 150// pixels/s
};
var misterNed = {
    
}
var projectile = {
    //speed = 
}
var helmutShot = 0;

     



//controles clavier
var keysDown = {};
addEventListener("keydown", function (e) {
                 keysDown[e.keyCode] = true;
},false);
         
addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
},false);

//reset au début
var reset = function () {
    helmut.x = canvas.width / 2;
    helmut.y = 100;
}
     



//mettre a jour les objets du jeu
var update = function(modifier) {
    if (37 in keysDown && helmut.x > 0+300 ) {//si fleche gauche && helmut dans l'image + marge
        helmut.x -= helmut.speed * modifier;
    }
    
    if(39 in keysDown && helmut.x< (canvas.width - 400) ) {//si flèche droite && helmut dans l'image + marge
        helmut.x += helmut.speed * modifier;
    }

    //partie colition projectiles et helmut
    /*
    if ( 
    Math.abs((helmut.x - projectile.x)) < hitboxSize
    ){
        ++helmutShot;
        reset();
    }*/
}



//affichage
var render = function () {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    if(bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }
    if(helmutReady) {
        ctx.drawImage(helmutImage, helmut.x, helmut.y);
    }
    if(misterNedReady) {
        ctx.drawImage(misterNedImage, 560, 1080);
    }
    if(projectileReady) {
        ctx.drawImage(projectileImage, 590, 1100, 200, 150);
    }
}
         
         
         
         
//compatibilité browsers
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	
	requestAnimationFrame(main);
};         
         
// boucle infinie
var then = Date.now();
reset();
main();