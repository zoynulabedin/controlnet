//import React, { useState, useRef } from "https://cdn.skypack.dev/react@17.0.1";
import { useRef, useState } from "react";
import Slider from '@mui/material/Slider';
import "./Accordion.css";
import "../Select/Select.scss";
const faqs = [
    {
        id: 1,
        header: "Select Voice Settings",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq, title, name, change, value } = props;
    const { header, id, text } = faq;

    const handleSliderChange = (e, name) => {
        // console.log(name);
        // console.log(e.target.value);
        change(name, e.target.value)
    }

    return (
        <div>
            <div className="select-title">{title}</div>
            <div className="rc-accordion-card">
                <div className="rc-accordion-header">
                    <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                        <h5 className="rc-accordion-title">{header}</h5>
                        <i className="fa fa-chevron-down rc-accordion-icon"></i>
                    </div>
                </div>
                <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                    active === id
                        ? { height: contentEl.current.scrollHeight }
                        : { height: "0px" }
                }>
                    <div className="rc-accordion-body p-15">
                        {/* <p className='mb-0'>{text}</p> */}
                        <div className=" mt-6">
                            <p>Stability</p>
                            <Slider
                                size="small"
                                defaultValue={value.stability}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                color="info"
                                onChange={(e) => handleSliderChange(e, "stability")}
                            />
                        </div>
                        <div className=" mt-6">
                            <p>Similarity</p>
                            <Slider
                                size="small"
                                defaultValue={value.similarity_boost}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                onChange={(e) => handleSliderChange(e, "similarity_boost")}
                            />
                        </div>
                        <div className=" mt-6">
                            <p>Style</p>
                            <Slider
                                size="small"
                                defaultValue={value.style}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                onChange={(e) => handleSliderChange(e, "style")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Accordion = ({title, change, value}) => {
    
    const [active, setActive] = useState(null);
    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }
    
    return (
        <>
            {faqs.map((faq, index) => {
                return (
                    <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} title={title} change={change} value={value} />
                )
                })
            }
        </>
    );
};
export default Accordion;
