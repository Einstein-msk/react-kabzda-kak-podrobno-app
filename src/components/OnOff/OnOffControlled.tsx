import React, {useState} from 'react';

type OnOffControlledPropsType = {
    value:boolean
    setOnControlled:(value:boolean)=>void
}
const OnOff = (props: OnOffControlledPropsType) => {


   const controlledOnOffButtonContainer  = {
       marginTop: "5px"
   }
   const onClickHandler=(setOnValue:boolean)=> {
       props.setOnControlled(setOnValue)

   }
    const onStyle = {
        width: "20px",
        height: "15px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.value ? "green": "white"
    }
    const offStyle = {
        width: "20px",
        height: "15px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: !props.value ? "red": "white",
        marginLeft: "3px"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.value ? "green": "red"
    }

    return (
        <div style={controlledOnOffButtonContainer}>
            <div style={onStyle} onClick={()=>{onClickHandler(!props.value)}}>On</div>
            <div style={offStyle} onClick={()=>{onClickHandler(!props.value)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;