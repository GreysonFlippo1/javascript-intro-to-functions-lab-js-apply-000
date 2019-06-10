function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
<<<<<<< HEAD
  if(string.toUpperCase() == "I LOVE YOU, GRANDMA."){
    return "I love you, too.";
  }
  else if(string.toUpperCase() === string){
    return "YES INDEED!";
  }
  else if(string.toLowerCase() === string){
    return "I can't hear you!";
=======
  if(string.toUpperCase() === string){
    return ""
>>>>>>> b444dc9493539337c29aa8580c8bf8dca4dc10d4
  }
}