
let arr = [8,0,7,7,1,1,9,1,5,8];
for(let i=0;i<arr.length;i++)
{
    console.log('index is '+i +' and value is ->',arr[i]);
}

for(let num of arr)
{
    console.log('value is ->',num);
}

arr.forEach((value,index)=>{
    console.log('index is '+index +' and value is ->',value);
})
for(let num in arr)
{
    console.log('index is '+num +' and value is ->',arr[num]);
}
let reversed = arr.reverse();
console.log(reversed);

let score = [1,2,3,4,5,6,7,8,9];
let result = score.map(x=> x>5 ? "pass":"fail");
console.log(result); 

let filtered = score.filter(x=> x>5);
console.log(filtered);

let ascending = score.sort((a,b)=> a-b);
console.log(ascending);
let desc = score.sort((a,b)=> b-a);
console.log(desc);

let numss = [4,2,5,1,3,7,9,3];
 let s = numss.slice(2,5);
console.log('value of s :' + s);

console.log([3,7,9].every(x=> x>2));
console.log([3,7,9].every(x=> x<7));
console.log([3,7,9].some(x=> x>2));
console.log([3,7,9].some(x=> x<7));