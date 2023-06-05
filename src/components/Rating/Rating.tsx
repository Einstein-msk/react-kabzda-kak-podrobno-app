import React from "react";

export type RatingValueType =1|2|3|4|5

export type RatingPropsType = {
    value: RatingValueType
    onClick: (value:RatingValueType)=>void
}


export function Rating(props:RatingPropsType) {
    console.log("Rating rendered")
    return (
        <div>
            <Star selected={props.value>0} value={1} onClick={props.onClick}/>
            <Star selected={props.value>1} value={2} onClick={props.onClick}/>
            <Star selected={props.value>2} value={3} onClick={props.onClick}/>
            <Star selected={props.value>3} value={4} onClick={props.onClick}/>
            <Star selected={props.value>4} value={5} onClick={props.onClick}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick:(value:RatingValueType)=>void
}

function Star(props:StarPropsType) {
    // if (props.selected===true) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>s1
    // }
    // console.log("Star rendered")
    // return <span><b>star </b></span>
    // return props.selected ? <span><b>star </b></span> : <span>star </span>
    return  <span onClick={()=>props.onClick(props.value)}>{props.selected ? <b>star </b> : "star "}</span>;
}