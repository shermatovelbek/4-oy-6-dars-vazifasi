//uyga vazifalar boshlandi


// 1-misol tayyor !!!

function number(a , b , c){
    let max;
    if(a > b){
        max = a
    }
    if(b > c){
        max = b;
    } else{
        max = c;
    }
    return max;
}
console.log(number(5 , 100, 7));

// 2-misol tayyor !!!

function number(a , b){
    let sum = 0;
    if(a % 2 == 0){
        sum = a
    }
    if(b % 2 == 0){
        sum = b;
    }
    return sum;
}
console.log(number(5 , 6))  //6

// 3-misol tayyor

function numbers(a){
let sum = 0;

let b = a % 10
let o = Math.trunc(a / 10) - 10;
let y = Math.trunc(a / 10 - 11);
sum = b + o + y;

return sum;
}
console.log(numbers(123));

// 4-misol tayyor

function numbers(a){
let sum = 0;

let b = a % 10
let o = Math.trunc(a / 10) - 10;
let y = Math.trunc(a / 10 - 11);
if(b % 2 == 0){
    sum = sum + b;
}
if(o % 2 == 0){
    sum = sum + o;
}
if(y % 2 == 0){
    sum = sum + y;
}
return sum;
}
console.log(numbers(123));

// 5-misol tayyor

function number(a){
    let sum = 1;
    for(let i = 1; i <= a; i++){

        if(i % 3 == 1  && i % 5 == 1){
            sum = sum * i;
        }
    }
    return sum;
}
console.log(number(10))

// 6-misol tayyor

function numbers(n){
    let count = 0;
    for(let i = 1; i <= n; i++){
    if(i % 7 == 0 || i % 5 == 0){
        count++;
    }
    }
    return count;
}
console.log(numbers(20))

// 7-misol tayyor !!!

function numbers(n){
    let sum = 0;
    for(let i = 1; i <= n ; i++){
        if(i == 2){
            sum = sum + i
        }
    }
    return sum;
}
console.log(numbers(10));