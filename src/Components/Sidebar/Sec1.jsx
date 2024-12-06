import './Sec1.css'
import hambarger from '../../assets/hambarger.png'
import home from '../../assets/home.png'
import explore from '../../assets/explore.png'
import sorts from '../../assets/shorts.png'
import sub from '../../assets/subscription.png'
import logo from '../../assets/Youtube logo.png'


function Left(){
    const data1 = [
        {id:1,img:home,txt:"Home"},
        {id:2,img:explore,txt:"Explores"},
        {id:3,img:sorts,txt:"Shorts"},
        {id:4,img:sub,txt:"Subscriptions"}
    ]
    return(
        <>
        <div className="left">
        <div className="top_logo">
            <div className="menu">
                <img src={hambarger} alt="" />
            </div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>
        <div className="top">
        {data1.map((i)=>(
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
        <div className="line"></div>

        </div>
        </>

    )
}

export default Left