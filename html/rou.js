"use strict"

let sock;

let num = [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, "00", 15, 8, 25, 1, 21, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36];

function rand(upper) 
{
    let i = Math.random();
    let j = i * upper;
    let k = Math.floor(j);
    return k;
}

function spinner() 
{
    let randIndex = rand(38);
    let n1 = num[randIndex];
    let n2;
    let n3;
    let n4;
///////////////////////////////
    if (randIndex % 2 == 0) 
    {
        n2 = "Red";
    }
    else 
    {
        n2 = "Black";
    }
/////////////////////////////
    if (n1 === "00" || n1 % 2 == 0) 
    {
        n3 = "Even";
    }
    else 
    {
        n3 = "Odd";
    }
//////////////////////////////
    if (n1 === "00" || n1 > 18) 
    {
        n4 = "Passed";
    }
    else 
    {
        n4 = "Failed";
    }

    let spinList = [n1, n2, n3, n4];
    let toSer = JSON.stringify(spinList);
    sock.send(toSer);
}

function printer(event) 
{
    let j = event.data;
    let spinList = JSON.parse(j)

    let table = document.getElementById("tbl");
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let td1 = document.createElement("td");
    tr.appendChild(td1);
    let txt1 = document.createTextNode(spinList[0]);
    td1.appendChild(txt1);

    let td2 = document.createElement("td");
    tr.appendChild(td2);
    let txt2 = document.createTextNode(spinList[1]);
    td2.appendChild(txt2);

    let td3 = document.createElement("td");
    tr.appendChild(td3);
    let txt3 = document.createTextNode(spinList[2]);
    td3.appendChild(txt3);

    let td4 = document.createElement("td");
    tr.appendChild(td4);
    let txt4 = document.createTextNode(spinList[3]);
    td4.appendChild(txt4);
    
}

    /*
    function spinner()
    {
        let table = document.getElementById("tbl");
        let tr = document.createElement("tr");
        table.appendChild(tr);
    
    
    ///////////////////////////////////////////////////
    
    //  Print Number    
        let randIndex = rand(38);
        let n1 = num[randIndex];
    
        let td1 = document.createElement("td");
        tr.appendChild(td1);
        let txt1 = document.createTextNode(n1);
        td1.appendChild(txt1);
        //console.log(n1);
    
    //  Print Red for even or Black for odd
        if(randIndex %2 == 0)
        {
            let n2 = "Red";
    
            let td2 = document.createElement("td");
            tr.appendChild(td2);
            let txt2 = document.createTextNode(n2);
            td2.appendChild(txt2);
    
            
            //console.log("Red");
        }
        else
        {
            let n2 = "Black"
            //console.log("Black");
    
            let td2 = document.createElement("td");
            tr.appendChild(td2);
            let txt2 = document.createTextNode(n2);
            td2.appendChild(txt2);
        }
    
    //  Print Even or Odd    
        if(n1 === "00")
        {
            let n3 = "Even";
            //console.log("Even");
    
            let td3 = document.createElement("td");
            tr.appendChild(td3);
            let txt3 = document.createTextNode(n3);
            td3.appendChild(txt3);
        }
        else if(n1 %2 == 0)
        {
            let n3 = "Even";        
            //console.log("Even");
    
            let td3 = document.createElement("td");
            tr.appendChild(td3);
            let txt3 = document.createTextNode(n3);
            td3.appendChild(txt3);
        }
        else
        {
            let n3 = "Odd";        
            //console.log("Odd");
    
            let td3 = document.createElement("td");
            tr.appendChild(td3);
            let txt3 = document.createTextNode(n3);
            td3.appendChild(txt3);
        }
    
    // Print Failed or Passed
        if(n1 === "00")
        {
            let n4 = "Passed";
            //console.log("Passed");
    
            let td4 = document.createElement("td");
            tr.appendChild(td4);
            let txt4 = document.createTextNode(n4);
            td4.appendChild(txt4);
        }
        else if(n1 < 19)
        {
            let n4 = "Failed";
            //console.log("Failed");
    
            let td4 = document.createElement("td");
            tr.appendChild(td4);
            let txt4 = document.createTextNode(n4);
            td4.appendChild(txt4);
        }
        else
        {
            let n4 = "Passed";
            //console.log("Passed");
    
            let td4 = document.createElement("td");
            tr.appendChild(td4);
            let txt4 = document.createTextNode(n4);
            td4.appendChild(txt4);
        }
    /////////////////////////////////////////////////////
    
    }
    
    spinner();
    */
    //////////////////////////////////////////////////////////
    // New for webSocket stuff 2/5/24

    function main() 
    {

        sock = new WebSocket("ws://" + document.location.host + "/sock");

        sock.addEventListener("message", printer)

    }

    main();
