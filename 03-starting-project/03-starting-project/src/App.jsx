import Header from './components/Header/Header';
// import CoreConcept from './components/CoreConcept/CoreConcept';
// import { CORE_CONCEPTS } from './data';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';
// import TabButton from './components/TabButton';
// import { useState } from 'react';
// import { EXAMPLES } from './data';


function App() {
 
  return (
        <>     {/* <div> <---- instead of this we will use either 'Fragement' component or just wrap all the components under this <> </> for removing unncessary elements*/}
       <Header /> 
      <main>
         <CoreConcepts />
         <Examples />
      </main>
      </> // </div> 
  );
}


export default App;
