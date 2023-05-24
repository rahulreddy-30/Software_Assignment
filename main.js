var data;
var data2;
var hedata;
var hrdata;
var hrdata2;
var prdata2;
var prdata;
var data3;
function myFunction() {
  data = document.getElementById("bikes").value;
  data2 = document.getElementById("bikes2").value;
  console.log(data);
  if (data >= 100) {
    alert("enter value less than 100");
  } 
  else if(data2>100){
    alert("enter max value equal to 100 for best results!");
  }
  else {
    data3 = 100 - data2;
    hrdata2 = 100 - data;
    hrdata = data + "%";
    hrdata2 = hrdata2 + "%";
    hedata = data2 * 2;
    prdata = data * 3.6;
    prdata2 = 360 - prdata;
    prdata2 = prdata2 + "deg";
    prdata = prdata + "deg";
    document.getElementById("cars").style.width = "70px";
    document.getElementById("cars").style.height = hedata + "px";
    document.getElementById(
      "cars"
    ).style.background = `linear-gradient(0deg,#008cff ${hrdata} ,#c2e3ff ${hrdata2})`;
    document.getElementById("number").textContent = `${data}` + "%";
    document.getElementById("number").style.color = "008cff";
    document.getElementById("number").style.width = "70px";
    document.getElementById(
      "cars2"
    ).style.background = `conic-gradient(#c2e3ff 0deg ${prdata2} ,#008cff ${prdata2} ${prdata})`;
    document.getElementById("cars2").style.width = "200px";
    document.getElementById("cars2").style.height = hedata + "px";
    document.getElementById("number2").textContent = `${data}` + "%";
    document.getElementById("number2").style.color = "#ffffff";
    document.getElementById("number2").style.width = "70px";
    document.getElementById("cars3").style.width = "70px";
    document.getElementById("cars3").style.height = hedata + "px";
    document.getElementById(
      "cars3"
    ).style.background = `linear-gradient(0deg,#008cff,#c2e3ff )`;
    document.getElementById("number3").textContent = `${data}` + "%";
    document.getElementById("number3").style.color = "008cff";
    document.getElementById("number3").style.width = "70px";
    document.getElementById("text1").textContent = "Level 1";
    document.getElementById("text2").textContent = "Level 2";
    document.getElementById("text3").textContent = "Level 3";
  }
}
