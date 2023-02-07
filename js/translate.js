export function translate (expression) {
    const trig = {
      'cos': 'Math.cos',
      'sin': 'Math.sin',
      'tan': 'Math.tan'
    }
  
    for (const [key, value] of Object.entries(trig)) {
      expression = expression.replace(key, value)
    }
  
    // For now, we only have 2 inputs for any function.
    // This way of evaluating was done to increase performance.
    const outputFunction = eval('(x, t) => {return ' + expression + '}')
    return outputFunction
  }