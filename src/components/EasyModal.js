
function EasyModal(props){
    return(
        <div style= {{display: "flex", justifyContent: "space-around"}}onClick={props.handleClick}>
        <input
          type="image"
          name="level1"
          src="./images/easy01.jpg"
          height="240px"
          width="380px"
          value="easy01"
          alt="map 1"
        />
        <input
          type="image"
          name="level2"
          src="./images/easy02.jpg"
          height="240px"
          width="380px"
          value="easy02"
          alt="map 2"
        />
        <input
          type="image"
          name="level3"
          src="./images/easy03.jpg"
          height="240px"
          width="380px"
          value="easy03"
          alt="map 3"
        />
      </div>
    )
}

export default EasyModal;