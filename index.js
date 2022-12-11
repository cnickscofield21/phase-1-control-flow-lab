function scuberGreetingForFeet(distance = 0){
  
  if (distance < 401) {
    return 'This one is on me!';
  } else if (distance < 2001) {
    return 'That will be twenty bucks.';
  } else if (distance < 2501) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }

}

function ternaryCheckCity(city = ""){
  return (city === "NYC") ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }

}