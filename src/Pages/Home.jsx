
import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import {toast, ToastContainer} from "react-toastify"

export default function Home() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const handleFetch = async () => {
            try{
                const res = await fetch('https://dragonball-api.com/api/characters')

                if(res.ok) {
                    toast.success('Characters fetched successfully')
                    const data = await res.json()
                    console.log(data)
                    const resultArray = data.items
                    setCharacters(resultArray)
                }else{
                    toast.error('Failed to fetch characters')
                }
            }catch(err){
                console.log(err)
            }
        }


        handleFetch()
    }, [])


    return(
        <div className="mt-[3rem]">
            <ToastContainer/>
            <h2>
                This is my home page
            </h2>

            <Link to="/post-confessions">
                <button>
                    Post Confession
                </button>
            </Link>


            <div className="mt-9 flex flex-col item-center w-full justify-center">
                {characters.map((character) => (
                    <div>
                        <h1>
                            {character.name}
                        </h1>

                        <img src={character.image} width={800}/>
                    </div>
                ))}
            </div>
        </div>
    )
}