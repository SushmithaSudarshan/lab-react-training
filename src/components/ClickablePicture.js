import React, {useState} from "react";

const ClickablePicture = ({img, imgClicked}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <img 
            src={isClicked ? imgClicked : img} 
            alt="Clickable" 
            onClick={handleClick}
            style={{cursor: 'pointer', width: '100px', height: '100px'}}
        />
    );
};

export default ClickablePicture;