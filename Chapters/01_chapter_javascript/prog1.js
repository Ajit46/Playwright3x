let arr  = [8,0,7,7,1,1,9,1,5,8];

arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.push(7);
console.log(arr);
arr.unshift(9);
console.log(arr);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.splice(3,3,1,2,3);
console.log(arr);

let abc = [14,11,16,19,32];
let result = abc.find(x=> x>30);
console.log(result);
let index = abc.findIndex(x=> x>14);
console.log(index);
