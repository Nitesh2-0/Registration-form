var allInput     = document.querySelectorAll("#form input");
var signUpBtn    = document.querySelector("#btn");
var checkBox     = document.querySelector("#checkbox");
var eyeButtonSecond    = document.querySelector(".show");
var conformPasswordInput = document.querySelector("#conformPassword");
var eyeButtonFirst    = document.querySelector(".eye");
var PasswordInput = document.querySelector("#password");

var congratulation = document.querySelector("#formResponce")
var formList = document.querySelector("#formCreat")
var btnBack      = document.querySelector(".back") 
var btnContinue  = document.querySelector(".continue")

var checkingAllInput = function () {
  var isEmpty = false;

  allInput.forEach(function (input) {
    if (input.value === "") {
        isEmpty = true;
        return ;
    }
  });

  if (isEmpty) {
    alert("Fill required details.");
    return ;
  }

  if(!checkBox.checked){
    alert("Plz check Terms and Condition.");
    return; 
  }

  if(!isEmpty){
    congratulation.style.display = "initial"; 
    formList.style.display = "none";
  }
};
eyeButtonSecond.addEventListener('click',function(){
  if(conformPasswordInput.type === "password"){
     conformPasswordInput.type = "text";
     eyeButtonSecond.classList.replace("ri-eye-off-fill","ri-eye-fill")
  }
  else{
     conformPasswordInput.type = "password";
     eyeButtonSecond.classList.replace("ri-eye-fill","ri-eye-off-fill")
  }
})
eyeButtonFirst.addEventListener('click',function(){
  if(PasswordInput.type === "password"){
     PasswordInput.type = "text";
     eyeButtonFirst.classList.replace("ri-eye-off-fill","ri-eye-fill")
  }
  else{
     PasswordInput.type = "password";
     eyeButtonFirst.classList.replace("ri-eye-fill","ri-eye-off-fill")
  }
})
signUpBtn.addEventListener('click',checkingAllInput);

btnBack.addEventListener('click',function(){
  congratulation.style.display="none"; 
  formList.style.display="initial";
})

btnContinue.addEventListener('click', function() {
  var url = "https://technohacks.co.in/";
  var win = window.open(url, '_blank');
  win.focus();
});