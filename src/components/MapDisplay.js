
function MapDisplay(props){
    
    const path = './images/' + props.map + '.jpg'
    
    return (
        <div>
            <img alt="current map" useMap="#img" src={path}/>
            <map name="img">
                 <area shape="rect" alt="character" coords={props.coordinates.toString()} onClick={()=>{props.complete()}} />
            </map>               
        </div>
    )
}

export default MapDisplay;