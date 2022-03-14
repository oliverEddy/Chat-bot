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

    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    
    const botReply2 = getBotReply("yes");
    const expectedReply2 = 
    "Mmm yes, clearly you are very cultured quin. Have you seen Death note?"

    // Uncomment the following line and update your expectation
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 = 
    "I would highly recommend Death note. An extremely worth while watch, the protagonist light yagami finds a mysterious note pad called the Death note while at school one day."
    

    // Uncomment the following line and update your expectation
    expect(botReply3).toEqual(expectedReply3);
  });
  it("should reply correctly when follwing path to code geass", () => {
    const botReply1 = getBotReply("quin");
    const expectedReply1 = 
    "Hi there quin, so you need help deciding what anime to watch. Lucky for you that's my speciality! Now have you watched any anime before?";

    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    const expectedReply2 = 
    "Mmm yes, clearly you are very cultured quin. Have you seen Death note?"


    // Uncomment the following line and update your expectation
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("yes");
    const expectedReply3 = 
    "Fantastic, I enjoyed Death note, did you enjoy death-note as well?"
    
    // Uncomment the following line and update your expectation
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("yes");
    const expectedReply4 = 
    "Excellent, I suggest you watch Code Geass. The main character Lelouch vi Britannia battles against the odds as he fights to regain connote of his home country."
    
    // Uncomment the following line and update your expectation
    expect(botReply4).toEqual(expectedReply4);
    
  });
  
});

