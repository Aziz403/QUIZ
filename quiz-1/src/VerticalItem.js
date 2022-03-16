



const Item = ({item})=>{
    

    const colors = ['#111827','#0f172a','#11182b']

    return(
        <section id={`vertical-item-${item.id}`} className='flex-shrink-0'>
            {
                item.items.map((el,i)=>(
                    <article key={i} style={{background:colors[i]}} className={`h-[300px] flex-shrink-0 border  flex justify-center items-center font-bold text-4xl`}>
                        {el.title}
                    </article>
                ))
            }
        </section>
    )
}



export default Item