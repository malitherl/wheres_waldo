import { getAuth, signInAnonymously} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase'; 
import { useState } from "react";
import Leaderboard from "./Leaderboard";
import ScoreModalBackdrop from "./ScoreModalBackdrop";

function ScoreModal(props){
    //this will exist to allow the user to enter their name, and will add the score to the firestore database     
     const auth = getAuth();
     const [displayModal, setDisplayModal]= useState(true)
    const [name, setName] = useState('');

    signInAnonymously(auth)
    .then(() => {
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return `${errorCode}: ${errorMessage}`; 
    });

    function handleSubmit(event) {

        event.preventDefault();
        if(typeof(name) == 'string'){
            writeToDatabase()
            setDisplayModal(!displayModal)
        }
    }

    function handleChange(event){
        setName(event.target.value) 
    }
   
 async function writeToDatabase() {
   await addDoc(collection(db, "user"), {
        name: name,
        time: props.time, 
        level: props.level 
      });
 }

     if(props.time !== 0) {
         setDisplayModal(false)
     }




    return(
        <div>

            {!displayModal && 
                <div className="scoreModal">
                  <form onSubmit={handleSubmit}>
                    <label>Enter your name:</label>
                    <input type="text" maxLength="6" name="scorerName" onChange={handleChange} value={name}></input>
                    <button type="submit" className="submit">Submit</button>
                </form>
            </div>}
            {!displayModal && <ScoreModalBackdrop/>}
           
            {displayModal && <Leaderboard/>}
        </div>

    )
}

export default ScoreModal;