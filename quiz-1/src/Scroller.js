import {useRef,useState} from 'react'


const Scroller = ({setStyle})=>{
    const control = useRef()
    const [isDown,setDown] = useState()

    const onMouseDownHandler = (e)=>{
        setDown(true)
        control.current.classList.remove('w-16')
        control.current.classList.add('w-24')
    }

    const onMouseUpHandler = (e)=>{
        setDown(false)
        control.current.classList.remove('w-24')
        control.current.classList.add('w-16')
        control.current.style.transform = 'translateX(0px)'
    }

    const onMouseMoveHandler = (e)=>{
        if(isDown){
            if((((window.innerWidth/4)*3)/2)>(e.pageX+10)){
                control.current.style.transform = 'translateX(-80px)'
                setStyle(-1)
                setDown(false)
            }
            else if((((window.innerWidth/4)*3)/2)<(e.pageX-10)){
                control.current.style.transform = 'translateX(80px)'
                setStyle(1)
                setDown(false)
            }
        }
    }


    return(
        <div className='w-full absolute z-50 h-28 flex justify-center items-center'>
            <div ref={control} onMouseDown={onMouseDownHandler} onMouseUp={onMouseUpHandler} onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseUpHandler} className='border border-slate-400 w-16 h-16 rounded-full opacity-0 hover:opacity-100 transition-all duration-300 cursor-move'>
                <svg xmlns="http://www.w3.org/2000/svg" className="p-2 h-full w-full rotate-90 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
            </div>
        </div>
    )
}


export default Scroller



/**
 * 
 * 
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
</svg>
 * 
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg>
 *
 *
 **/