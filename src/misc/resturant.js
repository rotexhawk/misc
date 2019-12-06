function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

  let compOrders = [...takeOutOrders, ...dineInOrders].sort((left, right) => left - right); 
  
  console.log(compOrders, servedOrders)
  if (compOrders.length !== servedOrders.length) return false; 

  for (let i = 0; i < compOrders.length; i++){
      if (compOrders[i] !== servedOrders[i]){
        console.log('issue here')
        return false; 
      }
  }

  return true;
}


function curryPrint(str){
  let acc = str; 
  return function(str){
    if (!str){
      return acc; 
    }
else {
  return curryPrint(acc + " " + str);
}
  }
}



let str = curryPrint("asdf")("wtf")("hello")(); 
console.log(str); 

console.log(isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]));
