import React from 'react'
import {db} from "../../database/firebase-Config"
import {useState, useEffect} from 'react'
import { collection, deleteDoc, doc, addDoc, getDocs, getDoc} from "firebase/firestore"
import { async } from '@firebase/util'
import Downloadpdf from './Downloadpdf'

const AddAdvertising = () => {
  const [advertisingname,setadvertisingname] = useState("");
  const [advertisingdescription,setmovieadvertisingdescription] = useState("");
  const [advertisingprice,setadvertisingprice] = useState(1);
  const dbAdvertising = collection(db,"Advertising");

  const newAdvertising = async() =>{
    await addDoc(dbAdvertising,{
      advertisingname: advertisingname,
      advertisingdescription: advertisingdescription,
      advertisingprice: Number(advertisingprice),
    })
  }
  return (
    <div>
        <input type="Text" placeholder='Advertising Name' onChange={(event) => {
        setadvertisingname(event.target.value);
      }}/>
      <input type="Text" placeholder='Advertising Description' onChange={(event) => {
        setmovieadvertisingdescription(event.target.value);
      }}/>
      <input type="number" placeholder='Advertising Price' onChange={(event) => {
        setadvertisingprice(event.target.value);
      }}/>

      <button onClick={() => {newAdvertising()}}>Submit</button>
      <Downloadpdf/>
    </div>
  )
}

export default AddAdvertising
