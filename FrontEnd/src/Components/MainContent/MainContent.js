import React, { Component } from 'react'
import './MainContent.css';
import Grid from '@mui/material/Grid';
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';
import Suggestion from '../Suggestion/Suggestion'
import InfoSection from '../Info/InfoSection'



class MainContent
 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (<div>

        <Grid container >

        <Grid item xs={2}> 
        
        </Grid>

        <Grid item xs={6}> 
                <div>
                    <StatusBar/>
                    <MainPage/>
                </div>
        </Grid>

        <Grid item xs={2}>


         </Grid>

        <Grid item xs={2}>
            
        </Grid>

        </Grid>
        </div> );
    }
}
 
export default MainContent;