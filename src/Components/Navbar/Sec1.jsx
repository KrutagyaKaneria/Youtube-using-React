import './Sec1.css'
import mic from '../../assets/mic.png'
import bell from '../../assets/bell.png'
import create from '../../assets/create.png'
import more from '../../assets/more.png'
import ellips41 from '../../assets/Ellipse 4 (1).png'
import search from '../../assets/search.png'
function Sec1() {
    return(
        <>
        <div className="navbar">
                <div className="middle1">
                    <div className='searchbar'><input type="text" placeholder="Search"/></div>
                    <div className="searchion"><img src={search} alt="" /></div>
                    <div className='mic'><img src={mic} alt=""/></div>
                </div>
                <div className="righttop">
                    <div><img src={create} alt=""/></div>
                    <div><img src={more} alt=""/></div>
                    <div><img src={bell} alt=""/></div>
                    <div><img src={ellips41} alt=""/></div>
                </div>
            </div>
            <div className="line2"></div>
        </>
    )
}
export default Sec1