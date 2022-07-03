const canvas= document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// BRUSH STATMENT //// BRUSH STATMENT //// BRUSH STATMENT //// BRUSH STATMENT //
// console.log(ctx)


// canvas.addEventListener("mousemove", function(e){
//     // console.log(e.x, e.y);
//     ctx.beginPath();
//     ctx.rect(e.x, e.y, 10, 10);
//     ctx.fill();

// })


// ctx.beginPath()
// ctx.arc(100,100, 50, 0 ,360);
// ctx.fill()

// BRUSH STATMENT //// BRUSH STATMENT //// BRUSH STATMENT //// BRUSH STATMENT //// BRUSH STATMENT //

// CIRCLE STATMENT //// CIRCLE STATMENT //// CIRCLE STATMENT //// CIRCLE STATMENT //// CIRCLE STATMENT //

let atoms = [];


//EVENT LISTENER // 
//EVENT LISTENER // 
//EVENT LISTENER // 

// canvas.addEventListener("mousemove", function(e){
//     for(let i = 0; i < 20; i++) {
//         atoms.push(new Atom(e.x, e.y));
//     }
// });


//EVENT LISTENER // 
//EVENT LISTENER // 
//EVENT LISTENER // 

const animate = () => {
    atoms.forEach((atom, index )=>{
        ctx.fillStyle = "white"
        atom .draw();
        atom.updateSpeed();
        atom.updateSize();

        if (atom.radius < 0.3){
            atoms.splice(index, 1)
        }
    });
    ctx.save();
    ctx.fillStyle = "rgba(255,255,255,0.2)";

    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0,0,canvas.width, canvas.height)
    ctx.restore();

    requestAnimationFrame(animate);
}

animate();

class Atom{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 2 + 2;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;

    }

    updateSpeed(){
        this.x += this.speedX;
        this.y += this.speedY;
        
    }

    updateSize(){
        this.radius -=  0.1;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fill();
    }
}

const point = {
    x:0,
    y:0,
}

let degree = 0

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

const generateAtoms = () => { 
    atoms.push(new Atom(canvas.width/2 + (point.x * random(1,200)), canvas.height/2 + (point.y * random(1,200))));
    point.x = Math.cos(degree /180 * Math.PI);
    point.y =  point.x * point.x ;

    degree ++;


    // atoms.push( new Atom(Math.random()* canvas.width, Math.random()* canvas.height));
    requestAnimationFrame(generateAtoms);
}

generateAtoms();