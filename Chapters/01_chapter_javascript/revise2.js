function ValidateCode(code){
    if(code>= 200 && code < 300){
        console.log("Success");
    }
}

const ValidateCode2 = function(code)
{
    if(code>= 200 && code < 300){
        console.log("Success");
    }
    else{
        console.log("Failure");
    }
};

const ValidateCode3 = (code) => {
    if(code>= 200 && code < 300){
        console.log("Success");
    }
    else{
        console.log("Failure");
    }
};


ValidateCode(200);
ValidateCode2(300);
ValidateCode3(400);
