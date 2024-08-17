let getElementsByTagName=document.getElementsByTagName("p");
// console.log("getElementsByTagName:",getElementsByTagName[0]);

let getElementsBySelector=document.querySelector("#heading")

function test(params) {
    getElementsById("code").className="active";

    let h3=document.getElementsByTagName("h3");
    h3[0].setAttribute("class","active");
    let h4=document.getElementsByClassName("class1");
    // h4[0].classList.add("class3");
    // h4[0].classList.remove("class1");
    // console.log(11111,h4[0].classList);
    h4[0].toggleAttribute;
    document.getElementsByClassName("container")[0].textContent="hello";
};

let obj={
    age:20
};
obj.name="minh thu";