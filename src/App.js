import React from 'react';
import cl from './MyBg.module.css';
import WhiteSun from './WhiteSun.svg.png'
import Info from './components/info/Info.jsx'

function App() {
    return (
        <div>
						<img src={WhiteSun} className={cl.blackSun}/>
						<Info/>
        </div>
    );
}

export default App;
