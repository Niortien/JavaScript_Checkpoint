//exercice 1

   function isSameNum(num1,num2){
    if(num1==num2){
        return console.log( true);
    }
    else{
        return console.log( false);
    }
   }
console.log(isSameNum(4, 8)); 

 
//EXERCICE 2
 function minMax(tab){
  let min = tab[0];
  let max = tab[0];
  for(let i=0; i<tab.length;i++){
      if(min>tab[i]){
          min=tab[i];
      }
      if(max<tab[i]){
          max=tab[i];
      }
     
      
  }
  return [min,max];
}
console.log(minMax([2,8,1]));

//exercice 3
 function filterArray(arr){
    let tab=[];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i]=="number") {
            tab.push(arr[i]);
            
        }
        
    }
    return tab;
 }
 console.log(filterArray([1, 2, "a", "b"]));






//EXERCICE 4
 function getAbsSum(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum=sum+ Math.abs(arr[i])
        
    }
    return sum;
 }
 console.log(getAbsSum([2, -1, 4, 8, 10]));
 

 //EXERCICE 5
 function countTrue(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==true){
            sum=sum+1;
        }
    
    }
    return sum;
	
 }
 console.log(countTrue([true, false, false, true, false]));
 

 //EXERCICE 6
 function objectToArray(object) {
    let tab=[];
    for(let i in object){
     tab.push([i,object[i]]);
    }
    return tab;
 }
 console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3
  }));
  

  

/*
function  getBudgets(arr) {
    let som=0;
	
 
  
arr.forEach(item => {
    som+=item.budget;
    
    
});
 return som;

    
}

console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]));


console.log(getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]))  ;
  */

  //EXERCICE 7
  function afterNYears(object, n) {
    
    for(let i in object){
        object[i]=object[i]+n;
        }
    
      return object;
    
  }
  console.log(afterNYears({
    "Baby" : 2,
    "Child" : 8,
    "Teenager" : 15,
    "Adult" : 25,
    "Elderly" : 71
  }, 19))

//EXERCICE 8
 function  getBudgets(arr) {
    let sum=0;
    for(let i =0;i<arr.length;i++){
      som=som+arr[i].budget
    }
    return sum;
  
  
  }
  console.log(getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]))  ;


  

 

//EXERCICE 9
function inkLevels(inks) {
  let min =inks.cyan;
  for(let i in inks){
    if(inks[i]<min){
      min=inks[i];
    }
  }
  return min
	
}
console.log(inkLevels({
  "cyan": 432,
  "magenta": 543,
  "yellow": 777
}));

 
  
