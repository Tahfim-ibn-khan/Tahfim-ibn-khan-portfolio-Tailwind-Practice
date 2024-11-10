import React, {Fragment} from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Homepage from './Pages/Homepage';

function App() {
  return (
    <Fragment>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Homepage/>}/>
        </Routes>
        </BrowserRouter>
    </Fragment>
  )
}

export default App