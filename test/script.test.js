// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  it("should reply with Name and first question", () => {
    const botReply1 = getBotReply("Quin");
    const expectedReply1 = 
    "Hi there quin, so you need help deciding what anime to watch. Lucky for you that's my speciality! Now have you watched any anime before?";

    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
  });

  it("should reply correctly when following path to deathnote", () => {
    const botReply1 = getBotReply("quin");
    const expectedReply1 = 
    "Hi there quin, so you need help deciding what anime to watch. Lucky for you that's my speciality! Now have you watched any anime before?";

    const botReply2 = getBotReply("yes");
    const expectedReply2 = 
    "Mmm yes, clearly you are very cultured quin. Have you seen Death note?"

    const botReply3 = getBotReply("no");
    const expectedReply3 = 
    "I would highly recommend Death note. An extremely worth while watch, the protagonist light yagami finds a mysterious note pad called the Death note while at school one day."
    
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
  });
  it("should reply correctly when follwing path to code geass", () => {
    const botReply1 = getBotReply("quin");
    const expectedReply1 = 
    "Hi there quin, so you need help deciding what anime to watch. Lucky for you that's my speciality! Now have you watched any anime before?";

    const botReply2 = getBotReply("yes");
    const expectedReply2 = 
    "Mmm yes, clearly you are very cultured quin. Have you seen Death note?"

    const botReply3 = getBotReply("yes");
    const expectedReply3 = 
    "Fantastic, I enjoyed Death note, did you enjoy death-note as well?"
    
    const botReply4 = getBotReply("yes");
    const expectedReply4 = 
    "Excellent, I suggest you watch Code Geass. The main character Lelouch vi Britannia battles against the odds as he fights to regain connote of his home country."
    
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    
  });
  it("should reply correctly when follwing path to Attack on Titan", () => {
    const botReply1 = getBotReply("quin");
    const expectedReply1 = 
    "Hi there quin, so you need help deciding what anime to watch. Lucky for you that's my speciality! Now have you watched any anime before?";

    const botReply2 = getBotReply("no");
    const expectedReply2 = 
    "How Exciting! You are at the beginning of your journey and there are so many options! Does an R16 rating concern you?"

    const botReply3 = getBotReply("no");
    const expectedReply3 = 
    "No? fantastic! I recommend the masterpiece Attack on Titan, main character Eren Yeager has lived inside the walls his entire life, one fateful day everything changed."
    
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    
  });
  it("should reply correctly when follwing path to slime", () => {
    const botReply1 = getBotReply("quin");
    const expectedReply1 = 
    "Hi there quin, so you need help deciding what anime to watch. Lucky for you that's my speciality! Now have you watched any anime before?";

    const botReply2 = getBotReply("yes");
    const expectedReply2 = 
    "Mmm yes, clearly you are very cultured quin. Have you seen Death note?"

    const botReply3 = getBotReply("yes");
    const expectedReply3 = 
    "Fantastic, I enjoyed Death note, did you enjoy death-note as well?"
    
    const botReply4 = getBotReply("no");
    const expectedReply4 = 
    "Poor Light Yagami, seeing as you didn't enjoy death note so much, I'm going to suggest something that sets a completely different pace, that time I was reincarnated as a slime"
    
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
});
  it("should reply correctly when follwing path to One Piece", () => {
    const botReply1 = getBotReply("quin");
    const expectedReply1 = 
    "Hi there quin, so you need help deciding what anime to watch. Lucky for you that's my speciality! Now have you watched any anime before?";

    const botReply2 = getBotReply("no");
    const expectedReply2 = 
    "How Exciting! You are at the beginning of your journey and there are so many options! Does an R16 rating concern you?"

    const botReply3 = getBotReply("yes");
    const expectedReply3 = 
    "That's just fine, there are plenty of quality shows without a mature rating. Would you still watch a show if it was 1000 plus episodes?"
    
    const botReply4 = getBotReply("yes");
    const expectedReply4 = 
    "Quin you are extremely brave, one-piece stands as the longest anime at 1012 episodes and shockingly its still realising every Sunday, it shouldn't take you long to catch up :)"
    
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    
  });
});

