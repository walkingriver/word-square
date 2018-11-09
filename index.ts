
import { words } from './test-words';

console.log('Loaded words list: ', words.length);

const bWords = (getWords('b'));

// Grab first word
const word = bWords[0];

findWords(0, [
  ['W', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', '']
]);

function findWords(depth: number, input: string[][]): string[] {
  console.log(input);

  let constraintX = ''
  let constraintY = ''

  for (let i = 0; i< depth; i++) {constraintX += words[0][i]};
  for (let i = 0; i< depth; i++) {constraintY += words[i][0]};
  const nextRows = getWords(constraintX);
  
  if (nextRows.length) {
    nextRows.forEach((r) => {
      input[depth] = r.split('');
      const nextCols = getWords(constraintY);
      if (nextCols.length) {
        nextCols.forEach((c) => {
          // Set the input's "depth" column to the word          
          for (let i = 0; i < c.length; i++) {
            input[depth][i] = c[i];
          }

          // And pass the new square into the function with a new depth
          const potential = findWords(depth + 1, input);
          if (potential.length && potential.length === depth) {
            console.log('SUCCESS!', potential);
          }
        });
      }
    });
  }

  return [];
}

function getWords(start: string): string[] {
  const pattern = '^' + start;
  return words.filter((v) => {
    return v.match(pattern);
  });
}

