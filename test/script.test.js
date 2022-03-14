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

  it("should reply correctly when supplised YES answer to, Have you watched anime before", () => {
    const botReply1 = getBotReply("Quin");
    const expectedReply1 = 
    "Hi there quin, so you need help deciding what anime to watch. Lucky for you that's my speciality! Now have you watched any anime before?";

    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("yes");
    const expectedReply2 = 
    "Mmm yes, clearly you are very cultured quin. Have you seen Death note?"

    // Uncomment the following line and update your expectation
    expect(botReply2).toEqual(expectedReply2);
  });
  it("should reply correctly when supplised NO answer to, Have you watched anime before", () => {
    const botReply1 = getBotReply("Quin");
    const expectedReply1 = 
    "Hi there quin, so you need help deciding what anime to watch. Lucky for you that's my speciality! Now have you watched any anime before?";

    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("no");
    const expectedReply2 = 
    "How Exciting! You are at the beginning of your journey and there are so many options! Does an R16 rating concern you?"

    // Uncomment the following line and update your expectation
    expect(botReply2).toEqual(expectedReply2);
  });
  it("should reply correctly when supplised YES answer to, Mmm yes, cleary you are very cultured", () => {
    const botReply1 = getBotReply("Quin");
    const expectedReply1 = 
    "Hi there quin, so you need help deciding what anime to watch. Lucky for you that's my speciality! Now have you watched any anime before?";

    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("yes");
    const expectedReply2 = 
    "Mmm yes, clearly you are very cultured quin. Have you seen Death note?"

    // Uncomment the following line and update your expectation
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("YES");
    const expectedReply3 = 
    "Fantastic, I enjoyed Death note, did you enjoy death-note as well?"

    // Uncomment the following line and update your expectation
    expect(botReply3).toEqual(expectedReply3);
  });
  
});

