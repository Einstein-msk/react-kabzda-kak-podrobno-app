import React, {useState} from "react";

type UncontrolledAccordionPropsType= {
    titleValue: string

}

export function UncontrolledAccordion(props:UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed]=useState<boolean>(false)

        return <div>
            <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}

        </div>


}



type AccordionTitlePropsType ={
    title: string
    setCollapsed:any
    collapsed:boolean

}
function AccordionTitle(props: AccordionTitlePropsType) {
    const collapse=()=> props.setCollapsed(!props.collapsed)
    return <h3 onClick={collapse}>--{props.title}--</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;