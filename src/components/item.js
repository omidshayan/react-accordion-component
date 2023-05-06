import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {useState} from 'react'

const Item = ({title, desc}) =>{
    const [text, setText] = useState(false)
    return(
        <>
        <div className="title" onClick={() => setText (!text)}>
        <h3>{title}</h3>
        <span>{text ? <AiOutlineMinus/> : <AiOutlinePlus />}</span>
        </div>
        {
            text &&   <p className='text'>{desc}</p>
        }
        </>
    )
}
export default Item