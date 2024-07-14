import React from "react";

export default function Content(){
    const [memeArray,setMemeArray] = React.useState([]);
    const [meme,setMeme] = React.useState({
        toptext:"",
        bottomtext:"",
        randomURL:"http://i.imgflip.com/1bij.jpg"
    })

    React.useEffect(()=>{
        async function getMeme(){
            const result = await fetch('https://api.imgflip.com/get_memes')
            const data = await result.json()
            setMemeArray(data.data.memes)
        }
        getMeme()
    },[])

    function getImage(event){
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        console.log(url)
        setMeme((prevMeme)=>({
            ...prevMeme,
            randomURL:url
        }))
    }

    function handleChange(event){   
        const {name,value} = event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }   
    return(
        <div className="main-cont">
            <form>
                <label>Top Text</label>
                <input
                placeholder="Come on"
                type="text"
                name="toptext"
                value={meme.toptext}
                onChange={handleChange}/>
                <label>Bottom Text</label>
                <input
                placeholder="Get out you fool"
                type="text"
                name="bottomtext"
                value={meme.bottomtext}
                onChange={handleChange}
                />
                <button
                onClick={getImage}>Generate Meme Image</button>
            </form>
            <div className="meme-sec">
            <img className="memeImage" src={meme.randomURL} />
            <h2 className="meme-top">{meme.toptext}</h2>
            <h2 className="meme-bottom" >{meme.bottomtext}</h2>
            </div>
        </div>
    );
}