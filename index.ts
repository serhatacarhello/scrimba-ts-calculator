const button = document.querySelector('.button') as HTMLButtonElement
const firstInput = document.querySelector('#first-input') as HTMLInputElement
const secondInput = document.querySelector('#second-input') as HTMLInputElement
export const root = document.querySelector('#root') as HTMLDivElement

function addNumbers(a: number, b: number) {
  root.innerHTML = (a + b).toString()
}

button.addEventListener('click', () =>
  addNumbers(parseInt(firstInput.value), parseInt(secondInput.value))
)
