let firstValue = document.querySelector('#selected1').textContent
let secondValue = document.querySelector('#selected2').textContent
let c1 = document.querySelector('.currency1')
let c2 = document.querySelector('.currency2')
let n1 = document.querySelector('.number1')
let n2 = document.querySelector('.number2')
let changeColorFirst = document.querySelectorAll('.button1')
changeColorFirst.forEach((item) => {
  item.addEventListener('click', (event)=>
  {
    event.target.id = 'selected1'
    let btns = document.querySelectorAll('.currencies1 button')
    btns.forEach((index)=>{
      {
        index.id = ' '
        event.target.id = 'selected1'
      }      
    })
  })
})

let changeColorSecond = document.querySelectorAll('.button2')
changeColorSecond.forEach((item) => {
  item.addEventListener('click', (event)=>
  {
    event.target.id = 'selected2'
    let btns = document.querySelectorAll('.currencies2 button')
    btns.forEach((index)=>{
      {
        index.id = ' '
        event.target.id = 'selected2'
      }
    })
  })
})

fetch(`https://api.exchangerate.host/latest?base=${firstValue}&symbols=${secondValue}`)
.then(response => {return response.json()})
.then(data => {
    currencyoffirst = data.rates[secondValue];
    console.log(data.rates[secondValue])
    currencyofsecond = 1 / currencyoffirst;
    c1.textContent = `1 ${firstValue} = ${parseFloat(currencyoffirst.toFixed(4))} ${secondValue}`;
    c2.textContent = `1 ${secondValue} = ${parseFloat(currencyofsecond.toFixed(4))} ${firstValue}`;
    n1.addEventListener('input', () => {
      n2.value = (parseFloat((n1.value*currencyoffirst)).toFixed(4)).replace('.0000', ' ')
    })
    n2.addEventListener('input', () => {
      n1.value = (parseFloat((n2.value*currencyofsecond).toFixed(4)).toFixed(4)).replace('.0000', ' ')
    })
})
.catch(error => {
  alert(`Error! ${error}`)
});

let btn1 = document.querySelectorAll('.currencies1 button')
btn1.forEach((item)=>
{
item.addEventListener('click', (event) => {
firstValue = event.target.textContent
fetching()
})
})
let btn2 = document.querySelectorAll('.currencies2 button')
btn2.forEach((item)=>
{
item.addEventListener('click', (event) => {
secondValue = event.target.textContent
fetching()
})
})

function fetching () {
  fetch(`https://api.exchangerate.host/latest?base=${firstValue}&symbols=${secondValue}`)
  .then(response => {return response.json()})
  .then(data => {
      currencyoffirst = data.rates[secondValue];
      console.log(data.rates[secondValue])
      currencyofsecond = 1 / currencyoffirst;
      c1.textContent = `1 ${firstValue} = ${parseFloat(currencyoffirst.toFixed(4))} ${secondValue}`;
      c2.textContent = `1 ${secondValue} = ${parseFloat(currencyofsecond.toFixed(4))} ${firstValue}`;
        n2.value = (parseFloat((n1.value*currencyoffirst).toFixed(4)).toFixed(4)).replace('.0000', ' ')
      n1.addEventListener('input', () => {
        n2.value = (parseFloat((n1.value*currencyoffirst)).toFixed(4)).replace('.0000', ' ')
      })
      n2.addEventListener('input', () => {
        n1.value = (parseFloat((n2.value*currencyofsecond).toFixed(4)).toFixed(4)).replace('.0000', ' ')

      })
  })  
  .catch(error => {
    alert(`Error! ${error}`)
});

}

let menu = document.querySelector('.menuicon')
window.addEventListener('resize', () => {
  menu.style.display = 'none'
  if(window.innerWidth < 800)
{
  menu.style.display = 'block'
}
else
{
  menu.style.display = 'none'
}
})
menu.addEventListener('click', (event) => {
  if (window.innerWidth < 800) {
      if (event.target.id == 'clicked') {
          document.querySelector('.navbar').style.display = 'none';
          event.target.id = ''
      } else {
          event.target.id = 'clicked'
          document.querySelector('.navbar').style.display = 'flex';
          let inf = document.querySelectorAll('.infnav')
          inf.forEach((item)=>{
            if(window.innerWidth<800 && event.target.id == 'clicked')
            {
              item.style.display = 'block'
              item.addEventListener('mouseover', (event)=>{
                event.target.style.color = 'black'
              })
              item.addEventListener('mouseout', (event) => {
                event.target.style.color = ''
              })
            }
          })
      }
  }
});