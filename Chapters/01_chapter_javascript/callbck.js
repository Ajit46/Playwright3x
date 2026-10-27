
function test(testName,callme){
    console.log("This is test function: " + testName);
    callme();
}

test("My first test",()=>{
    console.log("This is my first test");
});