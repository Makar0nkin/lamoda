import React, {useCallback, useEffect, useState} from 'react'
import classes from "./Cards.module.css"
import Card from "../Card/Card"
import Loader from "../Loader/Loader";

const Cards = ({cards, setAmountOfFilteredCards, colorFilter, costFilter, btnSort, strFilter}) => {
  const [displayCards, setDisplayCards] = useState(cards)
  const [isLoading, setIsLoading] = useState(true)

  const FilterByAllProperties = useCallback((cards) => {
    const filters = [FilterByColor, FilterByCost, SortCards, StrFilter]
    return filters.reduce((prev, next) => next(prev), cards)
  }, [colorFilter, costFilter, btnSort, strFilter])

  const FilterByColor = useCallback((cards) => {
    if (colorFilter.size === 0) return cards
    return cards.filter(card =>
      [...colorFilter]
        .map((color) => card.get("color") === color)
        .reduce((prev, cur) => prev || cur)
    )
  }, [colorFilter])

  const FilterByCost = useCallback((cards) => {
    return cards.filter((card) =>
      costFilter.get("min") <= card.get("price") && card.get("price") <= costFilter.get("max")
    )
  }, [costFilter])

  const SortCards = useCallback((cards) =>{
    return cards.sort(btnSort)
  }, [btnSort])

  const StrFilter = useCallback((cards) => {
    if (strFilter === '') return cards
    return cards.filter(card => ~card.get("name").toLowerCase().indexOf(strFilter.toLowerCase()))
  }, [strFilter])

  useEffect(() => {
    setAmountOfFilteredCards(displayCards.length)
    setIsLoading(false)
  }, [displayCards])

  useEffect(() => {
    const debounce = setTimeout(() => {
      setIsLoading(true)
      setDisplayCards(FilterByAllProperties(cards))
    }, 300)
    setIsLoading(false)
    return () => clearTimeout(debounce)
  }, [colorFilter, costFilter, btnSort, strFilter])

  // return(
  //   <Loader/>
  // )
  if (isLoading)
    return (
      <Loader/>
    )
  return (
    <div className={classes.cards}>
      {displayCards
        .map((el) => (
          <Card {...Object.fromEntries(el)} key={el.id}/>
        ))
      }
    </div>
  )
}

export default React.memo(Cards);