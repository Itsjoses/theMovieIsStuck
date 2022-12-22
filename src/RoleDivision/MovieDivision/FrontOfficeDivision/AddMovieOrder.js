import React from 'react'
import {db} from "../../../database/firebase-Config"
import {useState} from "react"
import {collection,addDoc} from "firebase/firestore"
const AddMovieOrder = () => {
    const [newCustomer, setNewCustomer] = useState("")
    const [newMovie, setNewMovie] = useState("")
    const [newQuantity, setNewQuantity] = useState("")
    const [newPrice, setNewPrice] = useState("")
    const dbOrderMovie = collection(db, "OrderMovie")
    const addMovieOrder = async () => {
        await addDoc(dbOrderMovie,{
            customername : newCustomer,
            moviename : newMovie,
            quantity : newQuantity,
            price : newPrice
        });
    }

  return (
    <div>
      <input type="text" placeholder='Customer Name' onChange={(event) => {
        setNewCustomer(event.target.value)
      }}/>

        <input type="text" placeholder='Movie Name' onChange={(event) => {
        setNewMovie(event.target.value);
      }}/>

      <input type="number" placeholder='Quantity' onChange={(event) => {
        setNewQuantity(event.target.value)
      }}/>

      <input type="number" placeholder='NumberPhone' onChange={(event) => {
        setNewPrice(event.target.value)
      }}/>

      <button onClick={addMovieOrder}>Create New Recruitment</button>
    </div>
  )
}
export default AddMovieOrder
