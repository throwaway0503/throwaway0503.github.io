"use client";

import { PrevRefButton, EmptyRefButton, Divider } from '../main-page';
import '../other-style.css';

const Content: React.FC = () => {
    const padding = { paddingBottom: "2.5%" };

    return (<>
        <img src={"cyan/1.png"} style={padding}/>
        <img src={"cyan/2.png"} style={padding}/>
        <img src={"cyan/3.png"} style={padding}/>
        <img src={"cyan/4.png"} style={padding}/>
        <img src={"cyan/5.png"} style={padding}/>
    </>);
};

export default function Cyan() {
    return (<>
        <main className='main'>
            <div className='content-container'>
                <Content/>
            </div>

            <Divider/>

            <div className='ref-button-container'>
                <PrevRefButton href={"17"}/>
                <EmptyRefButton/>
            </div>
        </main>
    </>);
}