import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import LeaderboardDisplay from './LeaderboardDisplay';
export default function Leaderboard() {
   const [info, setInfo] = useState({});
    useEffect(()=> {
        let mounted = true
        async function retrieveData(){ 
            const querySnapshot = await getDocs(collection(db, "user"));
            querySnapshot.forEach((doc) => { 
            if (mounted) {  
                setInfo(prevState => ({...prevState,  
                    [doc.id] : { 
                        name: doc.data().name,
                        level: doc.data().level, 
                        time: doc.data().time
                     }
                }) 
                )      
            }    
            });
        }
        retrieveData()
        return function cleanup() {
            mounted = false
        }
    }, [])

    return(
        <div>
            <LeaderboardDisplay info={info}/>
        </div>
    )
}