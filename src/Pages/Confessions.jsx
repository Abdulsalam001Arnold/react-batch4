

import { useState, useEffect } from "react"
import api from "../api/api"
import { ToastContainer, toast } from "react-toastify"
import { Link } from "react-router-dom"
export default function Confessions() {
    const [confessions, setConfessions] = useState([])
    const [loading, setLoading] = useState(true)

    const getConfessions = async () => {

        try{
           setLoading(true)

           const response = await api.get('/confessions')
           if(response.data.success){
            setConfessions(response.data.data)
            toast.success('Confessions loaded successfully!')
           }
        }catch(err){
            toast.error(err.response.data.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getConfessions()
    }, [])
    return(
        <div className="min-h-[calc(100vh-64px)] bg-gray-900 text-white p-6">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-3xl font-bold mb-8 text-center text-purple-400">
                    My Confessions
                </h1>

                {loading ? (
                    <div className="text-center text-gray-400">Loading...</div>
                ) : (
                    <div>
                        {confessions.length === 0 ? (
                            <p>
                                No confessions yet,  <Link to={'/post-confessions'}>Post a confession</Link>
                            </p>
                        ) : (
                            <div>
                                {confessions.map((confession) => (
                                    <div key={confession._id}>
                                        <h2>{confession.title}</h2>
                                        <p>{confession.body}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}