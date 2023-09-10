/*
<div id='parent'>
    <div id='class'>
        <h1>Hi I'm h1 tag</h1>    
    </div>
</div>

How you gonna create the nested elements?
*/



//The heading here is an object. The create element function creates an object.

const parent = React.createElement(
    'div', 
    {id:'parent'}, 
    React.createElement(
        'div', 
        {id : 'child'},
        [
            React.createElement(
                'h1',
                {},
                'The h1 tag'
            ),
            React.createElement(
                'h2',
                {},
                'Hi here is me h1 sibiling'
            )
        ]

        )
    );

// const heading = React.createElement(
//     'h1', 
//     {id : 'heading'}, 
//     'Hello World from React'
//     );

console.log(parent); //return object in console.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);