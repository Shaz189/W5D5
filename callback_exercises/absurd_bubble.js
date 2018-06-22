
const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}? `,function(answer) {
    if (answer === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

// function cb () {
//   console.log('in outer bubble sort');
// }

// askIfGreaterThan(1,2,cb);

// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//   if (i < arr.length - 1) {
//     askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
//       if (isGreaterThan === true){
//         const firstNum = arr[i];
//         const secondNum = arr[i + 1];
//         arr[i] = secondNum;
//         arr[i + 1] = firstNum;
//         madeAnySwaps = true;
//         innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
//       } 
//       innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
// 
//     });
//   } else if (i === (arr.length-1)) {
//     outerBubbleSortLoop(madeAnySwaps);
//   } 
// }
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan === true) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
        console.log(arr);
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      } else {
        console.log(arr);
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  }
}

// innerBubbleSortLoop([1,9,4,5], 0, false, cb);

function absurdBubbleSort(arr, sortCompletionCallback) {
  // console.log("hit");
  
  
  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps == true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop); 
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
} 

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});