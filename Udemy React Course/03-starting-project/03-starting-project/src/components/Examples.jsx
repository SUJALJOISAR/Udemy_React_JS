import TabButton from './TabButton';
import { useState } from 'react';
import { EXAMPLES } from '../data';
import Section from './Section';


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
              <menu>
                    {/* <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>  see here we want list of buttons but here we can make component as there is repetition*/}
              <TabButton isSelected={selectedTopic === 'components'} onClick={()=>handleSelect('components')}>Components</TabButton>
              {/* we can also use the above statement like this :- 
               <TabButton label="components"><TabButton /> we have just use "label" instead of writting inside the opening and closing of component function
              */}
              <TabButton isSelected={selectedTopic === 'jsx'} onClick={()=>handleSelect('jsx')}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onClick={()=>handleSelect('props')}>Props</TabButton>
              <TabButton isSelected={selectedTopic === 'state'} onClick={()=>handleSelect('state')}>States</TabButton>
              </menu> {/*tabContent */} {/* for rendering data in fourth way*/}
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
          </Section>
    );
}