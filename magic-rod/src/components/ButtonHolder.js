import React from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "@/components/firebase";
import { useState } from "react";

export default function ButtonHolder() {
  const [newItem, setNewItem] = useState({flag: '0'});

  // add item to db
  const addItem = async () => {

    if (newItem.flag === '0') {
      await addDoc(collection(db, "flag"), {
         flag: '1'
      });
    }
    else {
      await addDoc(collection(db, "flag"), {
        flag: '0'
     });
    } 
  }
  // read item from db
  // useEffect(() => {

  // }, [])

  // delete item from db
    
    const handleToggle = () => {
        addItem();
        setNewItem('1' === newItem.flag ? {flag: '0'} : {flag: '1'})
    };

    
    return (
      <div className="bg-white p-4 flex-grow rounded shadow-lg flex justify-center">
        <button onClick={handleToggle} class="bg-blue-500 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 rounded h-1/4">
            {'1' === newItem.flag ? "ON" : "OFF"}
        </button>
      </div>
    );
  }