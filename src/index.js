const messages = [
    
"Cuando pierdas, no pierdas la lección - Dalai Lama",
"No busques los errores, busca un remedio - Henry Ford",
"La vida es una aventura, atrévete - Teresa de Calcuta",
"Tu actitud, no tu aptitud, determinará tu altitud - Zig Ziglar",
"Tienes que hacer las cosas que crees que no puedes hacer - Eleanor Roosevelt",
"Si te caíste ayer, levántate hoy - H. G. Wells",
"Siempre parece imposible... hasta que se hace - Nelson Mandela",
"Si no pierdes, no puedes disfrutar de las victorias - Rafael Nadal",
"No dejes que el miedo se interponga en tu camino - Babe Ruth"
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };