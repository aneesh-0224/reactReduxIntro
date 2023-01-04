import React from 'react'
import { buyCake } from '../redux/cake/action'
import {buyFruit} from '../redux/fruit/action'
import { useSelector,useDispatch } from 'react-redux'
export default function Home() {
    const noOfCakes=useSelector((state)=> state.cake.noOfCakes)
    const noOfFruits=useSelector((state)=> state.fruit.noOfFruits)
    const dispatch=useDispatch()
  return (
    <div style={{textAlign:"center"}}>
      <h1>No. of cakes are -{noOfCakes} </h1>
      <button onClick={()=>{dispatch(buyCake())}}>Buy Cake</button>
      <h1>No. of fruits are - {noOfFruits}</h1>
      <button onClick={()=>{dispatch(buyFruit())}}>Buy Fruit</button>
    </div>
  )
}
