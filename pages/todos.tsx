import { useState, useEffect,use } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Todo() {
    const [text,setText] = useState<string>("")
    const [imageUrl,setImageUrl] = useState<string>("")
    const router = useRouter();
 
    const handleInputChange = (event:any) => {
        setText(event.target.value);
    }
    
    const updateImage = () => {
        fetch('https://picsum.photos/200')
        .then(response => {
            setImageUrl(response.url);
        })
        .catch(error => {
            console.log(error);
        });
    }

     useEffect(() => {
        console.log("text is updated",text)
        fetch('https://picsum.photos/200')
        .then(response => {
            setImageUrl(response.url);
        })
        .catch(error => {
            console.log(error);
        });
    },[])

    return (

        <>
        <button onClick={() => { router.back() }}>Back</button>

        <h1>Todo Page</h1>
        <div>
            <input type="text" value={text} onChange={handleInputChange} />
            <p>You type : {text}</p>
        </div>

        <div>
        {imageUrl && <img src={imageUrl} alt="Random Image" />}

        <button onClick={updateImage}>Update Image</button>

        </div>
        </>

    );
}