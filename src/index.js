//React library is divided into two React and React Dom
//So we need to import both of them
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyDGi5xGwLBQxuWKwQc0vib2gjwVghmJMpM';


//Create a new component this component will produce some html document 
//using es6 arrow function to do so
/*const App = ()=>{
    //it will contain jsx type code
    return (
    <div>
        <SearchBar/>
    </div>)
}*/


//Creating class based app component
class App extends Component{
    
    constructor(props){
        super(props);
        //We will set the properties of state as the list and we will not keep it empty and show user some videos
        this.state= { 
            videos:[],
            selectedVideo:null
        };
       
        this.videoSearch('surfboards');
    }   

    videoSearch(term){
        YTSearch({key:API_KEY, term :term},(data)=>{
            console.log(data);
            this.setState({videos:data,selectedVideo:data[0]});
            
        })
    }

    

    render(){
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)},500);
        return(
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />
                <VideoDetail video={this.state.selectedVideo}/>    
                <VideoList 
                    //here is a function which we are passing to prop
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        )
    }
}

//Now we need to take this component and add it to the dom 
//Here the concept of component class and component instance take place
//We will create the instance of the App constant and pass it to the function and also pass the target dom which is container in the index.html file
ReactDom.render(<App />, document.querySelector('.container'));