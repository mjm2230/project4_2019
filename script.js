const checkoutButton = document.querySelector('.button')
const totalHolder = document.querySelector('#total')
const navButtons = document.querySelectorAll('#nav .topping')
const orderDiv = document.querySelector('.order')
const toppingButtons=document.querySelectorAll(".order .topping")
let counter = 0

//function to remove extra ingredients
const removeIngredient = (div) => {
  const ingredId = div.id
  console.log(ingredId)
  const element = document.getElementById(ingredId)
  element.remove()
  counter ++
}

//listens for a click in each nav button
//when clicked, adds a new div for the extra ingredient
//then selects all toppings as topping bottoms and lists them in console
navButtons.forEach(navButton => {
  navButton.addEventListener('click', () => {
    orderDiv.innerHTML += `<div id="${counter}" class="topping ${navButton.dataset.ingredient}" data-ingredient=${navButton.dataset.ingredient} data-price=${navButton.dataset.price}> ${navButton.dataset.ingredient}</div>`
    const toppingButtons=document.querySelectorAll(".order .topping")
     toppingButtons.forEach(toppingButton => {
      toppingButton.addEventListener('click', (e) => {
        removeIngredient(toppingButton)
      })
    })
  })
})


//listens for checkout button click
//when clicked, selects all toppings and totals up the price
//adds cost of burger to HTML

checkoutButton.addEventListener('click', () => {
  let total = 0
  const toppings = document.querySelectorAll('.order .topping ')
  toppings.forEach(topping => {
      total += Number(topping.dataset.price)
  })
  totalHolder.innerHTML = `<h3>The total cost of your smoothie is $${total}.</h3>`
})




