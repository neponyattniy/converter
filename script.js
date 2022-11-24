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

function def() {
  if(firstValue == 'RUB' && secondValue == 'USD'){
  var requestURL = `https://api.exchangerate.host/convert?from=RUB&to=USD`;
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
  var response = request.response;
  console.log(response);
  c1.textContent = `1 RUB = ${response.result} USD`
  c2.textContent = `1 USD = 61.231337 RUB`
  n1.addEventListener('keyup', () => {
    n2.value = (n1.value * response.result).toFixed(4)
  })
}
}
}
def()

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
          let buttons = document.querySelectorAll('.currencies1 button')
          buttons.forEach((item)=>{
            item.addEventListener('click', (event)=>{
              
              let buttons2 = document.querySelectorAll('.currencies2 button')
              buttons2.forEach((item)=>{
                item.addEventListener('click', (event)=>{
                  secondValue = event.target.textContent
                  var requestURL = `https://api.exchangerate.host/convert?from=${secondValue}&to=${firstValue}`;
                  var request = new XMLHttpRequest();
                  request.open('GET', requestURL);
                  request.responseType = 'json';
                  request.send();
                  request.onload = function() {
                  var response = request.response;
                  console.log(response)
                  c2.textContent = `1 ${secondValue} = ${response.result} ${firstValue}`
                  console.log(response.result)
                  n2.addEventListener('keyup', () => {
                    n1.value = (n2.value * response.result).toFixed(4)
                  })
                  }
                })
              })

              firstValue = event.target.textContent
              var requestURL = `https://api.exchangerate.host/convert?from=${firstValue}&to=${secondValue}`;
              var request = new XMLHttpRequest();
              request.open('GET', requestURL);
              request.responseType = 'json';
              request.send();
              request.onload = function() {
              var response = request.response;
              console.log(response);
              c1.textContent = `1 ${firstValue} = ${response.result} ${secondValue}`
              n1.addEventListener('keyup', () => {
                n2.value = (n1.value * response.result).toFixed(4)
              })
              }
            })
          })
}
getCurrencies()



