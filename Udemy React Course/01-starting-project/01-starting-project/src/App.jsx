import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';//this is for props concept remaining data filling

const reactWords=['Fundamental','Core','Crucial'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}

function Header(){

  const expression=reactWords[genRandomInt(2)];

  return(
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {/* Fundamental React concepts you will need for almost any app you are
      going to build! */}
      {expression} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );
}

// concept of props
function CoreConcept(props){
  return (
    <li>
      <img src={props.image} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
//we can also use destructuring in function parameters
// function CoreConcept({title,description,image}){
//   return (
//     <li>
//       <img src={image} alt="..." />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }




function App() {
  return (
    <div>
       <Header /> {/* using that above component in app function*/}
      {/* <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header> */}
      <main>
        <section id="core-concepts"> {/* see this id="core-concepts we have use because there is already designed in css file" */}
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/> {/* we can also use the spread off operator if the props name and the properties in actual component function are same*/}
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
