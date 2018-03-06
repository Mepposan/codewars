function validParentheses(parens) {
  parens.split("")
  console.log(parens)
  for (i = 0; i < parens.length; i++) {
    if (parens[i] == "(") parens[i] = 1;
    if (parens[i] == ")") parens [i] = -1;
    if (parens[0] == -1 || parens[parens.length -1] = 1) return false;
  }
  return parens.reduce(getSum) == 0;
}
    
console.log("()".split(""))

console.log(validParentheses( "()" ))
//true
console.log(validParentheses( "())" ))
//false);

/*
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/