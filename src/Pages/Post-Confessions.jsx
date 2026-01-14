

import api from "../api/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Loader from "../components/Loader"
import { ToastContainer, toast } from "react-toastify"

export default function PostConfessions() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async(event) => {
        event.preventDefault()

        try{
            setLoading(true)
            const response = await api.post('/confessions', {title, body})

            if(response.data.success){
                toast.success('Confession posted successfully!')
                navigate('/confessions')
            }else{
                toast.error(response.data.message)
            }
        }catch(err){
            toast.error(err.response.data.message)
        }finally{
            setLoading(false)
        }
    }

    return(
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-[3rem]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/anime-girl-crazy.jpg"
            className="mx-auto w-30"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Post your confession
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  autoComplete="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Confession
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  id="body"
                  name="body"
                  type="text"
                  required
                  autoComplete="body"
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? <Loader/> : "Post confession"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}