'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    let lastIndex = str.lastIndexOf(" ");
   let result= str.slice(lastIndex + 1, str.length);
   return result ;
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    let lastt = str.split(' ');
    return lastt[lastt.length - 1];
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    let repArray = [];
    repArray = str.split(" ");
        if (repArray[0] == "I") {
            repArray.splice(0, 1,"We");
        }  if (repArray[1] == "am") {
            repArray.splice(1, 1,"are");
        }  if (repArray[1] == "was") {
            repArray.splice(1, 1,"were");
        }
     return repArray.join(" ");
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    let stringSlice=[];
    let count=0;
     while(arr.length>=5){
          stringSlice[count]=(arr.slice(0,5).join(" "));
          arr.splice(0,5);
          count++;
          }
          if(arr.length>0){
          stringSlice[count]=" "+(arr.slice(0,arr.length).join("  "));
          }else{
              stringSlice[count]="";
          }
  
          return  stringSlice.join();
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    let words = str.split(' ');
    let result = "";

    for (let i = 0; i < words.length; i++) {
        const element = words[i];

        let arr = element.split('');
        let currentLetter = arr[0];
        let counting = 1;

        for (let j = 1; j < arr.length; j++) {
            const nextLetter = arr[j];
            if (nextLetter === currentLetter) {
                counting++;
            }
            else {
                result += currentLetter + counting;
                counting = 1;
            }

            currentLetter = nextLetter;
        }
        
        result += currentLetter + counting;

        if (i !== words.length - 1)
            result += ' ';
    }

    return result;
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };