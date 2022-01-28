import { doc, getDoc } from "@firebase/firestore";
import { db } from '../firebase'
import MapDisplay from "./MapDisplay";
import { useState, useEffect } from 'react';
import Timer from "./Timer";
import { useNavigate } from "react-router";
import { useIsMounted } from "./useIsMounted";


function Map(props) {
    //i could have the database just match whether the user has clicked on the right area 
    const fileName= props.level;
    const isMounted = useIsMounted();
    const docRef = doc(db, "coordinates", fileName)
    const [coords, setCoords] = useState('')
    const [finish, setFinish] = useState(false);
    
    const navigate = useNavigate();
   
    function initialize(e){
        setCoords(e.coord)
    }
    function complete() {
        setFinish(!finish)
    }

    useEffect(()=> {
        console.log(finish)
    }, [finish])

    useEffect(()=> {
        if(finish) {
                console.log(props.time)
                console.log(Date.now()-props.time )
             
            navigate('/scores')
        }
    }, [props,finish, navigate])

    useEffect(() => {
        async function singleRead(){
            try {
                await getDoc(docRef)
                .then((response) => {
                    let information = response.data();
                    return information;  
                }).then((json) => {
                    if (isMounted.current) {
                        initialize(json)
                    }
                })   
            } catch (e) {
                return e.message;
            } finally {
                
            }    
        }
         singleRead()
    }, [docRef, isMounted])



    return (
       <div className="game"> 
            <Timer setTime= {props.setTime} time={props.time} complete={finish} />
            <MapDisplay map={fileName} coordinates={coords} complete={complete}/>  
            
       </div>
    )
}

export default Map;