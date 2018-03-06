function persistence(num) {
    let numb = 1;
    for (count = 0; num.toString().length > 1; count++) {
        for (i = 0; i < num.toString().length; i++) {
            numb *= num.toString()[i];
        }
      num = numb;
      numb = 1;
    }
  return count;
}

console.log(persistence(999))