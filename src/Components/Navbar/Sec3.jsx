import './Sec3.css'
import ellips41 from '../../assets/Ellipse 4 (1).png'
import ellips42 from '../../assets/Ellipse 4 (2).png'
import ellips43 from '../../assets/Ellipse 4 (3).png'
import ellips44 from '../../assets/Ellipse 4 (4).png'
import ellips45 from '../../assets/Ellipse 4 (5).png'
import ellips46 from '../../assets/Ellipse 4 (6).png'
import thum1 from '../../assets/Thumbnail-1.png'
import thum2 from '../../assets/Thumbnail-2.png'
import thum3 from '../../assets/Thumbnail-3.png'
import thum4 from '../../assets/Thumbnail-4.png'
import thum5 from '../../assets/Thumbnail-5.png'
import thum6 from '../../assets/Thumbnail-6.png'
import thum7 from '../../assets/Thumbnail-7.png'
import thum8 from '../../assets/Thumbnail-8.png'
import thum9 from '../../assets/Thumbnail-9.png'
import thum10 from '../../assets/Thumbnail-10.png'
import thum11 from '../../assets/Thumbnail-11.png'
import thum12 from '../../assets/Thumbnail.png'

import tick from '../../assets/verified.png'
function Sec3(){
    const alldata = [
        {id:1,image1:thum1,image2:ellips42,txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:tick,txt3:"1.5M views • 2 days ago"},
        {id:2,image1:thum2,image2:ellips41,txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:tick,txt3:"1.5M views • 2 days ago"},
        {id:3,image1:thum3,image2:ellips43,txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:tick,txt3:"1.5M views • 2 days ago"},
        {id:4,image1:thum4,image2:ellips45,txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:tick,txt3:"1.5M views • 2 days ago"},
        {id:5,image1:thum5,image2:ellips44,txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:tick,txt3:"1.5M views • 2 days ago"},
        {id:6,image1:thum6,image2:ellips42,txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:tick,txt3:"1.5M views • 2 days ago"},
        {id:7,image1:thum7,image2:ellips46,txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:tick,txt3:"1.5M views • 2 days ago"},
        {id:8,image1:thum8,image2:ellips42,txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:tick,txt3:"1.5M views • 2 days ago"},
        {id:9,image1:thum9,image2:ellips42,txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:tick,txt3:"1.5M views • 2 days ago"},
        {id:10,image1:thum10,image2:ellips42,txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:tick,txt3:"1.5M views • 2 days ago"},
        {id:11,image1:thum11,image2:ellips42,txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:tick,txt3:"1.5M views • 2 days ago"},
        {id:12,image1:thum12,image2:ellips42,txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:tick,txt3:"1.5M views • 2 days ago"}
    ]

    return(
        <>
        <div className="alltogether">
            {alldata.map((i)=>(
                <div key={i.id} className="thumnail">
                    <div className="bigimg">
                        <img src={i.image1} alt="" />
                    </div>
                    <div className="information">
                        <div className="smallimage"><img src={i.image2} alt="" /></div>
                        <div className="info">
                            <div className="info1">Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita</div>
                            <div className="imgandtxt">Coke Studio Bangla <img src={tick} alt="" /></div>
                            <div className="lasttxt">1.5M views • 2 days ago</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
export default Sec3