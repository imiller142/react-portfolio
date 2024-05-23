import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './scss/output.css'
import Navigation from './components/Nav/Nav';
import { useState } from 'react';


function App() {
  const [categories] = useState([
    {
      name: "about me",
      description: "a description of who I am"
    },
    {
      name: "portfolio",
      description: "A portfolio of git hub projects"
    },
    {
      name: "contact",
      description: "contact info about me"
    },
    {
      name: "resume",
      desciprtion: "copy of resume"
    }
  ])

 const [currentCategory, setCurrentCategory]  = useState(categories[0])

  return (
    <main>
          <Navigation
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          ></Navigation>``
    </main>
  );
}

export default App;
