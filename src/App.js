import logo from './logo.svg';


import Navigation from './components/Nav';
import Resume from './components/Resume';
import { useState } from 'react';
import About from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  const [categories] = useState([
    {
      name: "About Me",
      description: "a description of who I am"
    },
    {
      name: "Portfolio",
      description: "A portfolio of git hub projects"
    },
    {
      name: "Contact",
      description: "contact info about me"
    },
    {
      name: "Resume",
      desciprtion: "copy of resume"
    }
  ])



 const [currentCategory, setCurrentCategory]  = useState(categories[0])



  return (
    <div className='h-100'>
          <Navigation
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          ></Navigation>
          <main className='h-100'>
            {currentCategory == categories[0] &&
            <>
              <About></About>
            </>
            }
            
            {currentCategory == categories[1] &&
            <>
              <Portfolio></Portfolio>
            </>
            }

            {currentCategory == categories[2] &&
            <>
              <Contact></Contact>
            </>
            }

            {currentCategory == categories[3] &&
            <>
              <Resume></Resume>
            </>
            }

          </main>
    </div>
  );
}

export default App;
