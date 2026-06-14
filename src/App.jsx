import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { useContext } from "react";
import { Context } from "./context/DataContext";
const App = () => {
  const {dataset} = useContext(Context)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          {
            dataset.filter(elem=>elem.value!=="home").map((route,idx)=>{
              return(
                <Route key={idx} path={route.path} element={route.element}/>
              )
            })
          }
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App