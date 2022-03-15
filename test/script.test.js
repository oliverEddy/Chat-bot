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
      "Hi there quin, so you need help deciding what anime you should watch. Lucky for you that's my speciality! Have you watched any anime before?";

    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
  });

  it("should reply correctly when following path to deathnote", () => {
    const botReply1 = getBotReply("quin");
    const expectedReply1 =
      "Hi there quin, so you need help deciding what anime you should watch. Lucky for you that's my speciality! Have you watched any anime before?";

    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Mmm yes, clearly you are very cultured quin Have you seen Death Note?";

    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "I would highly recommend Death Note. An extremely worthwhile watch, the protagonist Light Yagami finds an ominous notepad at school one day and discovers his new purpose.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
  });
  it("should reply correctly when follwing path to code geass", () => {
    const botReply1 = getBotReply("quin");
    const expectedReply1 =
      "Hi there quin, so you need help deciding what anime you should watch. Lucky for you that's my speciality! Have you watched any anime before?";

    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Mmm yes, clearly you are very cultured quin Have you seen Death Note?";

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "Fantastic, I enjoyed Death Note! Did you enjoy Death Note as well?";

    const botReply4 = getBotReply("yes");
    const expectedReply4 =
      "Excellent, I suggest you watch Code Geass. The main character Lelouch vi Britannia battles against the odds as he fights to regain control of his home country.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });
  it("should reply correctly when follwing path to Attack on Titan", () => {
    const botReply1 = getBotReply("quin");
    const expectedReply1 =
      "Hi there quin, so you need help deciding what anime you should watch. Lucky for you that's my speciality! Have you watched any anime before?";

    const botReply2 = getBotReply("no");
    const expectedReply2 =
      "How Exciting! You are at the beginning of your journey and there are so many options! Does an R16 rating concern you?";

    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "Fantastic! I recommend Attack on Titan, main character Eren Yeager has lived inside the walls his entire life, one fateful day everything changed.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
  });
  it("should reply correctly when follwing path to slime", () => {
    const botReply1 = getBotReply("quin");
    const expectedReply1 =
      "Hi there quin, so you need help deciding what anime you should watch. Lucky for you that's my speciality! Have you watched any anime before?";

    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Mmm yes, clearly you are very cultured quin Have you seen Death Note?";

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "Fantastic, I enjoyed Death Note! Did you enjoy Death Note as well?";

    const botReply4 = getBotReply("no");
    const expectedReply4 =
      "Seeing as you didn't enjoy Death Note so much, I'm going to suggest something that sets a completely different pace. That time I was reincarnated as a slime.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });
  it("should reply correctly when follwing path to One Piece", () => {
    const botReply1 = getBotReply("quin");
    const expectedReply1 =
      "Hi there quin, so you need help deciding what anime you should watch. Lucky for you that's my speciality! Have you watched any anime before?";


    const botReply2 = getBotReply("no");
    const expectedReply2 =
      "How Exciting! You are at the beginning of your journey and there are so many options! Does an R16 rating concern you?";

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "That's just fine, there are plenty of quality shows without a mature rating. Would you still watch a show if it was 1000 plus episodes?";

    const botReply4 = getBotReply("yes");
    const expectedReply4 =
      "quin you are extremely brave, one-piece stands as the longest anime at 1012 episodes and shockingly it's still realising every Sunday, it shouldn't take you long to catch up.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });
  it("should reply correctly when follwing path to Jobless Reincarnation", () => {
    const botReply1 = getBotReply("quin");
    const expectedReply1 =
      "Hi there quin, so you need help deciding what anime you should watch. Lucky for you that's my speciality! Have you watched any anime before?";

    const botReply2 = getBotReply("no");
    const expectedReply2 =
      "How Exciting! You are at the beginning of your journey and there are so many options! Does an R16 rating concern you?";

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "That's just fine, there are plenty of quality shows without a mature rating. Would you still watch a show if it was 1000 plus episodes?";

    const botReply4 = getBotReply("no");
    const expectedReply4 =
      "Okay, a shorter anime it is, despite only being 22 episodes Jobless reincarnation is one of my all-time favourites and an absolute gem.";

    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });
  it("should reply Help options", () => {
    const botReply1 = getBotReply("help");
    const expectedReply1 = `Help options: <br> Type 'reset' to restart the conversation.<br> Type 'favs' and Luffy will tell you his top 3 animes!`;

    expect(botReply1).toEqual(expectedReply1);
  });
  it("should reply with Luffys top 3 animes", () => {
    const botReply1 = getBotReply("favs");
    const expectedReply1 = `So, you want to know my favourite animes huh? I suppose I could tell you.<br> In Number 1, the show I star in! One piece, <br> In Number 2, the gruesome Attack on Titan, <br> And in Number 3! the peaceful Jobless Reincarnation`;

    expect(botReply1).toEqual(expectedReply1);
  });
});
