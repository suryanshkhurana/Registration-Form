// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// // h2.innerText="abc";
// h2.innerText =h2.innerText+" from apna college";

// let newbt=document.createElement("button");
// newbt.innerText="click me";



// newbt.style.backgroundColor="red";
// newbt.style.color="white";

// document.querySelector("body").prepend(newbt);

// let para=document.querySelector("p");
// // para.setAttributeAttribute("class","newclas

// let modebtn=document.querySelector("#mode");
// let currmode="light";

// modebtn.addEventListener("click",()=>{
//     console.log("you trying to change the mode");
//     if(currmode==="light"){
//         currmode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }else{
//         currmode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     cons

// console.log("one");

// setTimeout(() => {
//     console.log("hello");
    
// }, 2000);

// console.log("three");

const URL = "https://cat-fact.herokuapp.com/facts";
// let promise = fetch(URL);
// console.log(promise);
const parafacts=document.querySelector("#facts");
const btn=document.querySelector("#btn");


const getfatcs= async()=>{
    console.log("gettings facts...");
    let response=await fetch(URL);
    console.log(response);

    let data=await response.json();
    parafacts.innerText=data[2].text;
};
btn.addEventListener("click",getfatcs);
