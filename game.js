

//définition taille hitBox
var hitboxSize = 40;

//creation du canvas 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 1300;
canvas.height = 1700;
document.body.appendChild(myCanvas); // créer un child nommée Canvas dont l'élément parent sera le body du HTML


//image de fond; utilisation d'une variable bgReady permet que l'image soit bien chargée avant d'etre affichée
var bgReady = false; //bg pour background, On attribue la valeur false, pour être sûr qu'elle est sur False
var bgImage = new Image(); // créer une nouvelle image 
bgImage.onload = function () {
    bgReady = true; //Lance une fonction qui ce termine quand l'image est chargé, dans ce cas là bgready prend la veleur true
};
bgImage.src = "https://thumbs.dreamstime.com/z/school-classroom-top-view-blackboard-desks-no-teachers-students-flat-vector-illustration-white-background-74366941.jpg"; 

//image de helmut; utilisation d'une variable helmutReady permet que l'image soit bien chargée avant d'etre affichée
var helmutReady = false; 
var helmutImage = new Image();
helmutImage.onload = function () {
    helmutReady = true;
};
helmutImage.src = "https://33.media.tumblr.com/c99a579db3ae0fc164bf4cca148885d3/tumblr_mqb9q9cgvl1rbj3w1o1_400.gif";
    
    //véritable placeholder "images/helmut.jpg";

//image de misterNed; utilisation d'une variable misterNedReady permet que l'image soit bien chargée avant d'etre affichée
var misterNedReady = false; 
var misterNedImage = new Image();
misterNedImage.onload = function () {
    misterNedReady = true;
};
misterNedImage.src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRnXz_-uQMzq8Tk2r0Lez4ZaOzqTAoIxqL3zv6-Wcur8Wv7qGNFk4I9epo";
         
       
//image du projectile; utilisation d'une variable projectileReady permet que l'image soit bien chargée avant d'etre affichée
var projectileReady = false; 
var projectileImage = new Image();
projectileImage.onload = function () {
    projectileReady = true;
};
projectileImage.src = "http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Shell-Green-icon.png";


//objets du jeu
var helmut = {
    speed : 550// pixels/s
};
var misterNed = {
    
}
var projectile = {
    //speed = 
}
var helmutShot = 0;

     



//controles clavier
var keysLeft = {};
addEventListener("keydown", function (e) {  // "keydown" signifie une touche est enfoncé, le (e) stand for event
                 keysLeft[e.keyCode] = true; //
},false);
         
addEventListener("keyup", function (e) {
    delete keysLeft[e.keyCode];
},false);

//reset au début
var reset = function () {
    helmut.x = canvas.width / 2;
    helmut.y = 100;
}
     
//mettre a jour les objets du jeu
var update = function(modifier) {
    if (37 in keysLeft && helmut.x > 0 ) {//si fleche gauche && helmut dans l'image + marge
        helmut.x -= helmut.speed * modifier;
    }
    
    if(39 in keysLeft && helmut.x< (1300 - 400) ) {//si flèche droite && helmut dans l'image + marge
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
        ctx.drawImage(misterNedImage, 560, 1040, 150, 200);
    }
    if(projectileReady) {
        ctx.drawImage(projectileImage, 700, 1100, 110, 110);
    }
}
         
         
         
         
//compatibilité navigateurs
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