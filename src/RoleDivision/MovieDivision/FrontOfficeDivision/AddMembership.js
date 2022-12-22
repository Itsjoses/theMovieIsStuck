import React from 'react'
import {db} from "../../../database/firebase-Config"
import {useState} from "react"
import {collection,addDoc} from "firebase/firestore"
const AddMembership = () => {
    const [newCustomer, setNewCustomer] = useState("")
    const [newCustomerPhone, setNewCustomerPhone] = useState("")
    const [newCustomerTier, setNewCustomerTier] = useState("")
    const [newTierPrice, setNewTierPrice] = useState(1)
    const dbMembership = collection(db, "Membership")
    const addMembership = async () => {
        if(newCustomerTier === "Bronze")setNewTierPrice(100000);
        else if(newCustomerTier === "Silver") setNewTierPrice(200000);
        else setNewTierPrice(500000);
        await addDoc(dbMembership,{
            customername : newCustomer,
            customerphone : newCustomerPhone,
            customertier : newCustomerTier,
            tierprice : newTierPrice
        });
    }

  return (
    <div>
      <input type="text" placeholder='Customer Name' onChange={(event) => {
        setNewCustomer(event.target.value)
      }}/>

        <input type="text" placeholder='Customer Phone' onChange={(event) => {
        setNewCustomerPhone(event.target.value);
      }}/>

      <input type="Text" placeholder='Customer Tier' onChange={(event) => {
        setNewCustomerTier(event.target.value)
      }}/>
      <button onClick={addMembership}>Create Membership</button>
    </div>
  )
}
export default AddMembership
