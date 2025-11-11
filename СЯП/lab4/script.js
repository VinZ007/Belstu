'use strict'

console.log("Task1");
console.log(Array.from('Sonic'));
console.log(Array.of(7));

console.log("Task2");
let obj = new String("Bonomo Sophie");
console.log(obj.length);
let obj_up = obj.toUpperCase();
let obj_d = obj.toLowerCase();

console.log(obj_up.concat(obj_d));

function mass(...numbers){
  let count = 0;
  for(let i = 0; i < numbers.length; i++){
    count+=numbers[i];
  }
  return count;
}

console.log(mass(1, 2, 3, 4 ,5));
let results = [2, 4, 5, 67, 28239, 191999999];
const maxValue = Math.max(...results);
const minValue = Math.min(...results);
console.log(maxValue);
console.log(minValue);

function ask(){
    let answer = prompt("Введите значения через пробел");
    
    if(answer === null){
        alert("Введите корректные значения");
        return 0;
    }
    let numb = answer.split(" ");
    console.log(numb);
    let count = 0;
    for(let i=0; i< numb.length; i++){
        
        if(isNaN(Number(numb[i]))){
            alert("Введите корректные значения");
            break;
        }
        
        count+=Number(numb[i]);
        
        

    }
    console.log(count);
    
}

function task5(){
  let prom = prompt("Введите значение");
  if(prom === null)  return null;
  let number_answ = +prom;
  if(number_answ == 0) return 0;

  if(typeof number_answ === "number" && !Number.isNaN(number_answ))
  {
    if(number_answ % 2 == 0){
      console.log("четное");
      alert("четное");
    }
    if(number_answ %2 == 1){
      console.log("нечетное"); 
      alert("нечетное");
    }
  }
  else{
    alert("Передано не число.Введите значение, пожалуйста");
  }
}