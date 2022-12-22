import React from 'react'
import {db} from "../../database/firebase-Config"
import {useState, useEffect} from 'react'
import { collection, deleteDoc, doc, addDoc, getDocs, getDoc} from "firebase/firestore"
import { async } from '@firebase/util'
import Downloadpdf from './Downloadpdf'
const AddMovie = () => {
    const [moviename,setmoviename] = useState("");
    const [moviedescription,setmoviedescription] = useState("");
    const [movieduration,setmovieduration] = useState(1);
    const [bioskopplace,setbioskopplace] = useState("");
    const dbMovie = collection(db,"MovieData");

    const addOrder = async() => {
      await addDoc(dbMovie,{
        moviename: moviename,
        moviedescription: moviedescription,
        movieduration: movieduration,
        bioskopplace: bioskopplace,
      })
    }

  return (
    <div>
      <input type="Text" placeholder='Movie Name' onChange={(event) => {
        setmoviename(event.target.value);
      }}/>
      <input type="Text" placeholder='Movie Description' onChange={(event) => {
        setmoviedescription(event.target.value);
      }}/>
      <input type="number" placeholder='Movie Duration' onChange={(event) => {
        setmovieduration(event.target.value);
      }}/>
      <input type="text" placeholder='Bioskop Place' onChange={(event) => {
        setbioskopplace(event.target.value);
      }}/>

      <button onClick={() => {addOrder()}}>Submit</button>
      <Downloadpdf/>
    </div>
  )
}

export default AddMovie
