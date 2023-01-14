function solve() {

  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));
  const [input, output] = Array.from(document.querySelectorAll("textArea"));
  const tbody = document.querySelector("tbody");

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy)

  const items = [];

  function generate(){
    const data = JSON.parse(input.value);

    for(let item of data){
      const row = document.createElement('tr')

      row.appendChild(createColumn('img', item.img));
      row.appendChild(createColumn('p', item.name));
      row.appendChild(createColumn('p', item.price));
      row.appendChild(createColumn('p', item.decFactor));
    }
  }

  function buy(){
    let list = [];
    let total = 0;
    let decoration = 0;

    const bought = items.filter(i => i.isChecked());

    for(let item of bought){
      list.push(item.name);
      total += Number(item.price);
      decoration += Number(item.decFactor);
    }

    decoration /= bought.length;

    output.value = [
      `Bought furniture: ${list.join('. ')}`,
      `Total price: ${total.toFixed(2)}`,
      `Avarage decoration factor: ${decoration}`
    ].join('\n')
  }

  



}