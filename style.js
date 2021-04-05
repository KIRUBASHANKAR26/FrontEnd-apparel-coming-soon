
function check()
{
  var emailInput=document.getElementById("email-input");
  var btn=document.getElementById("text-error");
  var errorIcon=document.getElementById("error-img");
  if(!emailInput.checkValidity() || || emailInput.value === "")
  {
    errorIcon.classList.add("show");
    emailInput.style.border="3px solid hsl(0, 93%, 68%)";
    var errorText=document.createElement('p');
    errorText.className='error-text';
    var textNode=document.createTextNode('Please provide a valid mail');
    errorText.appendChild(textNode);
    btn.appendChild(errorText);
    emailInput.value="";
   
  }else
  {
      errorIcon.classList.remove("show");
      emailInput.style.border = "1px solid hsl(0, 36%, 70%)";
      var errorText=document.createElement('p');
      errorText.className='error-text';
      var textNode=document.createTextNode('Thanks,We\'re coming soon!');
      errorText.appendChild(textNode);
      btn.appendChild(errorText);
      emailInput.value="";
  }
}


