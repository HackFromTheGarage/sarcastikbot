const json = require("../../data/topics.json");
const levenshteinClosest = require("./levenshtein");
var Filter = require('bad-words'),
    filter = new Filter();
    

function generateAnswer(message) { //this function fetch the JSON to find the more similar subreddit and send sarcastic quotes
  const words = message.split(" ").filter((word) => word.length>2); //delete short words because it doesn't mean anything

  const insult = formattedAnswer(message) //detect if there is an insult
  if (insult) {
    return insult;
  }

  const comments = json[levenshteinClosest(words, Object.keys(json))]

  const rand = parseInt(Math.random()*(comments.length - 1));

  return comments[rand];
}

function formattedAnswer(text) { // detect the insults

    if (filter.isProfane(text)) {
      return "Wow so classy ... Your mom didn't tell you to be more polite ?";
    }

}

module.exports = generateAnswer;