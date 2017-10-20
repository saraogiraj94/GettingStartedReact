import React, { Component } from 'react';


//Functional component is a dumb component
// const SearchBar = ()=>{
//     return <input/>; //We imported react bcs of React.createElement
// }


//Creating CLASS BASED COMPONENTS to make it smart and interact with other
class SearchBar extends Component{
    //Constructure to instantinate the state of the class 
    constructor(props){
        super(props);

        this.state = { term : ''};
    }
    
    //Always define render method and return jsx
    render(){
        //Returning jsx
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState( { term:event.target.value } ) }  />
            </div>
        )
        
    }
}


//Exporting the SearchBar created
export default SearchBar;