/**
 *  *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * 1. Parsing
 * 2. Transformation
 * 3. Code Generation
 */

import { codeGenerator } from './code-generating/codeGenerator'
import { parser } from './parsing/parser'
import { tokenizer } from './parsing/tokenizer'
import { transformer } from './transforming/transformer'

/**
 * PARSING
 *
 * 1. Lexical Analysis
 *
 * For (add 2 2), tokens might look like
 *
 * [
 *  { type: 'paren',  value: '('   },
 *  { type: 'name',   value: 'add' },
 *  { type: 'number', value: '2'   },
 *  { type: 'number', value: '2'   },
 *  { type: 'paren',  value: ')'   },
 * ]
 *
 * 2. Syntactic Analysis
 *
 * And Abstract Syntax Tree(AST) might look lik
 *
 * {
 *  type: 'Porgram',
 *  body: [{
 *    type: 'CallExpression',
 *    name: 'add',
 *    params: [{
 *      type: 'NumberLiteral',
 *      value: '2',
 *    }, {
 *      type: 'NumberLiteral',
 *      value: '2'
 *    }]
 *  }]
 * }
 */

/**
 * TRANSFORMATION
 *
 * Traverser:
 *
 * A traverser is a utility that helps you navigate through
 * the nodes of an AST. It provides a systematic way to
 * visit each node in the tree, usually in a depth-first
 * or breadth-first fashion. The goal is to iterate over
 * the nodes of the AST, allowing you to perform actions
 * or transformations at each node.
 *
 * Visitor:
 *
 * A visitor is an object or set of functions that define
 * actions to be taken when traversing specific node types
 * in the AST. Each type of node in the AST corresponds to a
 * method or function in the visitor. When the traverser
 * encounters a node during the traversal, it invokes the
 * corresponding method on the visitor.
 *
 * Why Transform the AST?
 *
 * Transforming the AST is a common step in the compilation process.
 * It allows you to modify the structure of the AST to perform optimizations,
 * code generation, or other transformations. For example,
 * you might want to convert higher-level language constructs
 * into lower-level representations that are easier to process or execute.
 *
 * We're going to create new AST for target language
 *
 * Traversal
 *
 * For AST above, we will traverse in depth-first:
 *
 *   1. Program - Start
 *   2. CallExpression(add) - Move to 1'st element of Program's body
 *   3. NumberLiteral (4) - Moving to the first element of CallExpression's params
 *   4. NumberLiteral (2) - Moving to the second element of CallExpression's params
 *
 * Visitors
 *
 *   -> Program (enter)
 *     -> Call Expression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * var visitors = {
 *  NumberLiteral: {
 *    enter(node, parent) {},
 *    exit(node, parent) {},
 *  },
 * };
 */

/**
 *
 * @param {string} input - code string
 */
export function compiler(input) {
  let tokens = tokenizer(input)
  let ast = parser(tokens)
  let newAst = transformer(ast)
  let output = codeGenerator(newAst)

  return output
}
