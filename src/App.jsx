

import { useState } from "react";
import { CORE_CONCEPTS } from "./data.jsx"
import { EXAMPLES } from "./data.jsx";
import Tabbutton from "./Components/tabbuttons.jsx";
import Header from "./Components/Header";
import Corecomponent from "./Components/Corecompo.jsx";




// app component
function App() {

  const [selectedTopics, setselectedTopics] = useState();

  function HandelSelect(SelectedItem) {
    setselectedTopics(SelectedItem)
    // console.log(SelectedItem);
  }
  console.log("app is rerendering");

  let tabContent = <p> Please select any topics from above</p>

  if (selectedTopics) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopics].title}</h3>
        <p>{EXAMPLES[selectedTopics].description}</p>
        <pre>
          <code> {EXAMPLES[selectedTopics].code}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
        
          {CORE_CONCEPTS.map((coreCompo) => (  <Corecomponent key={coreCompo.title} {...coreCompo} />))}
  
          

          </ul>
        </section>
        <section id="examples">
          <h2>Exapmles</h2>
          <menu>
            <Tabbutton isSelected={selectedTopics === "components"} onSelect={() => HandelSelect("components")}>Component</Tabbutton>
            <Tabbutton isSelected={selectedTopics === "jsx"} onSelect={() => HandelSelect("jsx")}>JSX</Tabbutton>
            <Tabbutton isSelected={selectedTopics === "props"} onSelect={() => HandelSelect("props")}>Props</Tabbutton>
            <Tabbutton isSelected={selectedTopics === "state"} onSelect={() => HandelSelect("state")}>State</Tabbutton>
          </menu>
          {tabContent}
  
        </section>

      </main>
    </div>
  );
}

export default App;
