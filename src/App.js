import "./style/App.css";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import useIntersection from "./components/useIntersection"
import {useRef, useState, useEffect} from "react"



function App() {
  const [page, setPage] = useState(1)
  const refOne = useRef(null)
  const refTwo = useRef(null)
  const refThree = useRef(null)
  const [ref, setRef] = useState(refOne)
  const reference = useRef(ref)

  console.log(reference.current)
  const scrollToPage = () => {
    // myRef.current.scrollIntoView()
  }

  console.log(useIntersection(reference, '0px'))

  useEffect(() => {

    if (page === 1) {
      refOne.current.scrollIntoView()
      setRef(refOne)
    } else if (page === 2) {
      refTwo.current.scrollIntoView()
      setRef(refTwo)
    } else if (page ===3) {
      refThree.current.scrollIntoView()
      setRef(refThree)
    }
  }, [page])

  return (
    <div id="app-wrapper">
      <section id ="section-one" ref ={refOne}className="snap-child" onClick={scrollToPage}>
        <Home
        setPage = {setPage}
        page = {page}
        />
      </section>
      <section id ="section-two" ref={refTwo} className="snap-child">
      <Projects/>
      </section>
      <section id ="section-three" ref ={refThree} className="snap-child">
      <Resume/>
      </section>
    </div>
  );
}

export default App;
