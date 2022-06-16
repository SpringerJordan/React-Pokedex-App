import './App.css';
//import card from "@mui/material";
import {Typography} from '@mui/material';
import Cards from './components/Card'




function App() {
  return (
    <div className="App">
      A and J's React Pokedex App

      <Typography variant="h4 ">
        Pokedex App
      </Typography>
      
      <Cards></Cards>
      
      {/* <Cards></Cards> */}


    </div>
    
  );
}


export default App;
