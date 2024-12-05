import './Sec4.css'
import ellips1 from '../assets/Ellipse 1 (1).png'
import ellips2 from '../assets/Ellipse 1 (2).png'
import ellips3 from '../assets/Ellipse 1 (3).png'
import ellips4 from '../assets/Ellipse 1 (4).png'
import ellips5 from '../assets/Ellipse 1 (5).png'
import ellips6 from '../assets/Ellipse 1 (6).png'
import ellips from '../assets/Ellipse 1.png'


function Part4(){
    const data = [
        {id:1,img:ellips,txt:"Nadir On The Go"},
        {id:2,img:ellips1,txt:"Coke Studio "},
        {id:3,img:ellips2,txt:"Nadir On The Go"},
        {id:4,img:ellips3,txt:"Figma"},
        {id:5,img:ellips4,txt:"ATC  Android ToTo C.."},
        {id:6,img:ellips5,txt:"Alux.com"},
        {id:7,img:ellips6,txt:"Alux.com"}

    ]

    return(
        <>
        <div className="overall">
        <div className="bottom">
            {data.map((i)=>(
                <div key={i.id} className="button">
                    <div className="button_image">
                        <img src={i.img} alt="" />
                    </div>
                    <div className="button_txt">
                        {i.txt}
                    </div>
                </div>
            ))}
        </div>
        </div>
        </>

    )
}

export default Part4