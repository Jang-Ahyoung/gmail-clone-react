import React from 'react'
import './Section.css'

function Section({Icon,title,color,seleted}) {
    return (
        <div className={`section ${seleted && 'section--seleted'}`}
            style={{ borderBottom:`3px solid ${color}`,
                     color: `${seleted && color}`,
            }}>
                    <Icon/>
                <h4>{title}</h4>
                
        </div>
    )
}

export default Section
