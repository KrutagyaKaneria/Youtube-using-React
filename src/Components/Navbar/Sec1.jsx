// import './Sec1.css'
// import mic from '../../assets/mic.png'
// import bell from '../../assets/bell.png'
// import create from '../../assets/create.png'
// import more from '../../assets/more.png'
// import ellips41 from '../../assets/Ellipse 4 (1).png'
// import search from '../../assets/search.png'
// function Sec1() {
//     return(
//         <>
//         <div className="navbar">
//                 <div className="middle1">
//                     <div className='searchbar'><input type="text" placeholder="Search"/></div>
//                     <div className="searchion"><img src={search} alt="" /></div>
//                     <div className='mic'><img src={mic} alt=""/></div>
//                 </div>
//                 <div className="righttop">
//                     <div><img src={create} alt=""/></div>
//                     <div><img src={more} alt=""/></div>
//                     <div><img src={bell} alt=""/></div>
//                     <div><img src={ellips41} alt=""/></div>
//                 </div>
//             </div>
//             <div className="line2"></div>
//         </>
//     )
// }
// export default Sec1

import './Sec1.css';
import mic from '../../assets/mic.png';
import bell from '../../assets/bell.png';
import create from '../../assets/create.png';
import more from '../../assets/more.png';
import ellips41 from '../../assets/Ellipse 4 (1).png';
import search from '../../assets/search.png';
import { useState } from 'react';

function Sec1({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            onSearch(searchTerm); // Pass the search term to the parent component
        }
    };

    return (
        <>
            <div className="navbar">
                <div className="middle1">
                    <div className="searchbar">
                        <input
                            className='textbox'
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSearch();
                            }}
                        />
                    </div>
                    <div className="searchion" onClick={handleSearch}>
                        <img src={search} alt="Search Icon" />
                    </div>
                    <div className="mic">
                        <img src={mic} alt="Microphone" />
                    </div>
                </div>
                <div className="righttop">
                    <div><img src={create} alt="Create" /></div>
                    <div><img src={more} alt="More Options" /></div>
                    <div><img src={bell} alt="Notifications" /></div>
                    <div><img src={ellips41} alt="Profile" /></div>
                </div>
            </div>
            <div className="line2"></div>
        </>
    );
}

export default Sec1;
