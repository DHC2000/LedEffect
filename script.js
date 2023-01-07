const word= document.querySelector('.word');
word.innerHTML = word.textContent.replace(/\S/g,"<span>$&</span>");

const letter = document.querySelectorAll('span');
for (var i = 0; i <letter.length; i++) {
  letter[i].addEventListener("mouseover", function() {
    letter[i].classList.add('active');
  })
}
