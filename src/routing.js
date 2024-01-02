import React, { useReducer } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { globalstate } from './component/context/context.js';
// import Banner from './component/banner.js';
// import About from './component/about.js';
// import Funform from './validateform/funform.js'
import { initialState,reducer } from './component/context/reducer.js';
// import {Contexthome} from './component/contexthome.js'
// import BasicTextFields from './materialui/materialui.js'
// import Api from './api/api.js'
// import Gotoapicart from './api/gotoapicart.js';
import Axios from './axios/axios.js'
// import Unmount from './lifecycle/classcomp.js';
// import Parent from './lifecycle/function/parent.js'
import Cardform from './form/cardform.js'
const Routing=()=>{
    let [state,dispatch]=useReducer(reducer,initialState)
    console.log(state);
    return(
        // globalstate function has two types-consumer&provider-(provider)set function or state global
        // for import initialstate  and reducer use useReducer hook
        // useeducer has two values -useReducer(reducer-updatefunction,initialstate-state variable)
        // usereducer can be destructured in the format of array 
        // state-initialstate
        // values can be destructured in object format
        <globalstate.Provider value={{state,dispatch}}>
            <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Funform/>}></Route> */}
                <Route path="/" element={<Cardform/>}></Route>
                {/* <Route path="/" element={<BasicTextFields/>}></Route>
                <Route path="/banner" element={<Banner/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="*" element={<p>page not found</p>}></Route> */}
                {/* <Route path="/" element={<Api/>}></Route>
                <Route path="/cart" element={<Gotoapicart/>}></Route> */}
                {/* <Route path="/" element={<Axios/>}></Route> */}
                {/* <Route path="/" element={<Unmount/>}></Route> */}
                {/* <Route path="/" element={<Parent/>}></Route> */}

            </Routes>
        </BrowserRouter>
        </globalstate.Provider>
    )
}

export default Routing
