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
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value) }  />
            </div>
        )
        
    }

    onInputChange(term){
        this.setState({term});
        //Calling the method in index.js
        this.props.onSearchTermChange(term);
    }
}


//Exporting the SearchBar created
export default SearchBar;