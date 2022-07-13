const checkbox = document.getElementById("checkbox");
const container = document.querySelector(".container");
const neumorphisms = document.querySelectorAll(".card, .box");
const allBlacks = document.querySelectorAll(".description > h3, .inf > p, .atout > p, .box > p, .contenu > p, .line, .skill");

checkbox.addEventListener("change", () => {
  container.classList.toggle("ligth");

  for (const neumorphism of neumorphisms){
    neumorphism.classList.toggle("neumorphism");
  }
  

  for (const allBlack of allBlacks) {
    allBlack.classList.toggle('black')
  }
  
});

var change = document.getElementById('change')
var changed = ["Développeur front-end", "Développeur back-end", "Développeur full-stack"]
i=0;

setInterval (function(){
    change.textContent = changed[i++ % changed.length];
},1000)
