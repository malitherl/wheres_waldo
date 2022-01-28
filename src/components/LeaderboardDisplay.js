
export default function LeaderboardDisplay(props) {

    let informationArray = []
    let easyDiv= []
    let mediumDiv = [] 
    let hardDiv=[]

    Object.values(props.info).forEach(value => {informationArray.push(value)})
    informationArray.forEach(e=> {
        if(e.level.includes("easy")){
            easyDiv.push(e)
        } else if (e.level.includes("medium")){
            mediumDiv.push(e)
        } else if (e.level.includes("hard")){
            hardDiv.push(e)
        }
    })

    function displayDiv(array){
        let divArray=[]
        array.sort(function(a,b) {return a.time - b.time})
        array.forEach(val=> divArray.push(<tr key={val.name}><td>{val.name}</td><td>{val.level}</td><td>{val.time/1000} seconds</td></tr> ))
        return divArray
    }

    return (
        <div className="leaderboard">
            <h3 color="#282c34">Top Scores</h3>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Level</th>
                    <th>Time</th>
                </tr>
                {displayDiv(easyDiv)}
                {displayDiv(mediumDiv)}
                {displayDiv(hardDiv)}
            </tbody>
            </table>
        </div>   
    )

}