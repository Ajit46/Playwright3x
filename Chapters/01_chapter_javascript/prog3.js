function add(a,b,c,d,e)
{
    return a+b+c+d+e;
}

let num=[1,2,3,4,5];
console.log(add(...num));

function hasError(...nums)
{
    return nums.some(a=> a>200);
}

let responseCode= [200, 400, 500, 100];
console.log(hasError(...responseCode));