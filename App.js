import React from 'react';
import ReactDOM from 'react-dom/client';


//JSX
// const heading = <h1 id='heading'>Namaste React</h1>

// console.log(headingeading);

//React Functional Component 

const Title = () => {
    <h1 className='title'>Hi I'm the title</h1>
    
}

const HeadingComponent = () => {
    return(
    <div id='container'>
        <Title />
        <h1 className='heading'>Namaste React Functional Component</h1>
    </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);