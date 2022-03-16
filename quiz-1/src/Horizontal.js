import React,{useEffect, useRef} from 'react'
import Item from './HorizontalItem'
import Scroller from './Scroller'
import { Vals } from './vals'




const Horizontal = ({selected,setSelected,nbrVisItems})=>{
    const listRef = useRef()

    const getStyle = (index)=>{
        return {
            width:`${(index*6)}%`,
            height:`${(index*20)}%`,
            filter:`blur(${(nbrVisItems-index-1)}px)`,
            transform : `translateX(${(200-(200-index*40))}%)`,
            opacity:(nbrVisItems>index && nbrVisItems<index+6) ? 1:0
        }
    }


    const setStyle = (inc)=>{
        if((selected+inc)>=1 && (Vals.length-inc)>=selected)
        listRef.current.childNodes.forEach((art)=>{
            let id = +art.id
            id+=inc*-1
            art.style.width=`${(id*6)}%`
            art.style.height=`${(id*20)}%`
            art.style.filter=`blur(${(nbrVisItems-id-1)}px)`
            art.style.transform = `translateX(${(200-(200-id*40))}%)`
            art.style.opacity = (nbrVisItems>id && nbrVisItems<id+6) ? 1:0
            art.id=id
            setSelected(+selected+inc)
        })
    }

    return(
        <section className="relative w-3/4 flex flex-col justify-around">
            <header className='py-2 px-6'>
                <h1 className='text-slate-200 font-bold text-5xl'>Horizontal</h1>
                <p className='text-slate-300 text-2xl'>Desc</p>
            </header>
            <Scroller setStyle={setStyle}/>
            <main ref={listRef} className="relative w-full h-2/3 flex overflow-hidden items-center justify-center">
                {
                    Vals.map((item,index)=>(
                        <Item key={index} id={index} item={item.title} style={getStyle(index)}/>
                    ))
                }
            </main>
            <footer>
                <h2 className='text-slate-300 font-bold text-4xl'>
                    {selected}
                </h2>
                <h3 className='text-slate-400 font-semibold text-3xl'>Desc</h3>
            </footer>
        </section>
    )
}




export default React.memo(Horizontal)