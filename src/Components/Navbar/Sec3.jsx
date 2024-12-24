// import './Sec3.css'
// import { useState } from 'react'
// import { useEffect } from 'react'
// function Sec3(){

//     const[vidios,setvidios]= useState([])
//     useEffect(()=>{
//         fetch("AIzaSyCPQCmdlUqzp62dHQMYBhbwSHVTGK1f_FM")
//         .then((response) => response.json())
//         .then((data)=>{
//             setvidios(data)
//         })
//     },[])

//     return(
//         <>
//         <div className="alltogether">
//             {vidios.map((i)=>(
//                 <div key={i.id} className="thumnail">
//                     <div className="bigimg">
//                         <img src={`https://youtubereact-server.onrender.com${i.image1}`} alt="" />
//                     </div>
//                     <div className="information">
//                         <div className="smallimage"><img src={`https://youtubereact-server.onrender.com${i.image2}`} alt="" /></div>
//                         <div className="info">
//                             <div className="info1">{i.txt1}</div>
//                             <div className="imgandtxt">{i.txt2} <img src={`https://youtubereact-server.onrender.com${i.image3}`} alt="" /></div>
//                             <div className="lasttxt">{i.txt3}</div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         </>
//     )
// }
// export default Sec3


// import './Sec3.css';
// import { useState } from 'react';

// function Sec3() {
//     const [videos, setVideos] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedVideoId, setSelectedVideoId] = useState(null);

//     const API_KEY = 'AIzaSyCPQCmdlUqzp62dHQMYBhbwSHVTGK1f_FM'; // Replace with your API key
//     const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

//     // Fetch videos based on the search term
//     const fetchVideos = async (query) => {
//         try {
//             const response = await fetch(
//                 `${BASE_URL}?part=snippet&maxResults=10&q=${query}&key=${API_KEY}`
//             );
//             const data = await response.json();
//             setVideos(data.items || []); // `items` contains the search results
//         } catch (error) {
//             console.error('Error fetching videos:', error);
//         }
//     };

//     // Handle search button click
//     const handleSearch = () => {
//         if (searchTerm.trim() !== '') {
//             fetchVideos(searchTerm);
//         }
//     };

//     // Handle video click to play
//     const handleVideoClick = (videoId) => {
//         setSelectedVideoId(videoId);
//     };

//     return (
//         <div className="sec3-container">
//             <div className="search-bar">
//                 <input
//                     type="text"
//                     placeholder="Search videos..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <button onClick={handleSearch}>Search</button>
//             </div>

//             <div className="alltogether">
//                 {selectedVideoId ? (
//                     // Video player for the selected video
//                     <div className="video-player">
//                         <iframe
//                             width="560"
//                             height="315"
//                             src={`https://www.youtube.com/embed/${selectedVideoId}`}
//                             frameBorder="0"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                             title="YouTube Video"
//                         ></iframe>
//                         <button onClick={() => setSelectedVideoId(null)}>Back to Results</button>
//                     </div>
//                 ) : (
//                     // Thumbnails for search results
//                     videos.map((video) => (
//                         <div
//                             key={video.id.videoId}
//                             className="thumbnail"
//                             onClick={() => handleVideoClick(video.id.videoId)}
//                         >
//                             <div className="bigimg">
//                                 <img
//                                     src={video.snippet.thumbnails.high.url}
//                                     alt={video.snippet.title}
//                                 />
//                             </div>
//                             <div className="information">
//                                 <div className="info1">{video.snippet.title}</div>
//                                 <div className="info2">{video.snippet.channelTitle}</div>
//                                 <div className="lasttxt">{video.snippet.description}</div>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Sec3;
// export default Sec3;
// export default Sec3;
// export default Sec3;
// export default Sec3;
import Sec1 from './Sec1';
import Sec2 from './Sec2';
import './Sec3.css';
import { useState } from 'react';

function Sec3() {
    const [videos, setVideos] = useState([]);
    const [selectedVideoId, setSelectedVideoId] = useState(null);
    const [maxResults, setMaxResults] = useState(10); // Default to 10
    const [lastSearchTerm, setLastSearchTerm] = useState(''); // Store the last search term

    const API_KEY = 'AIzaSyCFRGCMQKKE6V7q2q7vZvfxBgW_CeqTTx8';
    const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

    // Function to fetch videos from the server     
    const fetchVideos = (query) => {
        if (query.trim() === '') {
            alert('Please enter a valid search term.');
            return;
        }

        setLastSearchTerm(query); // Save the last search term
        fetch(`${BASE_URL}?part=snippet&maxResults=${maxResults}&q=${query}&key=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                setVideos(data.items || []);
            })
            .catch((error) => {
                console.error('Error fetching videos:', error);
            });
    };

    // Function to handle maxResults update
    const handleMaxResultsUpdate = (newMaxResults) => {
        setMaxResults(newMaxResults); // Update maxResults
        fetchVideos(lastSearchTerm); // Re-fetch videos with the updated maxResults
    };

    // Variable to store the video components
    const videoComponents = videos
        .slice(0, maxResults) // Limit the number of videos to maxResults
        .map((video) => (
            <div
                key={video.id.videoId}
                className="thumbnail"
                onClick={() => setSelectedVideoId(video.id.videoId)}
            >
                <div className="bigimg">
                    <img
                        src={video.snippet.thumbnails.high.url}
                        alt={video.snippet.title}
                    />
                </div>
                <div className="information">
                    <div className="info1">{video.snippet.title}</div>
                    <div className="info2">{video.snippet.channelTitle}</div>
                </div>
            </div>
        ));

    return (
        <>
            <Sec2 onTopicSelect={fetchVideos} />
            <Sec1 onSearch={fetchVideos} onMaxResultsUpdate={handleMaxResultsUpdate} />
            <div className="alltogether">
                {selectedVideoId ? (
                    <div className="video-player">
                        <iframe
                            width="100%"
                            height="400px"
                            src={`https://www.youtube.com/embed/${selectedVideoId}?rel=0&modestbranding=1&showinfo=0`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube Video"
                        ></iframe>
                        <button onClick={() => setSelectedVideoId(null)}>Back to Results</button>
                    </div>
                ) : (
                    videoComponents
                )}
            </div>
        </>
    );
}

export default Sec3;


