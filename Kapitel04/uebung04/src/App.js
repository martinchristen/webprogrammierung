import React from 'react';
import Timer from './Timer';

function App() {
    return (
    <>
        <Timer countdown="50" />
        <Timer countdown="20" />
        <Timer countdown="10" />
    </>);
}

export default App;
