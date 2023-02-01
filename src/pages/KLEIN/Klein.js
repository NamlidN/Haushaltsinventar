
import { useState, useEffect } from 'react';
import { db } from "../../firebase-config.js";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import './Klein.css'
import H from '../../components/H/Header.js';
function Kleiner() {
  const [klein, setKlein] = useState([]);
  const hausCollectionRef = collection(db, "klein");
  useEffect(() => {
    async function getKlein() {
      const data = await getDocs(hausCollectionRef);
      setKlein(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getKlein();
},[]);
  const dE = async (id) => {
    const userDoc = doc(db, `klein`, id);
    await deleteDoc(userDoc, id);
  };
  return (
    <span className='GTG'>
    <H />
    
   
    <span className='main'>
    <h1 className='kT'>Kleine Teile </h1>
      <div className='okeoke'>{klein.map((klein) => {
        return (
          <div className='card'>
            {
              console.log(1)
            }
               <button onClick={() => { dE(klein.id); }} >Delete</button>
            <h1 className='besch'>{klein.name} </h1>
   <img className='WWIMG' src={klein.url} alt="falsch"></img> 
         
          </div>
        );
      })}</div>
    </span>
    </span>
  );
}
export default Kleiner;
//! Router schmutz
//! CSS HOVER USW
//! BILDER DATENBANK ANPASSEN
//TODO katigorie !! JEWEILS SEZIELL DAFÜR GEMACHT CREATE USW VOR HINZUFÜGEN ABFRAGEN WELCHE GRÖßE 
