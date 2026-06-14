import { createContext } from "react"
import Home from "../pages/Home";
import Q296 from "../ch7/pages/Q296";
import Q297 from "../ch7/pages/Q297";
import Q298 from "../ch7/pages/Q298";
import Q299 from "../ch7/pages/Q299";
import Q300 from "../ch7/pages/Q300";
import Q301 from "../ch7/pages/Q301";
import Q302 from "../ch7/pages/Q302";
import Q303 from "../ch7/pages/Q303";
import Q304 from "../ch7/pages/Q304";
import Q305 from "../ch7/pages/Q305";
import Q306 from "../ch7/pages/Q306";
import Q307 from "../ch7/pages/Q307";
import Q308 from "../ch7/pages/Q308";
import Q309 from "../ch7/pages/Q309";
import Q310 from "../ch7/pages/Q310";
import Q311 from "../ch7/pages/Q311";
import Q312 from "../ch7/pages/Q312";
import Q313 from "../ch7/pages/Q313";
import Q314 from "../ch7/pages/Q314";
import Q315 from "../ch7/pages/Q315";
import Q316 from "../ch7/pages/Q316";
import Q317 from "../ch7/pages/Q317";
import Q318 from "../ch7/pages/Q318";
import Q319 from "../ch7/pages/Q319";
import Q320 from "../ch7/pages/Q320";
import Q356 from "../ch8/pages/Q356";
import Q357 from "../ch8/pages/Q357";
import Q358 from "../ch8/pages/Q358";
import Q359 from "../ch8/pages/Q359";
import Q360 from "../ch8/pages/Q360";
import Q361 from "../ch8/pages/Q361";
import Q362 from "../ch8/pages/Q362";
import Q363 from "../ch8/pages/Q363";
import Q364 from "../ch8/pages/Q364";
import Q365 from "../ch8/pages/Q365";
import Q366 from "../ch8/pages/Q366";
import Q367 from "../ch8/pages/Q367";
import Q368 from "../ch8/pages/Q368";
import Q369 from "../ch8/pages/Q369";
import Q370 from "../ch8/pages/Q370";
import Q371 from "../ch8/pages/Q371";
import Q372 from "../ch8/pages/Q372";
import Q373 from "../ch8/pages/Q373";
import Q374 from "../ch8/pages/Q374";
import Q375 from "../ch8/pages/Q375";
import Q376 from "../ch8/pages/Q376";
import Q377 from "../ch8/pages/Q377";
import Q378 from "../ch8/pages/Q378";
import Q379 from "../ch8/pages/Q379";
import Q380 from "../ch8/pages/Q380";
import Q381 from "../ch8/pages/Q381";
import Q388 from "../ch8/pages/Q388";
import Q387 from "../ch8/pages/Q387";
import Q386 from "../ch8/pages/Q386";
import Q385 from "../ch8/pages/Q385";
import Q384 from "../ch8/pages/Q384";
import Q383 from "../ch8/pages/Q383";
import Q382 from "../ch8/pages/Q382";
export const Context = createContext()
const DataContext = (props) => {
    const dataset = [
        { name: "Q296", value: "296", path: "/q296", element: <Q296 />, chapter: "7" },
        { name: "Q297", value: "297", path: "/q297", element: <Q297 />, chapter: "7" },
        { name: "Q298", value: "298", path: "/q298", element: <Q298 />, chapter: "7" },
        { name: "Q299", value: "299", path: "/q299", element: <Q299 />, chapter: "7" },
        { name: "Q300", value: "300", path: "/q300", element: <Q300 />, chapter: "7" },
        { name: "Q301", value: "301", path: "/q301", element: <Q301 />, chapter: "7" },
        { name: "Q302", value: "302", path: "/q302", element: <Q302 />, chapter: "7" },
        { name: "Q303", value: "303", path: "/q303", element: <Q303 />, chapter: "7" },
        { name: "Q304", value: "304", path: "/q304", element: <Q304 />, chapter: "7" },
        { name: "Q305", value: "305", path: "/q305", element: <Q305 />, chapter: "7" },
        { name: "Q306", value: "306", path: "/q306", element: <Q306 />, chapter: "7" },
        { name: "Q307", value: "307", path: "/q307", element: <Q307 />, chapter: "7" },
        { name: "Q308", value: "308", path: "/q308", element: <Q308 />, chapter: "7" },
        { name: "Q309", value: "309", path: "/q309", element: <Q309 />, chapter: "7" },
        { name: "Q310", value: "310", path: "/q310", element: <Q310 />, chapter: "7" },
        { name: "Q311", value: "311", path: "/q311", element: <Q311 />, chapter: "7" },
        { name: "Q312", value: "312", path: "/q312", element: <Q312 />, chapter: "7" },
        { name: "Q313", value: "313", path: "/q313", element: <Q313 />, chapter: "7" },
        { name: "Q314", value: "314", path: "/q314", element: <Q314 />, chapter: "7" },
        { name: "Q315", value: "315", path: "/q315", element: <Q315 />, chapter: "7" },
        { name: "Q316", value: "316", path: "/q316", element: <Q316 />, chapter: "7" },
        { name: "Q317", value: "317", path: "/q317", element: <Q317 />, chapter: "7" },
        { name: "Q318", value: "318", path: "/q318", element: <Q318 />, chapter: "7" },
        { name: "Q319", value: "319", path: "/q319", element: <Q319 />, chapter: "7" },
        { name: "Q320", value: "320", path: "/q320", element: <Q320 />, chapter: "7" },
        { name: "Q356", value: "356", path: "/q356", element: <Q356 />, chapter: "8" },
        { name: "Q357", value: "357", path: "/q357", element: <Q357 />, chapter: "8" },
        { name: "Q358", value: "358", path: "/q358", element: <Q358 />, chapter: "8" },
        { name: "Q359", value: "359", path: "/q359", element: <Q359 />, chapter: "8" },
        { name: "Q360", value: "360", path: "/q360", element: <Q360 />, chapter: "8" },
        { name: "Q361", value: "361", path: "/q361", element: <Q361 />, chapter: "8" },
        { name: "Q362", value: "362", path: "/q362", element: <Q362 />, chapter: "8" },
        { name: "Q363", value: "363", path: "/q363", element: <Q363 />, chapter: "8" },
        { name: "Q364", value: "364", path: "/q364", element: <Q364 />, chapter: "8" },
        { name: "Q365", value: "365", path: "/q365", element: <Q365 />, chapter: "8" },
        { name: "Q366", value: "366", path: "/q366", element: <Q366 />, chapter: "8" },
        { name: "Q367", value: "367", path: "/q367", element: <Q367 />, chapter: "8" },
        { name: "Q368", value: "368", path: "/q368", element: <Q368 />, chapter: "8" },
        { name: "Q369", value: "369", path: "/q369", element: <Q369 />, chapter: "8" },
        { name: "Q370", value: "370", path: "/q370", element: <Q370 />, chapter: "8" },
        { name: "Q371", value: "371", path: "/q371", element: <Q371 />, chapter: "8" },
        { name: "Q372", value: "372", path: "/q372", element: <Q372 />, chapter: "8" },
        { name: "Q373", value: "373", path: "/q373", element: <Q373 />, chapter: "8" },
        { name: "Q374", value: "374", path: "/q374", element: <Q374 />, chapter: "8" },
        { name: "Q375", value: "375", path: "/q375", element: <Q375 />, chapter: "8" },
        { name: "Q376", value: "376", path: "/q376", element: <Q376 />, chapter: "8" },
        { name: "Q377", value: "377", path: "/q377", element: <Q377 />, chapter: "8" },
        { name: "Q378", value: "378", path: "/q378", element: <Q378 />, chapter: "8" },
        { name: "Q379", value: "379", path: "/q379", element: <Q379 />, chapter: "8" },
        { name: "Q380", value: "380", path: "/q380", element: <Q380 />, chapter: "8" },
        { name: "Q381", value: "381", path: "/q381", element: <Q381 />, chapter: "8" },
        { name: "Q382", value: "382", path: "/q382", element: <Q382 />, chapter: "8" },
        { name: "Q383", value: "383", path: "/q383", element: <Q383 />, chapter: "8" },
        { name: "Q384", value: "384", path: "/q384", element: <Q384 />, chapter: "8" },
        { name: "Q385", value: "385", path: "/q385", element: <Q385 />, chapter: "8" },
        { name: "Q386", value: "386", path: "/q386", element: <Q386 />, chapter: "8" },
        { name: "Q387", value: "387", path: "/q387", element: <Q387 />, chapter: "8" },
        { name: "Q388", value: "388", path: "/q388", element: <Q388 />, chapter: "8" },
    ]
    const codebase = [
        {
            que: "q296", file: [{
                title: "main.jsx", code:`import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).
render(
    <App/>
)`}, {
                title: "App.jsx", code:`import React from 'react'

const App = () => {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
}

export default App`}]
        },
        {
            que: "q297", file: [{
                title: "main.jsx", code:`import { createRoot } from 'react-dom/client'
import './index.css'
import Parent from './Parent.jsx'

createRoot(document.getElementById('root')).
render(
    <Parent/>
)`}, {
                title: "Child.jsx", code:`const Child = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default Child`},
            {
                title: "Parent.jsx", code:`import Child from "./Child.jsx"
const App = () => {
    return (
        <div>
            <Child name="Child1" description="this is child1."/>
        </div>
    )
}

export default Parent`}
            ]
        },
        {
            que: "q298", file: [{
                title: "main.jsx", code:`import { createRoot } from 'react-dom/client'
import './index.css'
import Garrige from './Garrige.jsx'

createRoot(document.getElementById('root')).
render(
    <Garrige/>
)`}, {
                title: "Car.jsx", code: `import React from 'react'

const Car = (props) => {
    return (
        <div>
            <h1>{props.carbrand}</h1>
            <h1>{props.carmodel}</h1>
        </div>
    )
}

export default Car`}, {
                title: "Garrige.jsx", code:`import React from 'react'
import Car from "./Car.jsx"

const Garrige = () => {
    return (
        <div>
            <Car carbrand="xyz" carmodel="ABC" />
        </div>
    )
}

export default Garrige`}]
        },
        {
            que: "q299", file: [{
                title: "main.jsx", code:`import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).
render(
    <App/>
)`}, {
                title: "App.jsx", code:`import React from 'react'

const App = () => {
    return (
        <div>
            <Button type="button" onClick={()=>alert("Welcome to LJU")}>Click Me</Button>
        </div>
    )
}

export default App`}]
        },
        {
            que: "q300", file: [{
                title: "main.jsx", code: `import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).
render(
    <App/>
)`}, {
                title: "App.jsx", code: `import React from 'react'

const App = () => {
    return (
        <div>
            <input type="text" placeholder="Type Anything." onChange={(e)=>console.log(e.target.value)}/>
        </div>
    )
}

export default App`}]
        }, {
            que: "q301", file: [{
                title: "main.jsx", code:`import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).
render(
    <App/>
)`}, {
                title: "App.jsx", code:`import React from 'react'

const App = () => {
    return (
        <div>
            <Button type="button" onDoubleClick={()=>alert("Welcome to lju")}>Click Me</Button>
        </div>
    )
}

export default App`}]
        },
        {
            que: "q302", file: [{
                title: "Main.js", code:`import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Shop from './Shop';
import Nopage from './Nopage';

function Main() {
    const links = [
        {name:"Home",href:"/"},
        {name:"Shop Page",href:"/shop"},
        {name:"Contact",href:"/contact"}
    ]
  return (
    <>
        <nav className="flex items-center justify-between w-full h-15 !px-9">
            <h1 className="text-2xl font-bold">Kishan Patel</h1>
            <div className="flex h-full items-center justify-center gap-9">
                {links.map((link,idx)=>{
                    return (
                        <Link className="text-xl" to={link.href}>{link.name}</Link>
                    )
                })}
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="*" element={<Nopage />}/>
        </Routes>
    </>
  )
}

export default Main`}, {
                title: "Home.js", code:`import React from 'react'

function Home() {
  return (
    <div>Home</div>
  )
}

export default Home`}, {
                title: "Shop.js", code:`import React from 'react'

function Shop() {
  return (
    <div>Shop</div>
  )
}

export default Shop`}, {
                title: "Contact.js", code:`import React from 'react'

function Contact() {
  return (
    <div>Contact</div>
  )
}

export default Contact`}, {
                title: "Nopage.js", code:`import React from 'react'
import { Link } from 'react-router-dom';

function Nopage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link to="/">Home</Link>
    </div>
  )
}

export default Nopage`}]
        },
        {
            que: "q303", file: [{
                title: "main.jsx", code:`import { createRoot } from 'react-dom/client'
import './index.css'
import University from './University.jsx'

createRoot(document.getElementById('root')).
render(
    <University />
)`}, {
                title: "University.jsx", code:`import React from 'react'
import Student from "./Student.jsx"

const University = () => {
    const students = [
        {name:"Kishan Patel",rollno:1,markt1:30,markt2:40},
        {name:"Karan Trivedi",rollno:2,markt1:50,markt2:80},
        {name:"Manthan Sutariya",rollno:3,markt1:60,markt2:80},
        {name:"Godhani Uday",rollno:4,markt1:40,markt2:50},
        {name:"Trushangi Chapadia",rollno:5,markt1:40,markt2:60},
        {name:"Kavan Raval",rollno:6,markt1:10,markt2:10},
    ]
    return (
        <div>
            <Student data={students} />
        </div>
    )
}

export default University`}, {
                title: "Student.jsx", code:`import React from 'react'

const Student = (props) => {
    return (
        <table cellpadding="10px" cellspacing="0px" align="center">
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>RollNo.</th>
                <th>Mark (t1)</th>
                <th>Mark (t2)</th>
            </tr>
            {props.data.map((student,idx)=>{
                return (
                    <tr key={idx}>
                        <td>{idx+1}</td>
                        <td>{student.name}</td>
                        <td>{student.rollno}</td>
                        <td>{student.markt1}</td>
                        <td>{student.markt2}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default Student`}]
        },
        {
            que: "q304",
            file: [
                {
                    title: "Main.js", code:`import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function Main() {
    const links = [
        {name:"Home",href:"/"},
        {name:"About",href:"/about"}
    ]
  return (
    <>
        <nav className="flex items-center justify-between w-full h-15 !px-9">
            <h1 className="text-2xl font-bold">Kishan Patel</h1>
            <div className="flex h-full items-center justify-center gap-9">
                {links.map((link,idx)=>{
                    return (
                        <Link className="text-xl" to={link.href}>{link.name}</Link>
                    )
                })}
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
    </>
  )
}

export default Main`},
                {
                    title: "Home.js", code:`import React from 'react'

function Home() {
  return (
    <div>
        <img src="https://imgs.search.brave.com/S1r-UhrJCjX4bCBLPbtch-vPgwup6Yf734M8-tkWGKY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcw/Mjc3MDUwNS9waG90/by9ibXctNTUwaS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Zl94SFRGUmtaUi1Q/U1ZiNVNFM0dWbVlx/NEg1TkljejFZaGdv/S3FfUWVXRT0" alt="" />
        <h1>LJ University</h1>
    </div>
  )
}

export default Home`},
                {
                    title: "About.js", code:`import React from 'react'

function About() {
  return (
    <ul className="!p-15">
        <li className="list-disc">CSE</li>
        <li className="list-disc">IT</li>
        <li className="list-disc">CE</li>
    </ul>
  )
}

export default About`},
            ]
        },
        {
            que: "q305",
            file: [
                {
                    title: "main.jsx", code:`import { createRoot } from 'react-dom/client'
import './index.css'
import Parent from './Parent.jsx'

createRoot(document.getElementById('root')).
render(
    <Parent/>
)`}
                , {
                    title: "Parent.jsx", code:`import Child from "./Child.jsx"
const Parent = () => {
    const array = [3,5,11,4,17,8,21,2,26,13,8];
    
    return (
        <div>
            <Child array={array}/>
        </div>
    )
}`},
                {
                    title: "Child.jsx", code:`import React from 'react'
const Child = (props) => {
    const filtered = props.array.filter(element=>{
        if(element >= 10){
            return true
        } else {
            return false
        }
    })
    return (
        <span>Remain Element: {filtered.join(",")}</span>
    )
}
    
export default Child`}
            ]
        },
        {
            que: "q306",
            file: [
                {
                    title: "main.jsx", code:`import { createRoot } from 'react-dom/client'
import './index.css'
import Parent from './Parent.jsx'

createRoot(document.getElementById('root')).
render(
    <Parent/>
)`},
                {
                    title: "Parent.jsx", code:`import React from 'react'
import Child from "./Child.jsx"

const Parent = () => {
    const styles = {
        color: "red",
        backgroundColor: "yellow",
        fontSize: "25px",
        fontStyle: "italic"
    }
    const title = "Lj Students"
    return (
        <Child styles={styles} para={title} />
    )
}
    
export default Parent`},
                {
                    title: "Child.jsx", code:`import React from 'react'

const Child = (props) => {
    <p style={props.styles}>{props.para}</p>
}
    
export default Child`}
            ]
        },
        {
            que: "q307",
            file: [
                {
                    title: "main.jsx", code:`import { createRoot } from 'react-dom/client'
import './index.css'
import Parent from './Parent.jsx'

createRoot(document.getElementById('root')).
render(
    <Parent/>
)`},
                {
                    title: "Parent.jsx", code:`import Child from "./Child.jsx"
    
const Parent = () => {
    const data = [
        {name:"Kishan Patel", age:18},
        {name:"Karan Trivedi", age:50},
        {name:"Godhani Uday", age:19},
        {name:"Trushangi Chapadia", age:30}
    ]
    return (
        <Child data={data}/>
    )
}
    
export default Parent`},
                {
                    title: "Child.jsx",
                    code:`import React from 'react'
    
const Child = (props) => {
const filtereddata = props.data.filter(elem=>elem.age<40)
    return (
        <div>
            {filtereddata.map((people,idx)=>{
                return (
                    <>
                        <h1>{people.name}</h1>
                        <h1>{people.age}</h1>
                    </>
                )
            })}
        </div>
    )
}
        
export default Child`
                }
            ]
        },
        {
            que: "q308",
            file: [

                {
                    title: "main.jsx", code:`import { createRoot } from 'react-dom/client'
import './index.css'
import Parent from './Parent.jsx'

createRoot(document.getElementById('root')).
render(
    <Parent/>
)`},
                {
                    title: "Parent.jsx", code:`import Child from "./Child.jsx"
    
const Parent = () => {
    const data = [
        {name:"Kishan Patel", branch:"IT"},
        {name:"Karan Trivedi", branch:"AIML"},
        {name:"Godhani Uday", branch:"CSE"},
        {name:"Trushangi Chapadia", branch:"CSE"}
    ]
    return (
        <Child data={data}/>
    )
}
    
export default Parent`},
                {
                    title: "Child.jsx",
                    code:`import React from 'react'
    
const Child = (props) => {
const filtereddata = props.data.filter(elem=>{
    const branch = elem.branch.toUpperCase();
    if(branch==="CSE"){
        return true
    }else {
        return false
    }
})
    return (
        <div>
            {filtereddata.map((student,idx)=>{
                return (
                    <>
                        <h1>{student.name}</h1>
                        <h1>{student.branch}</h1>
                    </>
                )
            })}
        </div>
    )
}
        
export default Child`
                }

            ]
        },
        {
            que: "q309",
            file: [
                {
                    title: "Main.js", code: `import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Ex1 from "./Ex1";
import Ex2 from "./Ex2";
import Ex3 from "./Ex3";

function Main() {
  return (
    <Router>
      <div>
        <h1>Routing Example</h1>

        <nav>
          <ul>
            <li>
              <Link to="/react">React JS</Link>
            </li>
            <li>
              <Link to="/node">Node JS</Link>
            </li>
            <li>
              <Link to="/express">Express JS</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/react" element={<Ex1 />} />
          <Route path="/node" element={<Ex2 />} />
          <Route path="/express" element={<Ex3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;`},
                {
                    title: "Ex1.js", code: `import React from "react";

function Ex1() {
  return (
    <div>
      <h1>React JS</h1>
    </div>
  );
}

export default Ex1;`},
                {
                    title: "Ex2.js", code: `import React from "react";

function Ex2() {
  return (
    <div>
      <h1>Node JS</h1>
    </div>
  );
}

export default Ex2;`},
                {
                    title: "Ex3.js", code: `import React from "react";

function Ex3() {
  return (
    <div>
      <h1>Express JS</h1>
    </div>
  );
}

export default Ex3;`},
                {
                    title: "App.js", code: `import React from "react";
import Main from "./Main";

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;`}
            ]
        },
        {
            que: "q310",
            file: [
                {
                    title: "App.js", code: `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import FoodItems from "./FoodItems";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>Navigation Menu</h2>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/food">Food Items</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<FoodItems />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;`},
                {
                    title: "Home.js", code: `function Home() {
  return (
    <div>
      <h1>
        <b>Welcome to LJU</b>
      </h1>
    </div>
  );
}

export default Home;`},
                {
                    title: "Product.js", code: `function Product(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{props.name}</h3>
      <p>Price: ₹{props.price}</p>
      <p>Description: {props.description}</p>
    </div>
  );
}

export default Product;`},
                {
                    title: "FoodItems.js", code: `import Product from "./Product";

function FoodItems() {
  return (
    <div>
      <h1>Food Items Details</h1>

      <Product
        name="Pizza"
        price="299"
        description="Cheesy and delicious pizza."
      />

      <Product
        name="Burger"
        price="149"
        description="Loaded burger with fresh vegetables."
      />

      <Product
        name="Pasta"
        price="199"
        description="Creamy white sauce pasta."
      />
    </div>
  );
}

export default FoodItems;`},
                {
                    title: "Contact.js", code: `function Contact() {
  return (
    <div style={{ color: "blue" }}>
      <h1>Contact Details</h1>
      <p>Email: info@lju.edu.in</p>
      <p>Phone: +91 9876543210</p>
      <p>Address: LJU Campus, Ahmedabad</p>
    </div>
  );
}

export default Contact;`},
            ]
        },
        {
            que: "q311",
            file: [
                {
                    title: "Product.js", code: `function Product(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        width: "250px",
      }}
    >
      <img
        src={props.pic}
        alt={props.name}
        width="200"
        height="150"
      />
      <h3>{props.name}</h3>
      <h4>Price: ₹{props.price}</h4>
    </div>
  );
}

export default Product;`},
                {
                    title: "App.js", code: `import Product from "./Product";

function App() {
  const products = [
    {
      pic: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      name: "Nike Shoes",
      price: 2999,
    },
    {
      pic: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      name: "Smart Watch",
      price: 4999,
    },
  ];

  return (
    <div>
      <h1>Product List</h1>

      {products.map((item, index) => (
        <Product
          key={index}
          pic={item.pic}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default App;`}
            ]
        },
        {
            que: "q312",
            file: [
                {
                    title: "App.js", code: `import Example2 from "./Example2";

function App() {
  return (
    <div>
      <Example2
        bgcolor="green"
        fontsize="50px"
        fontstyle="italic"
        texttransform="uppercase"
      />
    </div>
  );
}

export default App;`},
                {
                    title: "Example2.js", code: `function Example2(props) {
  return (
    <div>
      <h1
        style={{
          backgroundColor: props.bgcolor,
          fontSize: props.fontsize,
          fontStyle: props.fontstyle,
          textTransform: props.texttransform,
        }}
      >
        This is an React Application
      </h1>
    </div>
  );
}

export default Example2;`},
            ]
        },
        {
            que: "q313",
            file: [
                {
                    title: "App.js", code: `import Home from "./Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;`},
                {
                    title: "Home.js", code: `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./component/Login";
import Product from "./component/Product";
import Contact from "./component/Contact";
import About from "./component/About";

function Home() {
  return (
    <BrowserRouter>
      <div>
        <h1>Home Page</h1>

        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/product">Product</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Home;`},
                {
                    title: "component/Login.js", code: `function Login() {
  return (
    <div>
      <h2>Login Page</h2>

      <form>
        <label>Username:</label>
        <input type="text" />
        <br />
        <br />

        <label>Password:</label>
        <input type="password" />
        <br />
        <br />

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;`},
                {
                    title: "component/Product.js", code: `function Product() {
  return (
    <div>
      <h2>Product Page</h2>

      <ul>
        <li>Laptop</li>
        <li>Mobile</li>
        <li>Headphones</li>
      </ul>
    </div>
  );
}

export default Product;`},
                {
                    title: "component/Contact.js", code: `function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>

      <p>Email : info@example.com</p>
      <p>Phone : +91 9876543210</p>
    </div>
  );
}

export default Contact;`},
                {
                    title: "component/About.js", code: `function About() {
  return (
    <div>
      <h2>About Page</h2>

      <p>
        This is a React application demonstrating routing using
        React Router DOM.
      </p>
    </div>
  );
}

export default About;`},
            ]
        },
        {
            que: "q314",
            file: [
                {
                    title: "App.js", code: `import Component from "./Component";

function App() {
  const number = 5;

  return (
    <div>
      <h1>Table Example</h1>

      <Component value={number} />
    </div>
  );
}

export default App;`},
                {
                    title: "Component.js",
                    code: `function Component(props) {
  const num = props.value;

  console.log("Multiplication Table of " + num);

  for (let i = 1; i <= 10; i++) {
    console.log(\`\${num} x \${i} = \${num * i}\`);
  }

  return (
    <div>
      <h2>Check Console for Table of {num}</h2>
    </div>
  );
}

export default Component;`
                }
            ]
        },
        {
            que: "q315",
            file: [
                {
                    title: "App.js", code: `import Product from "./Product";

function App() {
  const products = [
    {
      title: "Laptop",
      image: "https://via.placeholder.com/200",
      price: 50000,
      description: "High-performance laptop for coding and gaming.",
    },
    {
      title: "Mobile",
      image: "https://via.placeholder.com/200",
      price: 25000,
      description: "Latest Android smartphone with great camera.",
    },
    {
      title: "Headphones",
      image: "https://via.placeholder.com/200",
      price: 3000,
      description: "Wireless headphones with noise cancellation.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
      }}
    >
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default App;`},
                {
                    title: "Product.js", code: `function Product(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <h2>{props.title}</h2>

      <img
        src={props.image}
        alt={props.title}
        width="200"
        height="150"
      />

      <h3>Price: ₹{props.price}</h3>

      <p>{props.description}</p>
    </div>
  );
}

export default Product;`}
            ]
        },
        {
            que: "q316",
            file: [
                {
                    title: "App.js", code: `import Person from "./Person";

function App() {
  const people = [
    { name: "Rahul", age: 25 },
    { name: "Amit", age: 45 },
    { name: "Priya", age: 30 },
    { name: "Neha", age: 50 },
    { name: "Karan", age: 35 },
  ];

  const filteredPeople = people.filter((person) => person.age < 40);

  return (
    <div>
      <h1>People with Age Less Than 40</h1>

      <Person data={filteredPeople} />
    </div>
  );
}

export default App;`},
                {
                    title: "Person.js", code: `function Person(props) {
  return (
    <div>
      {props.data.map((person, index) => (
        <h3 key={index}>{person.name}</h3>
      ))}
    </div>
  );
}

export default Person;`}
            ]
        },
        {
            que: "q317",
            file: [
                {
                    title: "App.js", code: `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>Navigation Menu</h2>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/product">Product</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;`},
                {
                    title: "Home.js", code: `function Home() {
  return (
    <div>
      <h1>
        <b>Welcome to LJU</b>
      </h1>
    </div>
  );
}

export default Home;`},
                {
                    title: "ProductInfo.js", code: `function ProductInfo(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{props.name}</h3>
      <p>Price: ₹{props.price}</p>
      <p>Description: {props.description}</p>
    </div>
  );
}

export default ProductInfo;`},
                {
                    title: "Product.js", code: `import ProductInfo from "./ProductInfo";

function Product() {
  return (
    <div>
      <h1>Product Details</h1>

      <ProductInfo
        name="Laptop"
        price="50000"
        description="High-performance laptop for students."
      />

      <ProductInfo
        name="Mobile"
        price="25000"
        description="Android smartphone with great camera."
      />

      <ProductInfo
        name="Headphones"
        price="3000"
        description="Wireless Bluetooth headphones."
      />
    </div>
  );
}

export default Product;`},
                {
                    title: "Contact.js", code: `function Contact() {
  return (
    <div style={{ color: "blue" }}>
      <h1>Contact Details</h1>

      <p>Email: info@lju.edu.in</p>
      <p>Phone: +91 9876543210</p>
      <p>Address: LJU Campus, Ahmedabad</p>
    </div>
  );
}

export default Contact;`},
            ]
        },
        {
            que: "q318",
            file: [
                {
                    title: "App.js", code: `import People from "./People";

function App() {
  const ages = [70, 83, 38, 65, 49, 94];

  const peopleAbove60 = ages.filter((age) => age > 60);

  return (
    <div>
      <h1>People Age Greater Than 60</h1>

      <People data={peopleAbove60} />
    </div>
  );
}

export default App;`},
                {
                    title: "People.js", code: `function People(props) {
  return (
    <div>
      <h2>Age List</h2>

      <ul>
        {props.data.map((age, index) => (
          <li key={index}>{age}</li>
        ))}
      </ul>

      <h3>Total Count: {props.data.length}</h3>
    </div>
  );
}

export default People;`}
            ]
        },
        {
            que: "q319",
            file: [
                {
                    title: "File1.js", code: `function File1(props) {
  const addToCart = () => {
    alert("Your Product is Added to cart!");
  };

  return (
    <div>
      <h2>Product Name: {props.productName}</h2>
      <h3>Price: ₹{props.price}</h3>

      <button onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default File1;`},
                {
                    title: "App.js", code: `import File1 from "./File1";

function App() {
  return (
    <div>
      <File1
        productName="Laptop"
        price="50000"
      />
    </div>
  );
}

export default App;`}
            ]
        },
        {
            que: "q320",
            file: [
                {
                    title: "Person.js", code: `function Person(props) {
const filteredPersons = props.data.filter((person) => person.city === "Ahmedabad");

  return (
    <div>
      <h2>Persons from Ahmedabad</h2>

      {filteredPersons.map((person) => (
        <div key={person.id}>
          <p>
            ID: {person.id}
            Name: {person.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Person;`}
            ]
        }
        ,
        {
            que: "q356",
            file: [
                {
                    title: "App.js", code: `import { useState } from "react";

function App() {
  const [text, setText] = useState("LJ University");
  const [color, setColor] = useState("red");
  const [show, setShow] = useState(true);

  const changeText = () => {
    setText((prev) =>
      prev === "LJ University"
        ? "Welcome students"
        : "LJ University"
    );
  };

  const changeColor = () => {
    setColor((prev) =>
      prev === "red" ? "blue" : "red"
    );
  };

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <h1 style={{ color: color }}>
        {text}
      </h1>

      {show && <h2>React Js Hooks</h2>}

      <button onClick={changeText}>
        Change Text
      </button>

      <button onDoubleClick={changeColor}>
        Change Color
      </button>

      <button onClick={toggleShow}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;`}
            ]
        }
        ,
        {
            que: "q357",
            file: [
                {
                    title: "App.js", code: `import { useState } from "react";

import img1 from "./image1.jpg";
import img2 from "./image2.jpg";

function App() {
  const [image, setImage] = useState(img1);

  const changeImage = () => {
    setImage((prev) =>
      prev === img1 ? img2 : img1
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Image Change Example</h1>

      <img
        src={image}
        alt="Product"
        width="300"
        height="200"
      />

      <br />
      <br />

      <button onClick={changeImage}>
        Change Image
      </button>
    </div>
  );
}

export default App;`}
            ]
        }
        ,
        {
            que: "q358",
            file: [
                {
                    title: "App.js", code: `import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Information</h1>

      <label>First Name:</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <br />
      <br />

      <label>Last Name:</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <br />
      <br />

      <h2>Entered Details</h2>

      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );
}

export default App;`}
            ]
        }
        ,
        {
            que: "q359",
            file: [
                {
                    title: "App.js", code: `import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    );

    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}

            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;`}
            ]
        }
        ,
        {
            que: "q360",
            file: [
                {
                    title: "App.js", code: `import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(true);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={toggleText}>
        {showText ? "Hide" : "Show"}
      </button>

      <br />
      <br />

      {showText && (
        <h2>Welcome to React JS</h2>
      )}
    </div>
  );
}

export default App;`}
            ]
        }
        ,
        {
            que: "q361",
            file: [
                {
                    title: "App.js", code: `import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(0);

  const addNumbers = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Addition of Two Numbers</h1>

      <label>Number 1: </label>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br />
      <br />

      <label>Number 2: </label>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br />
      <br />

      <p>Entered Number 1: {num1}</p>
      <p>Entered Number 2: {num2}</p>

      <button onClick={addNumbers}>
        Add
      </button>

      <h2>Addition = {sum}</h2>
    </div>
  );
}

export default App;`}
            ]
        }
        ,
        {
            que: "q362",
            file: [
                {
                    title: "App.js", code: `import { useState } from "react";

function App() {
  const [text, setText] = useState("Hello");

  const changeText = () => {
    setText(
      text === "Hello"
        ? "How are you?"
        : "Hello"
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{text}</h2>

      <button onClick={changeText}>
        Change Text
      </button>
    </div>
  );
}

export default App;`}
            ]
        }
        ,
        {
            que: "q363",
            file: [
                {
                    title: "App.js", code: `import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Count: {count}</h1>

      <button onClick={increaseCount}>
        Increase Count
      </button>
    </div>
  );
}

export default App;`}
            ]
        }
        ,
        {
            que: "q364",
            file: [
                {
                    title: "App.js", code: `import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>

      <button onClick={increment}>
        Increment
      </button>

      <button
        onClick={decrement}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;`}
            ]
        }
        ,
        {
            que: "q365",
            file: [
                {
                    title: "App.js", code: `import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Digital Clock</h1>

      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;`}
            ]
        }
        ,
        {
            que: "q366",
            file: [
                {
                    title: "Comp.js (Parent File)", code: `import React, { createContext } from "react";
import Comp1 from "./Comp1";

export const NumberContext = createContext();

function Comp() {
  const number1 = 10;
  const number2 = 20;

  return (
    <NumberContext.Provider
      value={{ number1, number2 }}
    >
      <Comp1 />
    </NumberContext.Provider>
  );
}

export default Comp;`},
                {
                    title: "Comp1.js", code: `import Comp2 from "./Comp2";

function Comp1() {
  return (
    <div>
      <Comp2 />
    </div>
  );
}

export default Comp1;`},
                {
                    title: "Comp2.js", code: `import Comp3 from "./Comp3";

function Comp2() {
  return (
    <div>
      <Comp3 />
    </div>
  );
}

export default Comp2;`},
                {
                    title: "Comp3.js", code: `import { useContext } from "react";
import { NumberContext } from "./Comp";

function Comp3() {
  const { number1, number2 } =
    useContext(NumberContext);

  const multiplication = number1 * number2;

  return (
    <div>
      <h2>Number 1 : {number1}</h2>
      <h2>Number 2 : {number2}</h2>
      <h1>
        Multiplication = {multiplication}
      </h1>
    </div>
  );
}

export default Comp3;`},
                {
                    title: "App.js", code: `import Comp from "./Comp";

function App() {
  return <Comp />;
}

export default App;`}
            ]
        }
        ,
        {
            que: "q367",
            file: [
                {
                    title: "Main.js (Parent File)", code: `import React, { createContext } from "react";
import Comp1 from "./Comp1";

export const UserContext = createContext();

function Main() {
  const username = "Kishan";

  return (
    <UserContext.Provider value={username}>
      <Comp1 />
    </UserContext.Provider>
  );
}

export default Main;`},
                {
                    title: "Comp1.js", code: `import Comp2 from "./Comp2";

function Comp1() {
  return (
    <div>
      <Comp2 />
    </div>
  );
}

export default Comp1;`},
                {
                    title: "Comp2.js", code: `import { useContext } from "react";
import { UserContext } from "./Main";

function Comp2() {
  const username = useContext(UserContext);

  return (
    <div>
      <h1 style={{ color: "blue" }}>
        Username: {username}
      </h1>
    </div>
  );
}

export default Comp2;`},
                {
                    title: "App.js", code: `import Main from "./Main";

function App() {
  return <Main />;
}

export default App;`}
            ]
        }
        ,
        {
            que: "q368",
            file: [
                {
                    title: "App.js",
                    code: `import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      \`Username: \${username}\\nAge: \${age}\\nEmail: \${email}\`
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sign Up Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Age:</label>
          <br />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;`
                }
            ]
        }
        ,
        {
            que: "q369",
            file: [
                {
                    title: "App.js",
                    code: `import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern =
      /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Invalid Email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    alert("Login Successful");
  };

  return (
    <div>
      <h1>Email & Password Validation</h1>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <br />

        <input
          type="text"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />

        <label>Password:</label>
        <br />

        <input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;`
                }
            ]
        }
        ,
        {
            que: "q370",
            file: [
                {
                    title: "App.js",
                    code: `import { useState } from "react";

function App() {
  const [size, setSize] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Selected Pizza Size: " + size);
  };

  return (
    <div>
      <h1>Select Pizza Size</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="radio"
          name="pizza"
          value="Small"
          onChange={(e) => setSize(e.target.value)}
        />
        Small

        <br />

        <input
          type="radio"
          name="pizza"
          value="Medium"
          onChange={(e) => setSize(e.target.value)}
        />
        Medium

        <br />

        <input
          type="radio"
          name="pizza"
          value="Large"
          onChange={(e) => setSize(e.target.value)}
        />
        Large

        <br />
        <br />

        <button type="submit">
          Submit
        </button>
      </form>

      <h2>Selected Size: {size}</h2>
    </div>
  );
}

export default App;`
                }
            ]
        }
        ,
        {
            que: "q371",
            file: [
                {
                    title: "App.js",
                    code: `import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <div>
      <h1>Counter Using useReducer</h1>

      <h2>Count: {state.count}</h2>

      <button
        onClick={() =>
          dispatch({ type: "increment" })
        }
      >
        Increment
      </button>

      <button
        onClick={() =>
          dispatch({ type: "decrement" })
        }
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;`
                }
            ]
        }
        ,
        {
            que: "q372",
            file: [
                {
                    title: "App.js",
                    code: `import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 5 };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 20,
  });

  return (
    <div>
      <h1>useReducer Example</h1>

      <h2>Value: {state.count}</h2>

      <button
        onClick={() =>
          dispatch({ type: "increment" })
        }
      >
        Click
      </button>
    </div>
  );
}

export default App;`
                }
            ]
        }
        ,
        {
            que: "q373",
            file: [
                {
                    title: "App.js",
                    code: `import { useState } from "react";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState("");

  const getJoke = async () => {
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );

      setJoke(
        response.data.setup +
          " " +
          response.data.punchline
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Random Joke Generator</h1>

      <button onClick={getJoke}>
        Generate Joke
      </button>

      <h3>{joke}</h3>
    </div>
  );
}

export default App;`
                }
            ]
        }
        ,
        {
            que: "q374",
            file: [
                {
                    title: "App.js",
                    code: `import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    examDate: "",
    examCenter: ""
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern =
      /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      alert("Invalid Email");
      return;
    }

    if (formData.password.length < 6) {
      alert(
        "Password must be at least 6 characters"
      );
      return;
    }

    setSubmitted(formData);
  };

  return (
    <div>
      <h1>Exam Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label>Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label>Gender:</label>
        <br />

        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        />
        Male

        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        />
        Female

        <br /><br />

        <label>Exam Date:</label>
        <br />
        <input
          type="date"
          name="examDate"
          value={formData.examDate}
          onChange={handleChange}
        />

        <br /><br />

        <label>Exam Center:</label>
        <br />
        <select
          name="examCenter"
          value={formData.examCenter}
          onChange={handleChange}
        >
          <option value="">
            Select Center
          </option>
          <option value="Ahmedabad">
            Ahmedabad
          </option>
          <option value="Surat">
            Surat
          </option>
          <option value="Rajkot">
            Rajkot
          </option>
        </select>

        <br /><br />

        <button type="submit">
          Submit
        </button>
      </form>

      {submitted && (
        <div>
          <h2>Submitted Values</h2>

          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Gender: {submitted.gender}</p>
          <p>Exam Date: {submitted.examDate}</p>
          <p>
            Exam Center: {submitted.examCenter}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;`
                }
            ]
        }
        ,
        {
            que: "q375",
            file: [
                {
                    title: "App.js",
                    code: `import { useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState("");

  const getFlower = async () => {
    try {
      const response = await axios.get(
        "https://flower.ceo/api/image/random"
      );

      setImage(response.data.sample);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Random Flower Image</h1>

      <button onClick={getFlower}>
        Get Flower Image
      </button>

      <br />
      <br />

      {image && (
        <img
          src={image}
          alt="Flower"
          width="300"
          height="300"
        />
      )}
    </div>
  );
}

export default App;`
                }
            ]
        }
        ,
        {
            que: "q376",
            file: [
                {
                    title: "App.js",
                    code: `import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Student Name: " + name +
      "\\nGender: " + gender +
      "\\nSubject: " + subject +
      "\\nComments: " + comments
    );
  };

  return (
    <div>
      <h1>Student Data Entry Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Student Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br /><br />

        <label>Gender:</label>
        <br />

        <input
          type="radio"
          name="gender"
          value="Boy"
          onChange={(e) =>
            setGender(e.target.value)
          }
        />
        Boy

        <input
          type="radio"
          name="gender"
          value="Girl"
          onChange={(e) =>
            setGender(e.target.value)
          }
        />
        Girl

        <br /><br />

        <label>Subject:</label>
        <br />

        <select
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
        >
          <option value="">
            Select Subject
          </option>
          <option value="English">
            English
          </option>
          <option value="Gujarati">
            Gujarati
          </option>
        </select>

        <br /><br />

        <label>Comments:</label>
        <br />

        <textarea
          rows="4"
          cols="30"
          value={comments}
          onChange={(e) =>
            setComments(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;`
                }
            ]
        }
        ,
        {
            que: "q377",
            file: [
                {
                    title: "SurveyForm.js",
                    code: `import { useState } from "react";

function SurveyForm() {
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Gender: " + gender +
      "\\nCourse: " + course +
      "\\nRating: " + rating
    );
  };

  return (
    <div>
      <h1>Survey Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Gender:</label>
        <br />

        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={(e) =>
            setGender(e.target.value)
          }
        />
        Male

        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={(e) =>
            setGender(e.target.value)
          }
        />
        Female

        <br /><br />

        <label>Select Course:</label>
        <br />

        <select
          value={course}
          onChange={(e) =>
            setCourse(e.target.value)
          }
        >
          <option value="">
            Select Course
          </option>
          <option value="React JS">
            React JS
          </option>
          <option value="Node JS">
            Node JS
          </option>
          <option value="Express JS">
            Express JS
          </option>
        </select>

        <br /><br />

        <label>Rating:</label>
        <br />

        <select
          value={rating}
          onChange={(e) =>
            setRating(e.target.value)
          }
        >
          <option value="">
            Select Rating
          </option>
          <option value="Excellent">
            Excellent
          </option>
          <option value="Good">
            Good
          </option>
          <option value="Average">
            Average
          </option>
        </select>

        <br /><br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SurveyForm;`
                }
            ]
        }
        ,
        {
            que: "q378",
            file: [
                {
                    title: "Parent.js",
                    code: `import React, { createContext } from "react";
import Child from "./Child";

export const ColorContext = createContext();

function Parent() {
  const colors = {
    bgColor: "red",
    textColor: "green"
  };

  return (
    <ColorContext.Provider value={colors}>
      <Child />
    </ColorContext.Provider>
  );
}

export default Parent;`
                },
                {
                    title: "Child.js",
                    code: `import { useContext } from "react";
import { ColorContext } from "./Parent";

function Child() {
  const { bgColor, textColor } =
    useContext(ColorContext);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "20px",
        textAlign: "center"
      }}
    >
      <h1>Welcome to LJU</h1>
    </div>
  );
}

export default Child;`
                }, {
                    title: "App.jsx", code: `import Parent from "./Parent";

function App() {
  return <Parent />;
}

export default App;`}
            ]
        }
        ,
        {
            que: "q379",
            file: [
                {
                    title: "P.js",
                    code: `import React, { createContext } from "react";
import C1 from "./C1";

export const ColorContext = createContext();

function P() {
  const colors = {
    fontColor: "yellow",
    bgColor: "blue"
  };

  return (
    <ColorContext.Provider value={colors}>
      <C1 />
    </ColorContext.Provider>
  );
}

export default P;`
                },

                {
                    title: "C1.js",
                    code: `import C2 from "./C2";

function C1() {
  return (
    <div>
      <C2 />
    </div>
  );
}

export default C1;`
                },

                {
                    title: "C2.js",
                    code: `import { useContext } from "react";
import { ColorContext } from "./P";

function C2() {
  const { fontColor, bgColor } =
    useContext(ColorContext);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        padding: "20px",
        textAlign: "center"
      }}
    >
      <h1>Full stack Development</h1>
    </div>
  );
}

export default C2;`
                }
            ]
        }
        ,
        {
            que: "q380",
            file: [
                {
                    title: "App.js",
                    code: `import { useState, useEffect } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);
  const [addClicked, setAddClicked] = useState(false);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
    setAddClicked(!addClicked);
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  useEffect(() => {
    if (addClicked) {
      alert("Addition button clicked!");
    }
  }, [addClicked]);

  return (
    <div>
      <h1>Addition and Subtraction</h1>

      <label>Number 1:</label>
      <br />
      <input
        type="number"
        value={num1}
        onChange={(e) =>
          setNum1(e.target.value)
        }
      />

      <br /><br />

      <label>Number 2:</label>
      <br />
      <input
        type="number"
        value={num2}
        onChange={(e) =>
          setNum2(e.target.value)
        }
      />

      <br /><br />

      <button onClick={handleAddition}>
        Addition
      </button>

      <button
        onClick={handleSubtraction}
        style={{ marginLeft: "10px" }}
      >
        Subtraction
      </button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;`
                }
            ]
        }
        ,
        {
            que: "q381",
            file: [
                {
                    title: "F1.js",
                    code: `import React, { createContext, useState } from "react";
import F2 from "./F2";

export const UserContext = createContext();

function F1() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
    city: "",
    gender: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <UserContext.Provider value={formData}>
      <div>
        <h1>User Form</h1>

        <label>First Name:</label>
        <br />
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
        />

        <br /><br />

        <label>Last Name:</label>
        <br />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
        />

        <br /><br />

        <label>Message:</label>
        <br />
        <textarea
          name="message"
          onChange={handleChange}
        />

        <br /><br />

        <label>City:</label>
        <br />
        <select
          name="city"
          onChange={handleChange}
        >
          <option value="">
            Select City
          </option>
          <option value="Ahmedabad">
            Ahmedabad
          </option>
          <option value="Surat">
            Surat
          </option>
          <option value="Rajkot">
            Rajkot
          </option>
        </select>

        <br /><br />

        <label>Gender:</label>
        <br />

        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        />
        Male

        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        />
        Female

        <br /><br />

        <F2 />
      </div>
    </UserContext.Provider>
  );
}

export default F1;`
                },

                {
                    title: "F2.js",
                    code: `import F3 from "./F3";

function F2() {
  return (
    <div>
      <F3 />
    </div>
  );
}

export default F2;`
                },

                {
                    title: "F3.js",
                    code: `import { useContext } from "react";
import { UserContext } from "./F1";

function F3() {
  const data = useContext(UserContext);

  const showData = () => {
    alert(
      "First Name: " + data.firstName +
      "\\nLast Name: " + data.lastName +
      "\\nMessage: " + data.message +
      "\\nCity: " + data.city +
      "\\nGender: " + data.gender
    );
  };

  return (
    <div>
      <button onClick={showData}>
        Submit
      </button>
    </div>
  );
}

export default F3;`
                }
            ]
        }
        ,
        {
            que: "q382",
            file: [
                {
                    title: "P.js",
                    code: `import React, { createContext } from "react";
import C1 from "./C1";

export const StyleContext = createContext();

function P() {
  const styleData = {
    fontStyle: "italic",
    fontSize: "40px"
  };

  return (
    <StyleContext.Provider value={styleData}>
      <C1 />
    </StyleContext.Provider>
  );
}

export default P;`
                },

                {
                    title: "C1.js",
                    code: `import C2 from "./C2";

function C1() {
  return (
    <div>
      <C2 />
    </div>
  );
}

export default C1;`
                },

                {
                    title: "C2.js",
                    code: `import { useContext } from "react";
import { StyleContext } from "./P";

function C2() {
  const { fontStyle, fontSize } =
    useContext(StyleContext);

  return (
    <div>
      <h1
        style={{
          fontStyle: fontStyle,
          fontSize: fontSize
        }}
      >
        Full stack Development
      </h1>
    </div>
  );
}

export default C2;`
                }
            ]
        }
        ,
        {
            que: "q383",
            file: [
                {
  title: "App.js",
  code: `import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode
          ? "black"
          : "white",
        color: darkMode
          ? "white"
          : "black",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h1>Theme Changer</h1>

      <p>
        Click the buttons to change the theme.
      </p>

      <button
        onClick={() => setDarkMode(true)}
      >
        Dark Mode
      </button>

      <button
        onClick={() => setDarkMode(false)}
        style={{ marginLeft: "10px" }}
      >
        Light Mode
      </button>
    </div>
  );
}

export default App;`
}
            ]
        }
        ,
        {
            que: "q384",
            file: [
                {
  title: "App.js",
  code: `import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Character Counter</h1>

      <textarea
        rows="5"
        cols="40"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
        style={{
          color:
            text.length > 100
              ? "red"
              : "black"
        }}
      />

      <h3>
        Character Count: {text.length}
      </h3>
    </div>
  );
}

export default App;`
}
            ]
        }
        ,
        {
            que: "q385",
            file: [
                {
  title: "App.js",
  code: `import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [running]);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button
        onClick={() => setRunning(true)}
      >
        Start
      </button>

      <button
        onClick={() => setRunning(false)}
        style={{ marginLeft: "10px" }}
      >
        Stop
      </button>
    </div>
  );
}

export default App;`
}
            ]
        }
        ,
        {
            que: "q386",
            file: [
                {
  title: "App.js",
  code: `import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { quantity: state.quantity + 1 };

    case "REMOVE_ITEM":
      return {
        quantity:
          state.quantity > 0
            ? state.quantity - 1
            : 0
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    { quantity: 0 }
  );

  return (
    <div>
      <h1>Product Quantity</h1>

      <h2>Quantity: {state.quantity}</h2>

      <button
        onClick={() =>
          dispatch({ type: "ADD_ITEM" })
        }
      >
        Add Item
      </button>

      <button
        onClick={() =>
          dispatch({ type: "REMOVE_ITEM" })
        }
        style={{ marginLeft: "10px" }}
      >
        Remove Item
      </button>
    </div>
  );
}

export default App;`
}
            ]
        }
        ,
        {
            que: "q387",
            file: [
  {
    title: "Parent.js",
    code: `import React, { createContext, useState } from "react";
import Child from "./Child";

export const LanguageContext = createContext();

function Parent() {
  const [language, setLanguage] =
    useState("English");

  const toggleLanguage = () => {
    setLanguage(
      language === "English"
        ? "Hindi"
        : "English"
    );
  };

  return (
    <LanguageContext.Provider
      value={language}
    >
      <button onClick={toggleLanguage}>
        Toggle Language
      </button>

      <Child />
    </LanguageContext.Provider>
  );
}

export default Parent;`
  },

  {
    title: "Child.js",
    code: `import { useContext } from "react";
import { LanguageContext } from "./Parent";

function Child() {
  const language =
    useContext(LanguageContext);

  return (
    <div>
      <h1>
        {language === "English"
          ? "Welcome"
          : "स्वागत है"}
      </h1>
    </div>
  );
}

export default Child;`
  }
]
        }
        ,
        {
            que: "q388",
            file: [
                {
  title: "App.js",
  code: `import { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const API_KEY = "YOUR_API_KEY";

      const response = await axios.get(
        \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}&units=metric\`
      );

      setWeather(response.data);
    } catch (err) {
      setError("Invalid city name");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) =>
          setCity(e.target.value)
        }
      />

      <button onClick={getWeather}>
        Get Weather
      </button>

      {loading && (
        <h3>Loading...</h3>
      )}

      {error && (
        <h3 style={{ color: "red" }}>
          {error}
        </h3>
      )}

      {weather && (
        <div>
          <h2>{weather.name}</h2>

          <p>
            Temperature:
            {weather.main.temp} °C
          </p>

          <p>
            Humidity:
            {weather.main.humidity}%
          </p>

          <p>
            Description:
            {weather.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;`
}
            ]
        }
    ]
    return (
        <Context.Provider value={{ dataset, codebase }}>
            {props.children}
        </Context.Provider>
    )
}

export default DataContext