// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?


function sumofpairs(arr, sum, n) {
    var count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === sum) {
                count++;
            }
        }
    }
    return count;
}

let arr = [1, 1, 1, 1];
let sum = 2;
let n = arr.length;
document.write("Q1. Count of Pairs is:  " + sumofpairs(arr, sum, n));


// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

let numbers_array = [1, 2, 3, 4, 5];


numbers_array.reverse();

document.write("Q2. Reverse an array in place is:  " + numbers_array);




//  Q3. Write a program to check if two strings are a rotation of each other?


function equalRotationString (str1, str2) {
    for(let i=0; i<str1.length; ++i) {
        str1 = str1[str1.length-1] + str1.substring(0, str1.length-1);
        if(str1 === str2) {
            return true;
        }
    }
    return false;
}


console.log(
    equalRotationString('abcd', 'bcdk'),    // false
    equalRotationString('pavan', 'avanp'),  // true
    equalRotationString('rathan', 'thanra') // true
);

document.write(
    equalRotationString('abcd', 'bcad'),    // false
    equalRotationString('1254', '5412'),  // true
    equalRotationString('rathan', 'thanra') // true
);

// Q4 Write a program to print the first non-repeated character from a string?


const string = "algorithm";
let index = -1;
let fnc = ' ';
for (let i of string) {
    if (string.split(i).length - 1 === 1) {
        fnc = i;
        break;
    } else {
        index += 1;
    }
}
if (index === 1) {
    console.log("Either all characters are repeating or string is empty");
} else {
    console.log(`First non-repeating character is ${fnc}`);
}



// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.


function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
{
        if (n == 0)
        {
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
        document.write("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod+"<br/>");
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
    }
  
   
    var N = 3;
      
    
    towerOfHanoi(N, 'A', 'C', 'B');



    function isOperator(x)
    {
  
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
  
    //Q6.  Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
    function postToPre(post_exp)
    {
        let s = [];
  
        
        let length = post_exp.length;
  
        
        for (let i = 0; i < length; i++) {
  
            
            if (isOperator(post_exp[i])) {
  
               
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
  
             
                let temp = post_exp[i] + op2 + op1;
  
                
                s.push(temp);
            }
  
            
            else {
  
                
                s.push(post_exp[i] + "");
            }
        }
  
        let ans = "";
        while (s.length > 0)
            ans += s.pop();
        return ans;
    }
     
    let post_exp = "ABC/-AK/L-*";
        
   
    document.write("Prefix : " + postToPre(post_exp));


    // Q7. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

    function isOperator(x)
    {
        switch(x)
        {
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
            case '%':
                return true;
        }
        return false;
    }
 
   
    function convert(str)
    {
        let stack = [];
 
        
        let l = str.length;
 
        
        for(let i = l - 1; i >= 0; i--)
        {
            let c = str[i];
 
            if (isOperator(c))
            {
                let op1 = stack[stack.length - 1];
                stack.pop()
                let op2 = stack[stack.length - 1];
                stack.pop()
 
                
                let temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            }
            else
            {
 
                
                stack.push(c + "");
            }
        }
        return stack[stack.length - 1];
    }
     
    let exp = "*-A/BC-/AKL";
      
    document.write("Infix : " + convert(exp));

    // Q8.Write a program to check if all the brackets are closed in a given code snippet.

    function areBracketsBalanced(expr)
{
     
    
    let stack = [];
 
   
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
             
            
            stack.push(x);
            continue;
        }
 
        
        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
 

    return (stack.length == 0);
}
 

let expr = "([{}])";
 

if (areBracketsBalanced(expr))
    document.write("Balanced ");
else
    document.write("Not Balanced ");

    // Q9. Write a program to reverse a stack.
    
let st = [];
 

function insert_at_bottom(x)
{
    if(st.length==0)
        st.push(x);
    else
    {
        
            let a = st.pop();
            insert_at_bottom(x);
  
            
            st.push(a);
    }
     
     
}
 

function reverse()
{
    if(st.length > 0)
        {
              
           
            let x = st.pop();
            reverse();
              
            
            insert_at_bottom(x);
        }
}
 

st.push('1');
st.push('2');
st.push('3');
st.push('4');
 
document.write("Original Stack<br>");
 
document.write(st.join(" ")+"<br>");
 

reverse();
 
document.write("Reversed Stack<br>");
 
document.write(st.join(" "));
 

// Q10. Write a program to find the smallest number using a stack.

class Stack {
    constructor() {
      this.items = [];
      this.minStack = [];
    }
  
    push(element) {
      if (this.minStack.length === 0 || element <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(element);
      }
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        return "Underflow";
      }
      const poppedElement = this.items.pop();
      if (poppedElement === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
      return poppedElement;
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return "Stack is empty";
      }
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(5);
  stack.push(15);
  
  console.log(stack.getMin());