import TabButton from './TabButton';
import { useState } from 'react';
import { EXAMPLES } from '../data';
import Section from './Section';
import Tabs from './Tabs';



export default function Examples(){
    const [selectedTopic,setSelectedTopic]=useState('');

    function handleSelect(selectedButton){
      //selectedButton=>'components','jsx,'props','state'
     //  tabContent=selectedButton;//no need to write this
     setSelectedTopic(selectedButton);
     console.log(setSelectedTopic);
    }
   
      // let tabContent=<p>please select a topic</p>;//no need to write this (fourth way for conditionally rendering data)
   
     //  if(selectedTopic){
       //  tabContent=<div id='tab-content'>
     //   <h3>{EXAMPLES[selectedTopic].title}</h3>
     //   <p>{EXAMPLES[selectedTopic].description}</p>
     //   <pre>
     //     <code>
     //     {EXAMPLES[selectedTopic].code}
     //     </code>
     //   </pre>
     // </div>
     // }
   
     // see write {tabcontent} over there down after </menu>   
    return(
        <Section title={Examples} id="examples">
                {/* <h2>Examples</h2> */}
                <Tabs ButtonContainer='menu'  //pass if we dont want to store in variable
                // <Tabs buttonContainer='menu'  (pass if we want to store in some variable
                buttons={   //like this we can pass those custom TabButtons as an values
                <>
              <TabButton isSelected={selectedTopic === 'components'} onClick={()=>handleSelect('components')}>Components</TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'} onClick={()=>handleSelect('jsx')}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onClick={()=>handleSelect('props')}>Props</TabButton>
              <TabButton isSelected={selectedTopic === 'state'} onClick={()=>handleSelect('state')}>States</TabButton>
              </>
              }>
                { !selectedTopic ? <p>Please Select a Topic</p> : null} {/* <---- this is called ternary operator*/}
              {selectedTopic ?  <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                  {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div> : null}
                </Tabs>
          </Section>
    );
}