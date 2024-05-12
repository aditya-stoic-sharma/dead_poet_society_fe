import { useState } from "react";
import PoetryContext from "./PoetryContext";
const hostname = "http://localhost:5000"

const PoetryState = (props) => {
    const [poem, setPoem] = useState([]);


    //api request for getting all poems 
    const getPoems = async () => {
        const response = await
            fetch(`${hostname}/api/poetry/fetchAllpoetry`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                }
            }
            );

        const json = await response.json();
        setPoem(json.allPoetries);
    }

    // api request to add a poem
    const addPoem = async (poetryData) => {
        const response = await fetch(`${hostname}/api/poetry/addPoetry`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ poetryData })
        })

        const json = await response.json();
        if (json.success) {
            setPoem([...poem, json.Poetry]);
        }
    }


    return (
        <PoetryContext.Provider value={{ poem, setPoem, getPoems, addPoem }}>
            {props.children}
        </PoetryContext.Provider>
    )
}

export default PoetryState
