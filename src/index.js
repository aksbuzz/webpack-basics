import code from '@/assets/images/code.png'
import banana from '@/assets/images/Bananas.svg'

import '@/styles/index.scss'
// import { compiler } from './compiler/compiler'

class Game {
  constructor(name = 'Violin Charades') {
    this.name = name
  }
}
const myGame = new Game()
// Create paragraph node
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

const img = document.createElement('img')
img.src = banana
img.alt = 'Banana'

const img2 = document.createElement('img')
img2.src = code
img2.alt = 'Code'

// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading, p, img, img2)

