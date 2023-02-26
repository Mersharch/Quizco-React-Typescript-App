import {useState} from 'react';
import EndPage from './Screens/EndPage';
import Questions from './Screens/Questions';
import StartPage from './Screens/StartPage';
// import './App.css';

function App() {

  const [showPage, setshowPage] = useState<string>('Start')
  const [choices, setchoices] = useState<string[]>([])



  return (
    <div className="m-0 bg-slate-300 w-full flex flex-col items-center justify-center h-[100vh]">
      {/* I WILL USE REACT ROUTER DOM LATER ON */}
      { 
        showPage === 'Start' && 
        (<StartPage
          setshowPage={setshowPage}
        />)
        
      }

      { 
        showPage === 'Questions' && (<Questions setshowPage={setshowPage} choices={choices} setchoices={setchoices}/>)
        
      }

      { 
        showPage === 'End' && (<EndPage setshowPage={setshowPage} choices={choices}/>)
        
      }



      
    </div>
  );
}

export default App;
