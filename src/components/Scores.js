
import ScoreModal from "./ScoreModal";
import Nav from "./Nav";

export default function Scores(props) {

    return(

        <div className="container"> 
          
                <div className="maintext">
                    <div className="scoreText"> 
                            <ScoreModal time={props.time} level={props.level}/>
                            <Nav/>
                    </div>   
                </div>
            <div className="a"><img src="./images/hard03.jpg" alt="the third map of the hardest difficulty" className="bg"></img></div>
        </div>
    )
};


