/**
 * Take string of code and break it down into array of token
 * @param {string} input string of code
 */
export function tokenizer(input) {
  let cursor = 0

  let tokens = []

  while (cursor < input.length) {
    let char = input[cursor]

    if (char === '(') {
      tokens.push({ type: 'paren', value: '(' })
      cursor++
      continue
    }

    if (char === ')') {
      tokens.push({ type: 'paren', value: ')' })
      cursor++
      continue
    }

    // Check for whitespace, we want a character but not as a token,
    // Hence simply move on to next character
    if (/\s/.test(char)) {
      cursor++
      continue
    }

    // Number could be of any number of characters, (add 345 85)
    if (/[0-9]/.test(char)) {
      let value = ''

      // if we find a number, run a loop till number exists
      while (/[0-9]/.test(char)) {
        value += char
        char = input[++cursor]
      }

      tokens.push({ type: 'number', value: value })
      continue
    }

    // Strings, check for opening quote and closing quote
    if (char === '"') {
      let value = ''

      // skip opening quote
      char = input[++cursor]
      // until closing quote is not found
      while (char !== '"') {
        value += char
        char = input[++cursor]
      }

      tokens.push({ type: 'string', value: value })
      continue
    }

    // For name, (add 2 4) - add is a name token
    if (/[a-z]/i.test(char)) {
      let value = ''

      while (/[a-z]/i.test(char)) {
        value += char
        char = input[++cursor]
      }

      tokens.push({ type: 'name', value: value })
      continue
    }

    throw new Error('Unsupported character: ', +char)
  }

  return tokens
}
