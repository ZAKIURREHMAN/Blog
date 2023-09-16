import Detail from "./component/Detail/Detail";
import Navbar from "./component/Navbar";
import Allblog from "./component/Seeblog/Allblog";
import axios from "axios";
import Uploadimages from "./component/Uploadimg/Uploadimages";
import { useState,useEffect } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  const [data,setdata] = useState([])
  const [cout,setcout] = useState(211)
  useEffect(()=>{
      axios.get("http://localhost:4000/getblogingapi")
      .then((res)=>{
          setdata(res.data.data)
      })
      .catch((err)=>console.log(err))
      
  },[data])
  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Allblog/>}/>
  <Route path="/writlbog" element={<Uploadimages/>}/>
  <Route path="details/:_id" element={<Detail data = {data} />}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
