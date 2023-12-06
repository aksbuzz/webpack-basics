/**
 * Take our array of tokens and turn it into an AST.
 *
 * @param {Object[]} tokens - Array of tokens
 * @param {'paren' | 'number' | 'string' | 'name' } tokens[].type - Type of token
 * @param {string} tokens[].value - Value of the token
 */
export function parser(tokens) {
  let cursor = 0

  function walk() {
    let token = tokens[cursor]

    // Create a separate AST node for number, string
    if (token.type === 'number' || token.type === 'string') {
      cursor++
      return {
        type: token.type === 'number' ? 'NumberLiteral' : 'StringLiteral',
        value: token.value,
      }
    }

    // CallExpressions. Look for open paranthesis
    if (token.type === 'paren' && token.value === '(') {
      // skip '(' token, as not needed in AST
      token = tokens[++cursor]

      let node = {
        type: 'CallExpression',
        // (add 2 3), here name = add
        name: token.value,
        params: [],
      }

      // go to next token after name
      token = tokens[++cursor]

      // Continue until we find a closing paranthesis
      while (token.type !== 'paren' || (token.type === 'paren' && token.value !== ')')) {
        node.params.push(walk())
        // we're incrementing cursor at (line 16 and line 46), but we're assigning
        // it here
        token = tokens[cursor]
      }

      // skip closing paraenthesis
      cursor++

      return node
    }
    throw new TypeError(token.type)
  }

  // root node
  let ast = {
    type: 'Program',
    body: [],
  }

  while (cursor < tokens.length) {
    ast.body.push(walk())
  }

  return ast
}
