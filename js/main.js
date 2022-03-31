function reverseStr(str) {
  let reverseStr = str.split('').reverse().join('')
  console.log(reverseStr)
}


const palindromeCheck = str => console.log(str === str.split('').reverse().join(''))

const audio = new Audio('Missy.mp3');

const missyPalindrome() = function(str) {
  if (palindromeCheck(str) === true){
    document.querySelector('body').style.backgroundImage = "url(https://c.tenor.com/EXzrW3-GMGoAAAAC/missy-elliot-work-it.gif)"
    audio.play();
  }
}

document.getElementById("submit").onclick = missyPalindrome(document.getElementById("workIt").value)
