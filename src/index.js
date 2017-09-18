//React library is divided into two React and React Dom
//So we need to import both of them
import React from 'react';
import ReactDom from 'react-dom';

//Create a new component this component will produce some html document 
//using es6 arrow function to do so
const App = ()=>{
    //it will contain jsx type code
    return <div>Hi!</div>
}

//Now we need to take this component and add it to the dom 
//Here the concept of component class and component instance take place
//We will create the instance of the App constant and pass it to the function and also pass the target dom which is container in the index.html file
ReactDom.render(<App />, document.querySelector('.container'));