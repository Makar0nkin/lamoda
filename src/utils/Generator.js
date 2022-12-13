import {possibleColors, possibleDescription, possibleNames} from "./PossibleInfo";

const getRandomNumber = (start, end) => Math.trunc(Math.random() * (end - start) + start)
export const getRandomString = () => Math.random().toString(35).substr(2)
const getRandomColor = () => possibleColors[getRandomNumber(0, possibleColors.length)]
const getRandomDescription = () => possibleDescription[getRandomNumber(0, possibleDescription.length)]
const getRandomName = () => possibleNames[getRandomNumber(0, possibleNames.length)]

export default function* generateCards(numberOfCards = 0) {
  for (let i = 0; i < numberOfCards; i++){
    yield new Map(Object.entries({
      name: getRandomName(),
      description: `Выполнены из ${getRandomDescription()} и ${getRandomDescription()}`,
      color: getRandomColor(),
      price: getRandomNumber(10, 9999),
      rating: getRandomNumber(1, 100),
      id: getRandomString() + new Date().getMilliseconds(),
    }))
  }
}

function generateButton(children, sortFn){
  return {
    children: children,
    id: children + new Date().getMilliseconds(),
    sort: {fn: sortFn},
    isChecked: false,
  }
}

export const buttons = [
  generateButton("Сначала дешевые", (a, b) => a.get("price") - b.get("price")),
  generateButton("Сначала дорогие", (a, b) => b.get("price") - a.get("price")),
  generateButton("Сначала популярные", (a, b) => b.get("rating") - a.get("rating")),
]