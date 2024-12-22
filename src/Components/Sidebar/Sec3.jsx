import './Sec3.css'
import library from '../../assets/library.png'
import history from '../../assets/history.png'
import yourvideo from '../../assets/your_video.png'
import watchhlater from '../../assets/watch_later.png'
import liked from '../../assets/liked.png'
import downarrow from '../../assets/down_arrow.png'

function Part3(){
    const data = [
        {id:1,img:library,txt:"Library"},
        {id:2,img:history,txt:"History"},
        {id:3,img:yourvideo,txt:"Your videos"},
        {id:4,img:watchhlater,txt:"Watch later"},
        {id:5,img:liked,txt:"Liked videos"},
        {id:6,img:downarrow,txt:"Show more"},
        {id:7,img:yourvideo,txt:"Your videos"},
        
        
    ]

    return(
        <>
        <div className="overall">
        <div className='middle'>
            {data.map((i)=>(
                <div key={i.id} className='button'>
                    <div className='button_image'>
                        <img src={i.img} alt="" />
                    </div>
                    <div className='button_txt'>
                        {i.txt}
                    </div>
                </div>
            ))}
        </div>
        <div className='line'></div>
        </div>
        </>
    )
}
export default Part3