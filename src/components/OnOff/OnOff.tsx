import React, {useState} from 'react';

type OnOffPropsType = {
    onChange:(on:boolean)=>void
}
const OnOff = (props: OnOffPropsType) => {

  const [on, setOn] = useState<boolean>(false);
    console.log(on);
   const buttonContainer = {
       marginTop: "5px"
   }
   const onClickHandlerOn=()=> {
       setOn(true)
      props.onChange(true)
   }

    const onClickHandlerOff=()=> {
        setOn(false)
        props.onChange(false)
    }
    const onStyle = {
        width: "20px",
        height: "15px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green": "white"
    }
    const offStyle = {
        width: "20px",
        height: "15px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: !on ? "red": "white",
        marginLeft: "3px"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green": "red",

    }

    return (
        <div style={buttonContainer}>
            <div style={onStyle} onClick={()=>{onClickHandlerOn()}}>On</div>
            <div style={offStyle} onClick={()=>{onClickHandlerOff()}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;