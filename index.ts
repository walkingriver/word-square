
import { words } from './test-words';

console.log('Loaded words list: ', words.length);

findWords(0, [
  ['W', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', '']
]);

function findWords(depth: number, words: string[][]): boolean {
  // If we reach the point where our search depth is our array size, we're done!
  if (depth == words.length) { return true; }

  // I need to make a copy of input, so I dont corrupt the one
  // being passed in.
  let input = JSON.parse(JSON.stringify(words));
  console.log(input);

  let constraintX = input[depth].join('');
  let constraintY = '';

  const rowWords = getWords(constraintX);

  // Try each word... 
  for (let j = 0; j < rowWords.length; j++) {
    const r = rowWords[j];

    // ...on the "depth" row
    input[depth] = r.split('');

    // The next search pattern is the list of letters in the "depth" column
    constraintY = '';
    for (let i = 0; i < r.length; i++) { constraintY += input[i][depth] };

    // Get all potential words for this column
    const colWords = getWords(constraintY);

    // Try each word as "depth" column
    for (let k = 0; k < colWords.length; k++) {
      let c = colWords[k];
      // Set the input's "depth" column to the word          
      for (let l = 0; l < c.length; l++) { input[l][depth] = c[l]; }

      // We recurse a little deeper.
      if (findWords(depth + 1, input)) {
        console.log('SUCCESS!', input);
      }
    }
  }

  return false;
}

function getWords(start: string): string[] {
  console.log('Looking for words starting with ', start)
  const pattern = '^' + start;
  return words.filter((v) => {
    return v.match(pattern);
  });
}

