import React, { Component } from 'react'
import './Home.css';
import NavBar from '../NavBar/NavBar';
import MainContent from '../MainContent/MainContent';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <div className='homebackground'>
          

            <NavBar/>
            <MainContent />
            



        </div> );
    }
}
 
export default Home;