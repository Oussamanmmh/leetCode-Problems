/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const vowels = ['a','e','i','o','u']
    return sentence.split(" ").map((word,index)=>{
       if(vowels.includes(word[0].toLowerCase())){
           return word + "ma" + 'a'.repeat(index + 1);
       }
       else {
            return word.slice(1) + word[0] + "ma" + 'a'.repeat(index + 1);
       }
    }).join(" ")
};