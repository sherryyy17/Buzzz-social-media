import React, { useEffect, useState } from "react";
import classes from './PostShare.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
        <div onClick={ removeImg } style={{ display: "flex", width:"100%", justifyContent:"space-between", cursor: "pointer",paddingTop: "9px", paddingBottom: "4px", fontSize: "0.9rem" }}>
            <p>{index + 1} of { imageArr.length }</p>
            <div style={{ display: "flex" }}>
                <FontAwesomeIcon icon={ faTrash } />
                <p style={{ paddingLeft: "5px" }}>Remove</p>
            </div>     
        </div>
        <img src = { image } id={ classes.preview } />
    </div>
}

export default PreviewImg;