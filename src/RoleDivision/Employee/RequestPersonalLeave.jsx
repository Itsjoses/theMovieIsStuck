import React from 'react'
import { db } from '../../database/firebase-Config'
import {useState, useEffect} from 'react'
import { collection, deleteDoc, doc, addDoc, getDocs, getDoc} from "firebase/firestore"
import { Link } from 'react-router-dom';
import Navbar from '../../navbar';
const RequestPersonalLeave = () => {
    const [Employees,setEmployee] = useState([]);
    const DBE = collection(db,"Employee")
    const DBPL = collection(db,"PersonalLeave")
    useEffect(() => {
        const getData = async()=> {
          const data = await getDocs(DBE);
          setEmployee(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getData();
      }, []);

    const addPersonalLeave = async(id,name,job,email) =>{
        await addDoc(DBPL, {
            employeeId : id,
            name: name,
            job : job,
            email : email,
            status: "none"
        })
    }

  return (
         <div className="min-w-full container flex flex-row">
            <Navbar/>
            <div className="w-full min-h-screen relative shadow-md sm:rounded-lg p-8 ml-[270px]">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tr>
                <th className="py-3 px-6 bg-gray-50 dark:bg-gray-800">Name</th>
                <th className="py-3 px-6 dark:bg-gray-100">Age</th>
                <th className="py-3 px-6 bg-gray-50 dark:bg-gray-800">Job</th>
                <th className="py-3 px-6 dark:bg-gray-100">Email:</th>
                <th className="py-3 px-6 bg-gray-50 dark:bg-gray-800">Action</th>
                          </tr>
                        </thead>
                        <tbody>
        {Employees.map((Employee) => {
          if(Employee.status == "Active")
              return(
                          <tr>
                          <td className="py-3 px-6 bg-gray-50 dark:bg-gray-800">{Employee.name}</td>
                          <td className="py-3 px-6 dark:bg-gray-100">{Employee.age}</td>
                          <td className="py-3 px-6 bg-gray-50 dark:bg-gray-800">{Employee.job}</td>
                          <td className="py-3 px-6 dark:bg-gray-100">{Employee.email}</td>
                          <td className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                            <button 
                            onClick={() => addPersonalLeave(Employee.id,Employee.name,Employee.job,Employee.email)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Add Request Personal Leave
                            </button>
                          </td>
                          
                          </tr>
              );
          })

          }
          </tbody>
          </table>


        </div>
        </div>
  )
}

export default RequestPersonalLeave
