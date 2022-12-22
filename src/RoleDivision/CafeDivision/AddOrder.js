import React from 'react'
import {db} from "../../database/firebase-Config"
import {useState, useEffect} from 'react'
import { collection, deleteDoc, doc, addDoc, getDocs, getDoc} from "firebase/firestore"

const AddOrder = () => {
    const [newCustomer, setNewCustomer] = useState("");
    const [newOrderName, setNewOrderName] = useState("");
    const [newOrderPrice, setNewOrderPrice] = useState("");
    const dbOrder = collection(db, "OrderCafe");
    const dbCookOrder = collection(db,"CookOrder");
    const addOrder = async() => {
      const newField = {
        customername: newCustomer,
        ordername : newOrderName,
        orderprice : Number(newOrderPrice)
      }
        await addDoc(dbOrder,newField);
        await addDoc(dbCookOrder,newField);
    }

  return (
    <div>
      <input type="Text" placeholder='Customer Name' onChange={(event) => {
        setNewCustomer(event.target.value);
      }}/>
      <input type="Text" placeholder='Order Name' onChange={(event) => {
        setNewOrderName(event.target.value);
      }}/>
      <input type="number" placeholder='Order Price' onChange={(event) => {
        setNewOrderPrice(event.target.value);
      }}/>

      <button onClick={addOrder}>Submit</button>
    </div>
  )
}

export default AddOrder
