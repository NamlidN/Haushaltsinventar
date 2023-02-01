
import './Add.css';
import { useState, useEffect } from 'react';
import { db } from "../../firebase-config.js";
import { collection, getDocs, addDoc } from "firebase/firestore";
import H from '../H/Header';

function MAdd() {
    const [klein, setKlein] = useState([]);


 const  hausCollectionRef = collection(db, "mittel");

  
    const [newName, setName] = useState("");
    const [newURL, setURL] = useState("");
    useEffect(() => {
        async function getKlein() {
            const data = await getDocs(hausCollectionRef);
            setKlein(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getKlein();
    }, []);
    const create = async () => {
        await addDoc(hausCollectionRef, { name: newName, url: newURL });
    };
    return (
        <>
        <H />
            <div className="adD">
                <input placeholder='Name...' onChange={(event) => { setName(event.target.value); }} />
   
                <br />
                <br />
                <span className="jonge">
                    <input type="url" placeholder='Bild-URL...' onChange={(event) => { setURL(event.target.value); }} />
                    <p> Defect➜➜</p>
                    <input type='file' />
                </span>
                <br />
                <br />
                <button onClick={create}>Hinzufügen</button>
            </div>
        </>
    );
}

export default MAdd;



