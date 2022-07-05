import axios from 'axios'
import React, { useState, useEffect } from "react";

const getRandomComic = () => {
    let random =  parseInt(Math.random() * (2641 - 1) + 1);
    //let urlChevere = `https://xkcd.com/${random}/info.0.json`
    let url = '/'+random+'/info.0.json'
    console.log({url})
    return axios.get(url)
}

function Comic() {
  const [comic, setComic] = useState({})
  const [number, setNumber] = useState(0)
  useEffect(()=>{
    getRandomComic().then((result)=>{
        setComic(result.data)
        setTimeout(()=>setNumber(10), 3000); 
    }) 
  },[])
  return (
      <div className="comic">
        <div className="comic-image-container">
            <p>{number}</p>
          <img className="comic-image" src={comic.img} alt={comic.alt} />
        </div>
        <div className="comic-desc-container">
          <div className="comic-desc">
            <div className="comic-title">{comic.safe_title}</div>
          
            <div className="comic-published-date">Publish date {comic.year+'/'+comic.month+'/'+comic.day}</div>
            <div>
              Transcript:
              <div className="transcript-container">
                <p>
                    {comic.transcript}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Comic;
