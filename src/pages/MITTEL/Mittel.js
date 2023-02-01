
import { useState, useEffect } from 'react';
import { db } from "../../firebase-config.js";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import '../KLEIN/Klein.css'
import H from '../../components/H/Header.js';
function Mitte() {
  const [klein, setKlein] = useState([]);
  const hausCollectionRef = collection(db, "mittel");
  useEffect(() => {
    async function getKlein() {
      const data = await getDocs(hausCollectionRef);
      setKlein(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getKlein();
},[]);
  const dE = async (id) => {
    const userDoc = doc(db, `mittel`, id);
    await deleteDoc(userDoc, id);
  };
  return (
    <>
    <H />
    <span className='main'>
    <h1 className='kT'>Mittel 'Große'Teile </h1>
      <div className='okeoke'>{klein.map((mittel) => {
        return (
          <div className='card'>
            {
              console.log(1)
            }
               <button onClick={() => { dE(mittel.id); }} >Delete</button>
            <h1 className='besch'>{mittel.name} </h1>
   <img className='WWIMG' src={mittel.url} alt="falsch"></img> 
         
          </div>
        );
      })}</div>
    </span>
    </>
  );
}
export default Mitte;