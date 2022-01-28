import {  useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import EasyModal from "./EasyModal";
import HardModal from "./HardModal";
import MediumModal from "./MediumModal";
function Selection(props) {
  //we can include previews of the images
  const [isEasyModalOpen, setEasyModalOpen] = useState(false);
  const [isMediumModalOpen, setMediumModalOpen] = useState(false);
  const [isHardModalOpen, setHardModalOpen] = useState(false);
  const navigate = useNavigate();

  function handleClick(event) {
    props.setLevel(event.target.value)
    
    navigate('/game')
  }
  
  return (

    <div className="maintext">
  
    <div className="selectionText">
    <p><i>Click on the level that you'd like play on and select what map you'd like to solve.</i></p> 
      <p
        onClick={() => {
          setEasyModalOpen(true);
          setMediumModalOpen(false);
          setHardModalOpen(false);
        }}
      >
        <b>Easy</b>
      </p>
      {isEasyModalOpen && <EasyModal handleClick={handleClick}/>}
      <p
        onClick={() => {
          setEasyModalOpen(false);
          setMediumModalOpen(true);
          setHardModalOpen(false);
        }}
      >
       <b>Medium</b> 
      </p>
      {isMediumModalOpen && <MediumModal handleClick={handleClick} />}
      <p
        onClick={() => {
          setEasyModalOpen(false);
          setMediumModalOpen(false);
          setHardModalOpen(true);
        }}
      >
       <b>Hard</b> 
      </p>
      {isHardModalOpen && <HardModal handleClick={handleClick} />}
      <Link to="/" className='Nav-link'>Cancel</Link>
    </div>
    
    <img src="./images/hard03.jpg" alt="the third map of the hardest difficulty" className="bg"></img>
    </div>
  );
}

export default Selection;
