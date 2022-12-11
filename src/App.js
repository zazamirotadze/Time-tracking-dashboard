import data from "./data.json";
import DashboardSquare from "./DashboardSquare";
import { useState } from "react";
function App() {
  
  const [timeFrame, setimeFrame] = useState("weekly")


  const renderSquares = data.map(element => {
    let Timeframes = element.timeframes.weekly
    if(timeFrame==="daily"){
      Timeframes = element.timeframes.daily
    } else if(timeFrame==="monthly"){
      Timeframes = element.timeframes.monthly
    } else if(timeFrame==="weekly"){
      Timeframes = element.timeframes.weekly
    }
    return (
      <DashboardSquare 
        key={element.title} 
        title={element.title} 
        src={element.src}
        elipsisSrc="./images/icon-ellipsis.svg"
        timeframes={ Timeframes}
      /> )
    })
  return (
    <div className="App">
      <div className="page" >
        <div className="page-Nav">
          <div className="page-Nav-01">
            <img src="./images/image-jeremy.png" alt="profile-img" ></img>
            <div className="page-Nav-01-words-div">
              <p>Report for</p>
              <h2>Jeremy Robson</h2>
            </div >
          </div>
          <div className ="page-Nav-buttons-div">
            <button onClick={()=> setimeFrame("daily")} className={ timeFrame==="daily"?"brightColor":undefined}>Daily</button>
            <button onClick={()=> setimeFrame("weekly")} className={ timeFrame==="weekly"?"brightColor":undefined} >Weekly</button>
            <button onClick={()=> setimeFrame("monthly")} className={ timeFrame==="monthly"?"brightColor":undefined}>Monthly</button>
          </div>
        </div>
        <div className="page-squares-div">
            {renderSquares}
        </div>
      </div>
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="/">Zaza Mirotadze</a>.
    </div>
    </div>
  );
}

export default App;
