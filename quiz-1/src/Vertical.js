import React,{useEffect} from 'react'
import {Vals} from './vals'
import Item from './VerticalItem'



const Vertical = ({selected})=>{

    
    return(
        <section id='vertical-container' className="w-1/4 flex flex-col overflow-hidden transition-all duration-700" style={{marginTop:`-${300*3*(selected-1)}px`}}>
            {
                Vals.map((item,index)=>(
                    <Item key={index} item={item}/>
                ))    
            }
        </section>
    )
}



export default Vertical