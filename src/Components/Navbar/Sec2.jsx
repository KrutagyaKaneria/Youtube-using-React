import './Sec2.css'
import leftarrow from '../../assets/leftBottom.png'
function Sec2(){
    const data = [
        {id:1,txt:"All"},
        {id:2,txt:"Cook Studio"},
        {id:3,txt:"UX"},
        {id:4,txt:"Case Study"},
        {id:5,txt:"Music"},
        {id:6,txt:"Bnagla Lofi"},
        {id:7,txt:"Tour"},
        {id:8,txt:"Saintmartin"},
        {id:9,txt:"Tech"},
        {id:10,txt:"IpHONE 13"},
        {id:11,txt:"Computer"},
    ]



    return (
        <>
        <div className="option">
            {data.map((i)=>(
                <div key={i.id} className="options">
                    <div className='innertxt'>
                        {i.txt}
                    </div>
                </div>
            ))}
            <img src={leftarrow} alt="" />
        </div>
        <div className="line3"></div>
        </>
    )
}
export default Sec2

