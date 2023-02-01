
import { useState, useEffect } from 'react';
import { db } from "../../firebase-config.js";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import '../KLEIN/Klein.css'
import H from '../../components/H/Header.js';
function Big() {
  const [klein, setKlein] = useState([]);
  const hausCollectionRef = collection(db, "groß");
  useEffect(() => {
    async function getKlein() {
      const data = await getDocs(hausCollectionRef);
      setKlein(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getKlein();
},[]);
  const dE = async (id) => {
    const userDoc = doc(db, `groß`, id);
    await deleteDoc(userDoc, id);
  };
  return (
    <>
    <H />
    <span className='main'>
    <h1 className='kT'>Große Teile </h1>
      <div className='okeoke'>{klein.map((groß) => {
        return (
          <div className='card'>
            {
              console.log(1)
            }
               <button onClick={() => { dE(groß.id); }} >Delete</button>
            <h1 className='besch'>{groß.name} </h1>
   <img className='WWIMG' src={groß.url} alt="falsch"></img> 
         
          </div>
        );
      })}</div>
    </span>
    </>
  );
}
export default Big;