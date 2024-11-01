const valpp = document.getElementById('input1');
const addTitle2 = document.getElementById('yourTitle');
function addTitle() {
  if (valpp.value === 'Password') {
    addTitle2.textContent = 'Correct Password';
    alert('Correct');
    document.body.style.background = 'green';
    document.getElementById('button1').onclick = function() {
      const val1 = valpp.value;
      if (addTitle2.textContent === 'Correct Password') {
        alert('Error 404: Same Password');
        addTitle2.textContent = 'Error 404: Same Password';
        setTimeout(redoTitle, 3000);
      }
    };
  } else if (valpp.value === '999') {
    document.body.style.background = 'purple';
    addTitle2.textContent = '999FL & DRFL';
  } else {
    alert('Password Incorrect.. Please Reload Page To Try Again');
    document.body.style.background = 'red';
    document.getElementById("button1").remove();
  }
}
function redoTitle() {
  addTitle2.textContent = 'Correct Password';
  document.getElementById('button1').onclick = function() {
    if (valpp.value === 'Password') {
      addTitle2.textContent = 'Correct Password';
      alert('Error 404: Same Password');
      document.body.style.background = 'green';
      document.getElementById('button1').onclick = function() {
        const val1 = valpp.value;
        if (addTitle2.textContent === 'Correct Password') {
          alert('Error 404: Same Password');
          addTitle2.textContent = 'Error 404: Same Password';
          setTimeout(redoTitle, 3000);
        }
      };
    }
  };
}
function resetall() {
  const val1 = valpp.value;
  addTitle2.textContent = 'Enter The Correct Password';
  document.body.style.background = 'none';
  valpp.value = '';
  document.getElementById("button1").onclick = addTitle;
}
function rainbowBackground(){
    document.getElementById("body0").classList.add("rainbow-light");
}
function resetBackgroundRb(){
  document.getElementById("body0").classlist.remove("rainbow-light");
}
const audio = new Audio("http://soundbible.com/grab.php?id=835&type=mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
