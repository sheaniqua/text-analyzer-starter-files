// your code here!
function analyzeString(str) {
  var arrOfWords = str.split(" ")
  var wordLengths = []
  var arrUniqWords = []
  for(var i = 0; i < arrOfWords.length; i++) {
    wordLengths.push(arrOfWords[i].length)
    if(arrUniqWords.indexOf(arrOfWords[i]) === -1) {
      arrUniqWords.push(arrOfWords[i])
    }
  }
  var objData = {
    totalWords: wordLengths.length,
    uniqueWords: arrUniqWords.length,
    averageWordLength: wordLengths.reduce(function(a,b) {
      return (a + b);
    })/wordLengths.length
  }
  return objData
}

function handleAnalyzeSubmit() {
  $('button').click(function(event) {
    $('dl').removeClass('hidden');
    // console.log('hi how are you')
    event.preventDefault()
    var textArea = $('textarea').val();
    
    var myNewObj = analyzeString(textArea)

    $('.js-word-count').text(myNewObj.totalWords);
    $('.js-unique-count').text(myNewObj.uniqueWords);
    $('.js-average-length').text(myNewObj.averageWordLength.toFixed(2));
  })
}




$(function() {
  handleAnalyzeSubmit();
});