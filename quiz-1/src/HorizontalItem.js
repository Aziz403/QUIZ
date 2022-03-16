



const Item = ({id,item,style})=>{
    

    return(
        <article id={id} className={`/*w-1/3*/ absolute left-0 flex-shrink-0 border duration-500 transition-all flex justify-center items-center font-bold text-4xl`} style={style}>
            {item}
        </article>
    )
}



export default Item