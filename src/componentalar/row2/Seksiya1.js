import Form from "./Form";
import Nav from "./Nav";
import TotalVisits from "./TotalVisits";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";



function Seksiya1(){
    return(
        <div className="seksiya1">
            <Nav/>
            {/* <BrowserRouter> */}
                <Routes>
                    <Route path="/CopiedForm" element={<Form />} />
                    <Route path="/addTour" element={<Form />} />
                    <Route path="/" element={<TotalVisits />} />
                </Routes>
            {/* </BrowserRouter> */}
        </div>
    )
}


export default Seksiya1;