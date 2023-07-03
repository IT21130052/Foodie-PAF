import React, { Component } from 'react'
import './InfoSection.css'
import { Avatar } from '@mui/material';
import imageSrc from "../../images/user.png"

class InfoSection  extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div className='info_container'>
<Avatar src={imageSrc} className='info_image'/>

<div>
    <div className='info_username'>anindya_bunny</div>
    <div className='info_description'>Description</div>
</div>
            </div>
        );
    }
}
 
export default InfoSection;