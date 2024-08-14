let palavra;

function setup() {
  createCanvas(800, 800);
  palavra = palavraaleatoria();
}
function palavraaleatoria() {
  let palavras = ["cachorro","abobora","batata"];
  return random(palavras);
}
function inicializaCores() {
  background("black");
fill("white")
textAlign(CENTER, CENTER);
}
 
 function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1,palavra.length);
  let parcial = palavra.substring(0, quantidade);
   return parcial;
}
function draw(){
  inicializaCores();
  let texto = palavraParcial(8, width);
  text(texto,200,200);
  
}
function modoNoturno(horario){
  if(horario > 18) {
    console.log(" texte");}else{
      console.log("modo noturno não e necessario nesse momento.");
    }
  }
modoNoturno(65);
modoNoturno(70);