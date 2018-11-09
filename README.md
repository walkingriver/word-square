# Word Square
A NodeJS-based solution to solving Word Squares from a list of n-letter words

## Prerequisites
 - Node 8+ (project uses Node 10 -- see .nvmrc file)
 
## Quick Start
1. Clone [this repo].
1. Execute the following commands:
    ```shell
    npm install
    npm run build
    npm start
    ```

## More Info
There are two files of 4-letter words. 

The smaller file contains 8 words that will definitely
resolve to a successful puzzle. I'm using this one to test
the algorithm.

The longer one contains 
500 common 4-letter English words. I hope eventually to use 
this one or a larger one to generate real puzzles, and then
expand to 5-letter puzzles.

Before that happens, I need an efficient algorithm. The
algorithm I'm trying to implement is described in this 
[Google doc], which is open to public comment.

[this repo]: https://github.com/walkingriver/word-square
[Google doc]: https://docs.google.com/document/d/1GD0Sf47x8j7EW740haYddM8l80y4Zvk7B0ruH9xXWzw/edit?usp=sharing
