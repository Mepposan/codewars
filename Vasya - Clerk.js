function tickets(peopleInLine){
let cash = [0, 0, 0]
  for (i = 0; i < peopleInLine.length; i++) {
  if (peopleInLine[i] == 25) cash[0]++
  if (peopleInLine[i] == 50) {cash[1]++; cash[0]--;}
  if (peopleInLine[i] == 100) {cash[2]++; (((cash[1]-- && cash[0]--) 
                                            && (cash[0] >= 0 && cash[1] >= 0)) 
                                           || cash[0] -3);}
  console.log(cash)
  if (cash < 0) return "NO";
  if (i == peopleInLine.length -1) return "YES";
  }
}

console.log(tickets([25, 25, 50, 50])); 
//"YES"
console.log(tickets([25, 100]));
 //"NO"