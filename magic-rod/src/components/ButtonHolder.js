import React from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "@/components/firebase";
import { useState } from "react";
import {ref, set} from "firebase/database";

export default function ButtonHolder() {
  const [newItem, setNewItem] = useState({isFishing: 'False'});

  // add item to db
  const addItem = () => {
    try {
        set(ref(db), {
            isFishing: 'True' === newItem.isFishing ? 'False' : 'True',
        });
    } catch (error) {
        console.log("Error adding: ", error)
    }
  }
  // read item from db
  // useEffect(() => {

  // }, [])

  // delete item from db
    
    const handleToggle = () => {
        addItem();
        setNewItem('True' === newItem.isFishing ? {isFishing: 'False'} : {isFishing: 'True'})
    };

    
    return (
      <div className="bg-white p-4 flex-grow rounded shadow-lg flex justify-center">
        <button onClick={handleToggle} class="bg-teal-500 hover:bg-teal-600 pb-8 text-center text-white font-bold py-2 px-4 rounded h-1/4 w-40">
            {'True' === newItem.isFishing ? "Stop Fishing" : "Start Fishing"}
        </button>
      </div>
    );
  }