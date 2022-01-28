function HardModal (props){
   return(
    <div style= {{display: "flex", justifyContent: "space-around"}} onClick={props.handleClick}>
    <input
      type="image"
      name="level7"
      src="./images/hard01.jpg"
      height="240px"
      width="380px"
      value="hard01"
      alt="map 7"
    />
    <input
      type="image"
      name="level8"
      src="./images/hard02.jpg"
      height="240px"
      width="380px"
      value="hard02"
      alt="map 8"
    />
    <input
      type="image"
      name="level9"
      src="./images/hard03.jpg"
      height="240px"
      width="380px"
      value="hard03"
      alt="map 9"
    />
  </div>
   )
}


export default HardModal