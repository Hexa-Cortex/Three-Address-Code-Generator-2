document.getElementById("generateBtn").addEventListener("click", generateTAC);

function generateTAC() {
  const expr = document.getElementById("expr").value.replace(/\s+/g, "");
  const output = document.getElementById("output");

  if (!expr) {
    output.textContent = "Please enter an expression.";
    return;
  }

  try {
    const result = toThreeAddressCode(expr);
    output.textContent = result.join("\n");
  } catch (e) {
    output.textContent = "Error parsing expression.";
  }
}

function precedence(op) {
  if (op === '+' || op === '-') return 1;
  if (op === '*' || op === '/') return 2;
  return 0;
}

function infixToPostfix(expr) {
  let stack = [];
  let output = [];
  for (let ch of expr) {
    if (/[a-zA-Z0-9]/.test(ch)) {
      output.push(ch);
    } else if (ch === '(') {
      stack.push(ch);
    } else if (ch === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        output.push(stack.pop());
      }
      stack.pop();
    } else {
      while (stack.length && precedence(stack[stack.length - 1]) >= precedence(ch)) {
        output.push(stack.pop());
      }
      stack.push(ch);
    }
  }
  while (stack.length) output.push(stack.pop());
  return output;
}

function toThreeAddressCode(expr) {
  const postfix = infixToPostfix(expr);
  let stack = [];
  let code = [];
  let tempCount = 1;

  for (let token of postfix) {
    if (/[a-zA-Z0-9]/.test(token)) {
      stack.push(token);
    } else {
      const op2 = stack.pop();
      const op1 = stack.pop();
      const temp = "t" + tempCount++;
      code.push(`${temp} = ${op1} ${token} ${op2}`);
      stack.push(temp);
    }
  }
  return code;
}
