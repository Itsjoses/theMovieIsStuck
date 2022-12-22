import React from 'react'
import {db} from "../../database/firebase-Config"
import {useState, useEffect} from 'react'
import { collection, deleteDoc, doc, addDoc, getDocs, getDoc} from "firebase/firestore"
import { async } from '@firebase/util'
import Downloadpdf from './Downloadpdf'
const AddSupply = () => {
  const [supplyname,setsupplyname] = useState("");
  const [supplyquantity,setsupplyquantity] = useState(1);
  const [supplyprice,setsupplyprice] = useState(1);
  const dbsupply = collection(db,"Advertising");
const newSupply = async() => {
  await addDoc(dbsupply,{
    supplyname : supplyname,
    supplyquantity : Number(supplyquantity),
    supplyprice : Number(supplyprice),
  })
}

  return (
    <div>
        <input type="Text" placeholder='Supply Name' onChange={(event) => {
        setsupplyname(event.target.value);
      }}/>
      <input type="number" placeholder='Supply Quantity' onChange={(event) => {
        setsupplyquantity(event.target.value);
      }}/>
      <input type="number" placeholder='Supply Price' onChange={(event) => {
        setsupplyprice(event.target.value);
      }}/>

      <button onClick={() => {newSupply()}}>Submit</button>
      <Downloadpdf/>
    </div>
  )
}

export default AddSupply
