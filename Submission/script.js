/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */
let userName;

let level = 0;
let path = 0;

const yesReplys = ["yes", "y", "yah", "yeah"];
const noReplys = ["no", "n", "nah"];





const getBotReply = (msg) => {
  const userInput = msg.toLowerCase();
  if (userInput === "reset") {
    level = 1 
    return`Hi there ${userName}, so you need help deciding what anime to watch. Lucky for you that's my speciality! Now have you watched any anime before?`;
}

  if (level === 0){
    if (userName === undefined)
    userName = userInput
    level = 1
    path = 0
    return`Hi there ${userName}, so you need help deciding what anime to watch. Lucky for you that's my speciality! Now have you watched any anime before?`;
  }  
  if(level === 1){
  if (yesReplys.includes(userInput)){
    level = 2
    path = 1
    return `Mmm yes, clearly you are very cultured ${userName}. Have you seen Death note?`;
  } if(noReplys.includes(userInput)){
    level = 2
    path = 2
    return 'How Exciting! You are at the beginning of your journey and there are so many options! Does an R16 rating concern you?'
  }}
  if (path === 1) {
    if (level === 2) {
      if (yesReplys.includes(userInput)) {
        level = 3 
        path = 1 
        return "Fantastic, I enjoyed Death note, did you enjoy death-note as well?";
      }
      if (noReplys.includes(userInput)) {
        return "I would highly recommend Death note. An extremely worth while watch, the protagonist light yagami finds a mysterious note pad called the Death note while at school one day.";
      }
    }
  }
    if(path=== 2) {
      if (level === 2){
        if(yesReplys.includes(userInput)) {
          return "That's just fine, there are plenty of quality shows without a mature rating. Would you still watch a show if it was 1000 plus episodes?"
        }
        if(noReplys.includes(userInput)){
          return "No? fantastic! I recommend the masterpiece Attack on Titan, main character Eren Yeager has lived inside the walls his entire life, one fateful day everything changed."
        }
      }
    }
}
  export { getBotReply };
 
 

