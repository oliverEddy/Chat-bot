/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */
let userName;

let level = 1;
let path = 0;

const yesReplys = ["yes", "y", "yah", "yeah"];
const noReplys = ["no", "n", "nah"];





const getBotReply = (msg) => {
  const userInput = msg.toLowerCase();
  if (userInput === "reset") {
    level = 1 
    return`Hi there ${userName}, so you need help deciding what anime to watch. Lucky for you that's my speciality! Now have you watched any anime before?`;
}

  if (level === 1){
    if (userName === undefined)
    userName = userInput
    level = 2
    return`Hi there ${userName}, so you need help deciding what anime to watch. Lucky for you that's my speciality! Now have you watched any anime before?`;
  }  
  if (yesReplys.includes(userInput)){
    level = 2
    path = 1;
    return `Mmm yes, clearly you are very cultured ${userName}. Have you seen Death note?`;
  } if(noReplys.includes(userInput)){
    level = 2
    path = 2
    return 'How Exciting! You are at the beginning of your journey and there are so many options! Does an R16 rating concern you?'
  }
  };
 
  

  export { getBotReply };
 


