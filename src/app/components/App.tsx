import React from 'react';
import '../styles/ui.css';
import Homepage from '../../components/Homepage';
import {dispatch, handleEvent} from '../../../src/plugin/uiMessageHandler';
import PropSetting from '../../components/PropSetting';


function App() {


  const [onPage, setOnPage] = React.useState("home")



  React.useEffect(()=> {
    requestAnimationFrame(() => {

        dispatch('updateUISize', { width:document.body.scrollWidth, height:document.getElementById('ContentWrap').offsetHeight})
      });
      handleEvent("pageSwitch",(data)=>{
        setOnPage(data)
      })

},[])

  return (
    <div>
      {onPage === "home" ?  <Homepage   /> : 
      <PropSetting  />}

    </div>
  );
}

export default App;
