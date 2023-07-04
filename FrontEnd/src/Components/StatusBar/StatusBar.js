import React, { Component } from 'react'
import "./StatusBar.css"
import Avatar from '@mui/material/Avatar';
import uploadImage from "../../images/addstory.png"
import hima from "../../images/hima.png"
import chandu from "../../images/chandu.png"
import vinu from "../../images/vinu.jpg"
import dila from "../../images/dila.jpg"
import kavishka from "../../images/kavishka.jpg"
import thejan from "../../images/thejan.jpg"
import isuru from "../../images/isuru.jpg"

// Import other user images as needed

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            statusList: []
        }
    }
    
    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        let data=[
            {
                "username": "Himantha_hirushan",
                "imageURL": hima
            },
            {
                "username": "Vinu_dahanayaa",
                "imageURL": vinu
            },
            {
                "username": "Chandeepa_isuranga",
                "imageURL": chandu
            },
            {
                "username": "Dilshana_wijesingha",
                "imageURL": dila
            },
            {
                "username": "Kavishka_Pramod",
                "imageURL": kavishka
            },
            {
                "username": "Isuru_jeewantha",
                "imageURL": isuru
            },
            {
                "username": "Thejan_illangathika",
                "imageURL": thejan
            },
            {
                "username": "Dilshana_wijesingha",
                "imageURL": dila
            },
            {
                "username": "Dilshana_wijesingha",
                "imageURL": dila
            },
            {
                "username": "Dilshana_wijesingha",
                "imageURL": dila
            },
        ];

        this.setState({statusList: data});
    }

    render() { 
        return ( 
            <div>
                <div className='statusbar_container'>
                    <img className='statusbar_upload' src={uploadImage} width="75px" height="75px"/>
                    {this.state.statusList.map((item,index) =>(
                        <div className='status' key={index}>
                            <Avatar className='statusbar_status' src={item.imageURL}></Avatar>
                            <div className='statusbar_text'>{item.username}</div>
                        </div>
                    ))}
                </div>   
            </div> 
        );
    }
}
 
export default StatusBar;