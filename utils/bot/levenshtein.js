const levenshtein = require('fast-levenshtein');

function levenshteinClosest(words, topics) {
    let levensteinAnalysis = words.map(word => {
        let similarityArray = []; 
        topics.forEach(topic => {
            similarityArray.push([levenshtein.get(word,topic), topic]);
        });
        similarityArray.sort((a,b) => a[0]-b[0]);
        return similarityArray[0];
    })

    levensteinAnalysis.sort((a,b) => a[0]-b[0]);

    return levensteinAnalysis[0][1];
}

module.exports = levenshteinClosest