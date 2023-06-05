import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion/UncontrolledAccordion";
import {SelfSelectedRating} from "./components/Rating/SelfSelectedRating/SelfSelectedRating";
import OnOffControlled from "./components/OnOff/OnOffControlled";

function summ(a:number,b:number) {
    alert(a+b)
}
// summ(23,12);
// summ(100,300);


function App() {
    let [ratingValue, setRatingValue]=useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed]=useState<boolean>(false)
    const [onControlled, setOnControlled] = useState<boolean>(true);
    console.log("App rendering")
    return (
        <div>


            <Accordion titleValue={"Меню"} collapsed={accordionCollapsed}
                       onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>

            {/*<Rating value={ratingValue} onClick={setRatingValue}  />*/}


            {/*<OnOff />*/}
            <OnOff onChange={setOnControlled} /> {onControlled.toString()}
            {/*<OnOffControlled value={onControlled} setOnControlled={setOnControlled} />*/}

            <UncontrolledAccordion titleValue={"Меню"}/>
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

            {/*<SelfSelectedRating />*/}
            {/*<SelfSelectedRating />*/}
            {/*<SelfSelectedRating />*/}
            {/*<SelfSelectedRating />*/}


        </div>
    );
}


type PageTitlePropsType = {
    title: string
}


function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendered")
    return <h1>{props.title}</h1>
}

export default App;
