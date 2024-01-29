"use strict"


let num = [0,34,10,21,28,4,18,9,27,22,12,3,17,20,11,33,2,10,32,"00",15,8,25,1,21,20,14,30,7,24,29,35,6,13,23,19,5,36];

function rand(upper)
{
    let i = Math.random();
    let j = i * upper;
    let k = Math.floor(j);
    return k;
}

function spinner()
{
//  Print Number    
    let randIndex = rand(38);
    let n = num[randIndex];

    console.log(n);

//  Print Red for even or Black for odd
    if(randIndex %2 == 0)
    {
        console.log("Red");
    }
    else
    {
        console.log("Black");
    }

//  Print Even or Odd    
    if(n === "00")
    {
        console.log("Even");
    }
    else if(n %2 == 0)
    {
        console.log("Even");
    }
    else
    {
        console.log("Odd");
    }

// Print Failed or Passed
    if(n === "00")
    {
        console.log("Passed");
    }
    else if(n < 19)
    {
        console.log("Failed");
    }
    else
    {
        console.log("Passed");
    }

}

spinner();