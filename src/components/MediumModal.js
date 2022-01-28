
function MediumModal(props){
    return (
        <div style= {{display: "flex", justifyContent: "space-around"}} onClick={props.handleClick}>
            <input
            type="image"
            name="level4"
            src="./images/medium01.jpg"
            height="240px"
            width="380px"
            value="medium01"
            alt="map 4"
            />
            <input
            type="image"
            name="level5"
            src="./images/medium02.jpg"
            height="240px"
            width="380px"
            value="medium02"
            alt="map 5"
            />
            <input
            type="image"
            name="level6"
            src="../images/medium03.jpg"
            height="240px"
            width="380px"
            value="medium03"
            alt="map 6"
            />
        </div>
    )
}


export default MediumModal;