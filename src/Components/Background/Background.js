import React from 'react'
import './Background.css'

const Background =({data}) =>{
    if(data.weather[0].id > 800){
        return(
           <div className='background__items'>
                <img alt='cloud' width='auto' height='200px'src='http://pluspng.com/img-png/cloud-png-cloud-png-image-png-image-3033.png'/>      
           </div>
        );
    }
    
    else if (data.weather[0].id >= 300  && data.weather[0].id <= 499){
        return(
            <div className='background__items'>
                <img alt='rain' width='auto' height='200px'src='http://pluspng.com/img-png/blue-rain-png-png-image-200.png'/> 
                {/* <img alt='moon' width='auto' height='200px'src='https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/super-moon.png?w=800'/>
                <img alt='sun' width='auto' height='200px'src='http://pluspng.com/img-png/sun-png-transparent-background-download-432.png'/>  */}
            </div>
         );
    }

    else if (data.weather[0].id === 800){
        return(
            <div className='background__items'>
                <img alt='sun' width='auto' height='200px'src='http://pluspng.com/img-png/sun-png-transparent-background-download-432.png'/> 
            </div>
         );
    }
}
export default Background;
//dont forget to check all the possible weather conditions in the api and grab the corresponding background image