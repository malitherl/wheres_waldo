import Map from './components/Map';
import Selection from './components/Selection';
import Scores from './components/Scores';
import { useEffect, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Body from './components/Body';
function App() {

  const [level, setLevel] = useState('');
  const [time, setTime]= useState(0); 
  useEffect(() => {
    console.log(level)
  }, [level]) 

  return (
      <div>
          <Routes>
              <Route path="/play"      element={<Selection setLevel={setLevel} level={level}/> }></Route>
              <Route path="/scores"    element={<Scores level={level} time={time}/>}></Route>
              <Route path="/game"      element={<Map time={time} setTime={setTime} level={level}/>}></Route>
              <Route path="/"          element={<Body/>}></Route>
          </Routes>
      </div>
  );
}

export default App;
//so today i need to get this selection panel working
//i need a background modal and a selection modal for this 