import React, {createContext, useState}from 'react'

const SideBarContext = createContext();

const SideBarContextProvider = (props) => {
    const [sideBarState, setSideBarState] = useState(true);
    const [sideBarActive, setSideBarActive] = useState('dashboard');
    const toggleSideBar = () =>{
        setSideBarState(!sideBarState);
    };
  return (
    <div>
        <SideBarContext.Provider value={{sideBarState, sideBarActive, setSideBarActive, toggleSideBar}}>
            {props.children}
        </SideBarContext.Provider>
    </div>
  )
}

export {SideBarContextProvider, SideBarContext}