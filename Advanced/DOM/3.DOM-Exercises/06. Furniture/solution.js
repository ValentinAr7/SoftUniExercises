function solve() {

  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));
  const [input, output] = Array.from(document.querySelectorAll("textArea"));
  const tbody = document.querySelector("tbody");

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy)



}