import { useState } from 'react';  
import axios from 'axios';  

export default function YouTubeSearch() {
        const [videos, setVideos] = useState([]);  
        const [query, setQuery] = useState('');  
        const [loading, setLoading] = useState(false);  
        
        const API_KEY = 'AIzaSyBFXsb8mxRCySRQmHL_9C0DUIu-r35KwM4'; 

        const searchVideos = async () => { 
            if (!query) return;
            setLoading(true);  
            try {  
                const response = await axios.get( `https://www.googleapis.com/youtube/v3/search`, 
                {  
                    params: {  
                        part: 'snippet',  
                        q: query,  
                        key: API_KEY,  
                    }  
                });  
                setVideos(response.data.items); // Set the videos state with the results  
            } catch (error) {  
                console.error('Error fetching data from YouTube API', error);  
 +           } finally {  
                setLoading(false);  
            }  
        };  
    return (  
        <div className="flex flex-col items-center w-full gap-10">    
            <input  
                className="border-slate-800 border-2 p-2"
                type="text"  
                value={query}  
                onChange={(e) => setQuery(e.target.value)}  // Update query state on change  
                placeholder="Search..."  
            />  
            <button onClick={searchVideos}>Search</button> 
            {loading ? ( // Displaying loading text ps:dont forget to change it to the red line 
                <p>Loading...</p> ) : (
            <div>  
                {videos.map(video => (  
                    <div key={video.id.videoId} className="rounded-md shadow-sm w-1/5"> 
                        <video
                        src={video.snippet.thumbnails.default.url} 
                        alt={video.snippet.title} 
                        className="w-full aspect-video" >
                        </video>
                        <h2>{video.snippet.title}</h2>  
                        <p>{video.snippet.description}</p>  
                    </div>  
                ))}  
            </div>
            )}
        </div>  
    );  
    }