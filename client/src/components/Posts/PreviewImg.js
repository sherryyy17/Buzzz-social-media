import React, { useEffect, useState } from "react";
import classes from './PostShare.module.css';

const PreviewImg = (props) => {
    const [ imageArray, setImageArray ] = useState([]);
    const { image, imageArr, index, alterImgArray } = props;

    useEffect(() => {
        setImageArray(imageArr);
    }, []);

    const removeImg = () => {
        imageArray.splice( index, 1 );
        console.log(imageArray);
        alterImgArray(imageArray);
    }

    return <div>
        <div onClick={ removeImg }>X</div>
        <img src = { image } id={ classes.preview } />
    </div>
}

export default PreviewImg;