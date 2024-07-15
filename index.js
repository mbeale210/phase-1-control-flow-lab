function scuberGreetingForFeet(startingLocation){
  const dist = startingLocation
  if (dist <= 400){
    return "This one is on me!";
  }
  if (dist <= 2000){
    return "That will be twenty bucks.";
  }
  if (dist <= 2500){
    return "I will gladly take your thirty bucks.";
  }
  if (dist > 2500){
    return "No can do.";
  }
  // Write your code here!
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  // Write your code here!
}

function switchOnCharmFromTip(custResp){
  switch(custResp){
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye.";

  }
  // Write your code here!
}