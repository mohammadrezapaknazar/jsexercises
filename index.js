// function test(){
// alert("welcome");

// }

// sacend one

// function test(){
// alert("welcome to...")

// }
// document.getElementById("btn").addEventListener("welcome to...",function(){
//     test();
// })

// therd one

function test(){
  var password = document.getElementById("pass").value;
  if(password.length < 8){
      document.getElementById("err").innerText =
      "password shod be more than 8 character";
      document.getElementById("err").style.color="red";
  }
  else{
      document.getElementById("err").innerText = "succes";
      document.getElementById("err").style.color = "green";
   
  }
}