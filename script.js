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
// let buttons2 = document.querySelectorAll('.currencies2 button')
// buttons2.forEach((item)=>{
//   item.addEventListener('click', (event)=>{
//     secondValue = event.target.textContent
//     var requestURL = `https://api.exchangerate.host/convert?from=${secondValue}&to=${firstValue}`;
//     var request = new XMLHttpRequest();
//     request.open('GET', requestURL);
//     request.responseType = 'json';
//     request.send();
//     request.onload = function() {
//     var response = request.response;
//     console.log(response)
//     c2.textContent = `1 ${secondValue} = ${response.result} ${firstValue}`
//     c1.textContent = `1 ${firstValue} = ${response.result} ${secondValue}`
//     n2.addEventListener('keyup', () => {
//       n1.value = (n2.value * response.result).toFixed(4)
//     })
//     }
//   })
// })

function getCurrencies () {
          // window.addEventListener('load', ()=>{
          //   fetch(`https://api.exchangerate.host/latest?base=${firstValue}&symbols=${secondValue}`)
          //   .then(response => response.json())
          //   .then(data => {
          //     console.log(data)
          //     c1.textContent = `1 ${firstValue} = ${data.rates[secondValue]} ${secondValue}`
              
          //     n1.addEventListener('input', ()=>{
          //       n2.value = (n1.value*data.rates[secondValue]).toFixed(4)
          //     })
          //     fetch(`https://api.exchangerate.host/latest?base=${secondValue}&symbols=${firstValue}`)
          //     .then(response => response.json())
          //     .then(data => {
          //       console.log(data)
          //       c2.textContent = `1 ${secondValue} = ${data.rates[firstValue]} ${firstValue}`
          //       n2.addEventListener('input', ()=>{
          //         n1.value = (n2.value*data.rates[firstValue]).toFixed(4)
          //       })
          //     })
          //   })
          // })
          let buttons = document.querySelectorAll('.currencies1 button')
          buttons.forEach((item)=>{
            item.addEventListener('click', (event)=>{
              firstValue = event.target.textContent
              fetch(`https://api.exchangerate.host/latest?base=${firstValue}&symbols=${secondValue}`)
              .then(response => response.json())
              .then(data => {
                console.log(data)
                c1.textContent = `1 ${firstValue} = ${data.rates[secondValue]} ${secondValue}`
                n2.value = (n1.value*data.rates[secondValue]).toFixed(4)
                n1.addEventListener('input', ()=>{
                  n2.value = ((n1.value*data.rates[secondValue]).toFixed(4))
                })
                fetch(`https://api.exchangerate.host/latest?base=${secondValue}&symbols=${firstValue}`)
                .then(response => response.json())
                .then(data => {
                  console.log(data)
                  c2.textContent = `1 ${secondValue} = ${data.rates[firstValue]} ${firstValue}`
                n1.value = (n2.value*data.rates[firstValue]).toFixed(4)
                })
              })
            })
          })
}
getCurrencies()

function getCurrenciesReversed() {

  let buttons2 = document.querySelectorAll('.currencies2 button')
  buttons2.forEach((item)=>{
    item.addEventListener('click', (event)=>{
      secondValue = event.target.textContent
      
      fetch(`https://api.exchangerate.host/latest?base=${secondValue}&symbols=${firstValue}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        c2.textContent = `1 ${secondValue} = ${data.rates[firstValue]} ${firstValue}`
        n2.addEventListener('keyup', ()=>{
          n1.value = (n2.value*data.rates[firstValue]).toFixed(4)
        })
        fetch(`https://api.exchangerate.host/latest?base=${firstValue}&symbols=${secondValue}`)
        .then(response => response.json())
        .then(data1 => {
          console.log(data1)
          c1.textContent = `1 ${firstValue} = ${data1.rates[secondValue]} ${secondValue}`
        })
      })
})
})
}

getCurrenciesReversed()
