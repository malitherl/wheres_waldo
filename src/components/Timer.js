import React, {useEffect, useState}  from 'react';


function Timer(props) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [active, setActive]   = useState(true);
    //we destructed props.setTime here so that when we pass it as a dependency. it isn't looking at *all* props which could cause an infinite loop. 
    const {setTime} = props;
    useEffect(() => {
        setTime(Date.now()) 
    }, [setTime])

    useEffect(() => {

        let interval = null;
       
        if(active && !props.complete) {
            interval = setInterval(()=> {
                if(seconds < 59) {
                    setSeconds(seconds => seconds +1)
                } else {
                    setSeconds(seconds => seconds-seconds)
                    setMinutes(minutes => minutes + 1)
                }
            }, 1000)
        } else if (!active && seconds !== 0) {
            clearInterval(interval)
        } else if(props.complete) {
            setActive(!active)
            props.setTime(prevState=> Date.now()-prevState)
        }
        return () => clearInterval(interval)
    }, [active, minutes, props, seconds])

    return(
        <div className="app" >
            <div className="timer" >
               <h3>{minutes<10 ? "0"+minutes : minutes}:{ seconds<10 ? "0"+seconds : seconds}</h3> 
            </div>
        </div>
    )
}

export default Timer