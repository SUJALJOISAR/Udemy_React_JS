import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept/CoreConcept';

export default function CoreConcepts(){
    return(
        <section id="core-concepts"> {/* see this id="core-concepts we have use because there is already designed in css file" */}
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/> */}
            {/* <CoreConcept {...CORE_CONCEPTS[1]}/>  we can also use the spread off operator if the props name and the properties in actual component function are same*/}
            {/* <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/> */}
            {/* <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/> */}
            {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcept key={conceptItem.title}  {...conceptItem}/>))}
          </ul>
        </section>
    );
}