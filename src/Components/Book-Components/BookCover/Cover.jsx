import React from 'react'

const image = "https://prodimage.images-bn.com/pimages/9780060838676_p0_v1_s600x595.jpg";
export default function Cover(){

    return(
        <React.Fragment>
            <div >
                <img style={{width:"250px", height:"auto"}} src={image}/>
            </div>

        </React.Fragment>
    )
}