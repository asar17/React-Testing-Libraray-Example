import React from 'react';
import Greet from './components/greet/greet';
import Application from './components/application/application';
import Skills from './components/skills/skills';
import NotFoundBtn from './components/notFoundBtn/notFoundBtn';
import Counter from './components/counter/counter';




const App = () => {
  return(
        <div>
          {/* <Greet/> */}
          {/* <Application/> */}
          {/* <Skills/> */}
          {/* <NotFoundBtn items={['athar','mohamed','elhaidary']}/> */}
          <Counter/>
        </div>
      )
};

export default App;
