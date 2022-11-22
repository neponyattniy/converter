let btn1 = document.querySelectorAll('button')
let num1 = document.querySelector('.number1')
let num2 = document.querySelector('.number2')
let c1 = document.querySelector('.currency1')
let c2 = document.querySelector('.currency2')

function selectedButtonLeft () {

  let buttons = document.querySelectorAll('.button1')
  buttons.forEach((index)=>{
       index.addEventListener('click', (event) => {

         event.target.id = 'selected1'
        //  event.target.previousElementSibling.id = ' '
         if(event.target.id == 'selected1')
         {
          event.target.nextElementSibling.id = ' '
         }
    })
  })
}
selectedButtonLeft()

function selectedButtonRight () {

  let buttons = document.querySelectorAll('.button2')
  buttons.forEach((index)=>{
       index.addEventListener('click', (event) => {

         event.target.id = 'selected2'
         event.target.style.backgroundColor = '#833ae0'
         event.target.style.color = 'white'
         event.target.previousElementSibling.style.backgroundColor = 'white'
         event.target.previousElementSibling.style.color = 'black'

         event.target.previousElementSibling.id = ' '
         if(event.target.id == 'selected2')
         {
          event.target.nextElementSibling.id = ' '
         }
    })
  })
}
selectedButtonRight()

function usdtoazn () {
  selectedButtonLeft()
  selectedButtonRight()
  
}

// function sameValues() {
// let r1 = document.querySelector('.rub1')
// let r2 = document.querySelector('.rub2')
// let u1 = document.querySelector('.usd1')
// let u2 = document.querySelector('.usd2')
// let a1 = document.querySelector('.azn1')
// let a2 = document.querySelector('.azn2')
// let g1 = document.querySelector('.gbp1')
// let g2 = document.querySelector('.gbp2')
// let num1 = document.querySelector('.number1')
// let num2 = document.querySelector('.number2')
// let c1 = document.querySelector('.currency1')
// let c2 = document.querySelector('.currency2')


//   if(document.querySelector('#selected1').textContent == document.querySelector('#selected2').textContent) {
//   }

// }

// sameValues()

function rutous () {
var requestURL = 'https://api.exchangerate.host/convert?from=RUB&to=USD';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response;
  console.log(response)
  let num1 = document.querySelector('.number1')
  let num2 = document.querySelector('.number2')
  let c1 = document.querySelector('.currency1')
  c1.textContent = `1 RUB = ${response.info.rate} USD`
  let changevalue = document.querySelector('.number1')
  num1.value = 1
  num2.value  = (num1.value*(response.info.rate)).toFixed(4)
  changevalue.addEventListener('keyup', () => {
    if(num1.value == 0) {
      num2.value = 0
    }
    else 
    num2.value  = (num1.value*(response.info.rate)).toFixed(4)
  })
}
}
function ustoru () {
    var requestURL = 'https://api.exchangerate.host/convert?from=USD&to=RUB';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
      var response = request.response;
      console.log(response)
      let c2 = document.querySelector('.currency2')
      c2.textContent = `1 USD = ${response.info.rate} RUB`
      let num1 = document.querySelector('.number1')
      let num2 = document.querySelector('.number2')
      let changevalue = document.querySelector('.number2')
      changevalue.addEventListener('keyup', () => {
        if(num2.value == 0) {
          num1.value = 0
        }
        else 
        num1.value = (num2.value*(response.info.rate)).toFixed(4)
      })
    }
    }
function rusd () {
  if(document.querySelector('.rub1').textContent == 'RUB' && document.querySelector('.usd2').textContent == 'USD')
  {
    rutous()
    ustoru()
    let btnus = document.querySelector('.usd2')
    btnus.addEventListener('click', ()=>{
      rutous()
      ustoru()
    })
  }
}
rusd()

function rutoaz () {
  var requestURL = 'https://api.exchangerate.host/convert?from=RUB&to=AZN';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  
  request.onload = function() {
    var response = request.response;
    console.log(response)
    let num1 = document.querySelector('.number1')
    let num2 = document.querySelector('.number2')
    let c1 = document.querySelector('.currency1')
    c1.textContent = `1 RUB = ${response.info.rate} AZN`
    let changevalue = document.querySelector('.number1')
    num1.value = 1
    num2.value  = (num1.value*(response.info.rate)).toFixed(4)
    changevalue.addEventListener('keyup', () => {
      if(num1.value == 0) {
        num2.value = 0
      }
      else 
      num2.value  = (num1.value*(response.info.rate)).toFixed(4)
    })
  }
  }
  function azntoru () {
    var requestURL = 'https://api.exchangerate.host/convert?from=AZN&to=RUB';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
      var response = request.response;
      console.log(response)
      let c2 = document.querySelector('.currency2')
      c2.textContent = `1 AZN = ${response.info.rate} RUB`
      let num1 = document.querySelector('.number1')
      let num2 = document.querySelector('.number2')
      let changevalue = document.querySelector('.number2')
      changevalue.addEventListener('keyup', () => {
        if(num2.value == 0) {
          num1.value = 0
        }
        else 
        num1.value  = (num2.value*(response.info.rate)).toFixed(4)
      })
    }
    }
function ruaz() {
  if(document.querySelector('.rub1').textContent == 'RUB' && document.querySelector('.azn2').textContent == 'AZN')
  {
    let btnazn = document.querySelector('.azn2')
    btnazn.addEventListener('click', (event) =>{
    event.target.style.backgroundColor = '#833AE0'
    event.target.style.color = 'white'
    document.querySelector('.usd2').style.backgroundColor = 'white'
    document.querySelector('.usd2').style.color = 'black'

    rutoaz()
    azntoru()

    })
    // document.querySelector('.usd2').addEventListener('mouseenter', (event) => {
    //   event.target.style.backgroundColor = '#833AE0';
    //   event.target.style.color = 'white'
      
    // })
    // document.querySelector('.usd2').addEventListener('mouseleave', (event)=>{
    //   event.target.style.backgroundColor = 'white'
    //   event.target.style.color = 'black'
    // })
  }
}
ruaz()
function rutogbp () {
  var requestURL = 'https://api.exchangerate.host/convert?from=RUB&to=GBP';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  
  request.onload = function() {
    var response = request.response;
    console.log(response)
    let num1 = document.querySelector('.number1')
    let num2 = document.querySelector('.number2')
    let c1 = document.querySelector('.currency1')
    c1.textContent = `1 RUB = ${response.info.rate} GBP`
    let changevalue = document.querySelector('.number1')
    num1.value = 1
    num2.value  = (num1.value*(response.info.rate)).toFixed(4)
    changevalue.addEventListener('keyup', () => {
      if(num1.value == 0) {
        num2.value = 0
      }
      else 
      num2.value  = (num1.value*(response.info.rate)).toFixed(4)
    })
  }
  }
  function gbptoru () {
    var requestURL = 'https://api.exchangerate.host/convert?from=GBP&to=RUB';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
      var response = request.response;
      console.log(response)
      let c2 = document.querySelector('.currency2')
      c2.textContent = `1 GBP = ${response.info.rate} RUB`
      let num1 = document.querySelector('.number1')
      let num2 = document.querySelector('.number2')
      let changevalue = document.querySelector('.number2')
      changevalue.addEventListener('keyup', () => {
        if(num2.value == 0) {
          num1.value = 0
        }
        else 
        num1.value  = (num2.value*(response.info.rate)).toFixed(4)
      })
    }
    }
function rugb () {
  if(document.querySelector('.rub1').textContent == 'RUB' && document.querySelector('.gbp2').textContent == 'GBP')
  {
    let btnazn = document.querySelector('.gbp2')
    btnazn.addEventListener('click', (event) =>{
    event.target.style.backgroundColor = '#833AE0'
    event.target.style.color = 'white'

 gbptoru()
 rutogbp()

    })
    // document.querySelector('.usd2').addEventListener('mouseenter', (event) => {
    //   event.target.style.backgroundColor = '#833AE0';
    //   event.target.style.color = 'white'
      
    // })
    // document.querySelector('.usd2').addEventListener('mouseleave', (event)=>{
    //   event.target.style.backgroundColor = 'white'
    //   event.target.style.color = 'black'
    // })
  }

}
rugb()
function ruru(){
  if(document.querySelector('.rub1').textContent == 'RUB' && document.querySelector('.rub2').textContent == 'RUB')
  {

    let btn = document.querySelector('.rub2')
    btn.addEventListener('click',() => {
      
      c1.textContent = `1 RUB = 1 RUB`
      c2.textContent = `1 RUB = 1 RUB`
      num2.value = 1
      let change = document.querySelector('.number1')
      change.addEventListener('keyup', () => {
        
        num2.value = num1.value * 1
      })
    })
  }
}
ruru()
// function usus(){
//   if(document.querySelector('.usd1').textContent == 'USD' && document.querySelector('.usd2').textContent == 'USD')
//   {

//     let btn = document.querySelector('.usd1')
//     btn.addEventListener('click',() => {
//       console.log(btn)
//       c1.textContent = `1 USD = 1 USD`
//       c2.textContent = `1 USD = 1 USD`
//       num2.value = 1
//       let change = document.querySelector('.number1')
//       change.addEventListener('keyup', () => {
        
//         num2.value = num1.value*1
//       })
//     })
//   }
// }
// usus()

