/*
Make your own interactive project using the skills you have learned in this lesson.
You should:

+ Use if...else and conditions using comparison operators (==, ===, !=,
!==, >, <, ...) or logical operators (&&, ||, !) to make decisions
+ Use a function to group code
+ Use let to create a variable and then reassign it
+ Share your pen (or pens!) on slack

Bonus?
+ Use functions with one or more return statements
+ Combine multiple logical operators (&&, ||, !) in a condition
+ Investigate how comparison operators work with Strings
+ Research and use a switch case statement
+ Format your code neatly and use helpful variable names
*/


console.log("✩°｡⋆~ A Zombie Apocalypse Survival Quiz ~⋆｡°✩");
console.log("Answer the following questions to determine your survival skills.");
let totalPoints = 0;

const question1 = prompt(`Question 1: How social are you - 'a', 'd', 'c' or 'd'?
      · a - Scattered sheep need a shepherd
      · b - United we are strong
      · c - I'm surrounded by idiots 
      · d - It's just me, myself and I`);
  if (question1 === 'a') {
    totalPoints += 5;
  } else if (question1 === 'b') {
    totalPoints += 3;
  } else if (question1 === 'c') {
    totalPoints += 2;
  } else if (question1 === 'd') {
    totalPoints = 0;
  }

const question2 = prompt(`What is your preferred method of carrying essentials? - 'a', 'b', 'c' or 'd'? 
      · a - Backpack
      · b - Briefcase
      · c - Purse/wallet
      · d - Pockets`);
  if (question2 === 'a') {
    totalPoints += 5;
  } else if (question2 === 'b') {
    totalPoints += 3;
  } else if (question2 === 'c') {
    totalPoints += 2;
  } else if (question2 === 'd') {
    totalPoints = 0;
  }

const question3 = prompt(`Which of these would you consider an essential EDC (everyday carry) item - 'a', 'b', 'c' or 'd'? 
      · a - Multi-tool
      · b - Flashlight
      · c - Pen
      · d - Phone`);
  if (question3 === 'a') {
    totalPoints += 5;
  } else if (question3 === 'b') {
    totalPoints += 3;
  } else if (question3 === 'c') {
    totalPoints += 2;
  } else if (question3 === 'd') {
    totalPoints = 0;
  }

const question4 = prompt(`Where do you live - 'a', 'b', 'c' or 'd'? 
      · a - Mountain ranges
      · b - On the water
      · c - Countryside
      · d - Urban area`);
  if (question4 === 'a') {
    totalPoints += 5;
  } else if (question4 === 'b') {
    totalPoints += 3;
  } else if (question4 === 'c') {
    totalPoints += 2;
  } else if (question4 === 'd') {
    totalPoints = 0;
  }

const question5 = prompt(`Which is your preferred mode of transport on land - 'a', 'b', 'c' or 'd'? 
      · a - Foot
      · b - Skateboard
      · c - Bicycle
      · d - Motor`);
  if (question5 === 'a') {
    totalPoints += 5;
  } else if (question5 === 'b') {
    totalPoints += 3;
  } else if (question5 === 'c') {
    totalPoints += 2;
  } else if (question5 === 'd') {
    totalPoints = 0;
  }

const question6 = prompt(`Do you know how to tend to an injury - 'a', 'b', 'c' or 'd'? 
      · a - I went to medical school
      · b - I took first aid
      · c - I've watched all 400 episodes of Grey's Anatomy
      · d - Does removing a splinter count?`);
  if (question6 === 'a') {
    totalPoints += 5;
  } else if (question6 === 'b') {
    totalPoints += 3;
  } else if (question6 === 'c') {
    totalPoints += 2;
  } else if (question6 === 'd') {
    totalPoints = 0;
  }

const question7 = prompt(`Chose your weapon - 'a', 'b', 'c' or 'd'? 
      · a - Sword
      · b - Gun
      · c - Axe
      · d - Shovel`);
  if (question7 === 'a') {
    totalPoints += 5;
  } else if (question7 === 'b') {
    totalPoints += 3;
  } else if (question7 === 'c') {
    totalPoints += 2;
  } else if (question7 === 'd') {
    totalPoints = 0;
  }

// Joke question that doesn't affect score
const question8 = prompt(`Chose your weapon - 'a', 'b', or 'c'? 
      · a - Rock
      · b - Paper
      · c - Scissors`);

/*

// Calculate the score and provide a response as an if else statement
/*
if (totalPoints >= 30) {
  console.log("Congratulations! You have excellent survival skills. You survived the Apocalypse!  You fought, thought, and/or hid your way through. You've arced out.");
} else if (totalPoints >= 20 < 30) {
  console.log("You're survival skills are OK. But, you only lived for a month. Think about your tactics and try to stick with more people who fill the gaps in your skills. With some improvements, you might survive a zombie apocalypse.");
} else if (totalPoints >= 10 < 20) {
  console.log("Uh-oh! Your survival skills are not enough to survive a zombie apocalypse. You managed a day. You need to leave your old life and comforts behind, it is no longer a place for the modern human. Try to tap into the lost skills of your ancestors");
} else {
  console.log("You didn't survive, but nobody could say you didn't put up a fight. You were just too stubborn adapt. Maybe that could saved your life, maybe it wouldn't have. You'll never know.");
}
*/

// Calculate the score and provide a response as switch statement
switch (true) {
  case (totalPoints >= 30):
    alert('Congratulations! You have excellent survival skills. You survived the Apocalypse!  You fought, thought, and/or hid your way through. You\'ve arced out.');
    break;
  case (totalPoints >= 20 && totalPoints < 30):
    alert('You\'re survival skills are OK. But, you only lived for a month. Think about your tactics and try to stick with more people who fill the gaps in your skills. With some improvements, you might survive a zombie apocalypse.');
    break;
  case (totalPoints >= 10 && totalPoints < 20):
    alert('Uh-oh! Your survival skills are not enough to survive a zombie apocalypse. You managed a day. You need to leave your old life and comforts behind, it is no longer a place for the modern human. Try to tap into the lost skills of your ancestors');
    break;
  case (totalPoints <= 10):
    alert('You didn\'t survive, but nobody could say you didn\'t put up a fight. You were just too stubborn to adapt. Maybe that could have saved your life, maybe it wouldn\'t have. You\'ll never know.');
    break;
  default:
    console.log('Error.');
}



  

