import React from "react";
import PCList from "./Components/PCSList";
import { pcActions } from "./store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import axios from "axios";

import './App.css';



function App() {
  const dispatch = useDispatch();

  //fetching characters from firebase
  useEffect(() => {
    const loadChars = async () => {
      await axios.get('https://dnd-pcs-8dbe6-default-rtdb.europe-west1.firebasedatabase.app/characters.json')
        .then(response => {
          dispatch(pcActions.init(response.data));
        })
    }
    loadChars();
  });

  return <>
    <PCList />
  </>;
}

export default App;
