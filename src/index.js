import example from './assets/images/example.png'
import banana from './assets/images/Bananas.svg'

import './index.scss';
import { compiler } from './compiler/compiler';

class Game {
  name = 'Violin Charades';
}
const myGame = new Game();
// Create paragraph node
const p = document.createElement('p');
p.textContent = `I like ${myGame.name}.`;

const img = document.createElement('img');
img.src = banana
img.alt = "Banana"

// Create heading node
const heading = document.createElement('h1');
heading.textContent = 'Interesting!';

// Append heading node to the DOM
const app = document.querySelector('#root');
app.append(heading, p, img);

const codeStr = '(add 2 (subtract 4 2))'
console.log(compiler(codeStr))