let nameEle = document.getElementById("name");
let inputValueEle = document.getElementById("inputValue"); 
let saveBtnEle = document.getElementById("saveBtn"); 
let resetBtnEle = document.getElementById("resetBtn"); 
nameEle.textContent ="Varun"; 
nameEle.textContent = localStorage.getItem("name",inputValueEle.value); 
let storeVal = localStorage.setItem("name",inputValueEle.value);
saveBtnEle.onclick = function(){
    nameEle.textContent =inputValueEle.value;
    let storeVal = localStorage.setItem("name",inputValueEle.value);
};

resetBtnEle.onclick= function(){
    localStorage.removeItem("name"); 
    nameEle.textContent ="Varun";
};