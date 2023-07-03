import React, { Component } from 'react';
import "../MainPage/MainPage.css";
import Post from "../Post/Post";
import uploadImage from "../../images/upload.png"
import { firebaseStorage } from '../firebase';
import 'firebase/storage';


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
      <div className='main-page'>
     
        </div>
  
    );
  }
}

export default MainPage;