

import { useState, useEffect } from "react"
import api from "../api/api"
import { FaTrashAlt } from "react-icons/fa";
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

    const handleDelete = async(id) => {
        if(!window.confirm('Are you sure you want to delete a confession?')) return;
        try{
           const response = await api.delete(`/confessions/${id}`)
           if(response.data.success){
            setConfessions(confessions.filter(c => c._id !== id))
            toast.success('Confession deleted successfully!')
           }
        }catch(err){
            toast.error(err.response.data.message)
        }
    }

    const formateDate = (dateString) => {
        const date = new Date(dateString)
        return date.toDateString() + ' ' + date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })
    }

    useEffect(() => {
        getConfessions()
    }, [])
    return(
        <div className="min-h-[calc(100vh-64px)] bg-gray-900 text-white p-6">
            <ToastContainer/>
            <div className="container">
                <h1 className="text-3xl font-bold mb-8 text-center text-purple-400">
                    My Confessions
                </h1>

                {loading ? (
                    <div className="text-center text-gray-400">Loading...</div>
                ) : (
                    <div className="w-full">
                        {confessions.length === 0 ? (
                            <p>
                                No confessions yet,  <Link to={'/post-confessions'}>Post a confession</Link>
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                                {confessions.map((confession) => (
                                    <div key={confession._id} className="bg-white p-4 rounded-md shadow-md text-black w-[20rem] relative">
                                        <h2 className="text-xl font-bold mb-5">{confession.title}</h2>
                                        <p className="text-sm">{confession.body}</p>
                                        <button onClick={() => handleDelete(confession._id)} className="absolute top-2 right-2 cursor-pointer">
                                        <FaTrashAlt className="text-red-600"/>
                                        </button>

                                        <span className="text-xs text-gray-600">
                                            {formateDate(confession.createdAt)}
                                        </span>
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