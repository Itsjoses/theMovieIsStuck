import React from 'react'
import {db} from "../../database/firebase-Config"
import {useState, useEffect} from 'react'
import { collection, deleteDoc, doc, addDoc, getDocs, getDoc} from "firebase/firestore"

const CookOrder = () => {
  const [CookOrders,setCookOrder] = useState([])
  const dbCO = collection(db,"CookOrder")
  useEffect(() => {
    const getOrder = async()=> {
      const data = await getDocs(dbCO);
      setCookOrder(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getOrder();

  }, []);

  const doneCook = async(id) => {
    const DoneCookdoc = doc(db,"CookOrder",id);
    await deleteDoc(DoneCookdoc);
  }

  return (
    <div>
      {CookOrders.map((CookOrder) => {
        return(
            <div>
                <p>Customer Name: {CookOrder.customername} </p>
                <p>Order Name: {CookOrder.ordername} </p>

                <button onClick={() => {doneCook(CookOrder.id)}}>Done Cook</button>
          </div>
        );
      })

      }
    </div>
  )
}

export default CookOrder
