function scuberGreetingForFeet(Feet){
  if (Feet<400){
    return 'This one is on me!'
  }
    else if(Feet>2000 && Feet<2500){
      return 'I will gladly take your thirty bucks.'
      }
      else if (Feet>2500){
        return 'No can do.'
      }
}

function ternaryCheckCity(city){
  return city ==="NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(Tip){
  switch (Tip){
  case 'generous':
    return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
      default:
        return 'Bye.';
  }


  // Write your code here!
}