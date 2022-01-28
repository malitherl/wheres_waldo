import Nav from "./Nav";

export default function Body(){

    return(
        <div className="maintext">
       
            <div className="bodyText">
           
                <h1>Where's Waldo?</h1>
                <p><b>Objective:</b> Find Waldo in the quickest amount of time possible!</p>
                <p>Hit the 'Play' link above and choose from one of the nine maps.</p> 
                <p>They are ordered from the easiest difficult to the hardest, with each level having three maps to choose from.</p>
                <Nav/>
            </div>
            <img src="./images/hard03.jpg" alt="the third map of the hardest difficulty" className="bg"></img>
        </div>
    )


}