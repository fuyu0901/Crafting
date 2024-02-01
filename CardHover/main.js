var root = document.documentElement;

var card = document.querySelector('.card');

var cardPos = card.getBoundingClientRect();
console.log(cardPos);
var handleMouseMove = function (hm){
    var mouseX = (hm.x - cardPos.x)/cardPos.width;
    var mouseY = (hm.y - cardPos.y)/cardPos.height;
    
    
    console.log(mouseX,mouseY);
    root.style.setProperty('--x',mouseX);
    root.style.setProperty('--y',mouseY);


}
card.addEventListener('mousemove', handleMouseMove);