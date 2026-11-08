import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from './../../node_modules/axios/lib/axios';
import Update from './Update';
const Todo = () => {

    const [tasks,setTasks] =useState({
        task:"",
        done : false
    })
    const [updateingTask,setupdateingTask] = useState({
        task:"",
        done : false
    })
    const [popup,setpopup] = useState(false)

    const [todos,setTodos] = useState([])
    useEffect(()=>{
        callApi()
    },[])

    const callApi=async()=>{
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/todo/")
            setTodos(response.data)
        } catch (error) {
            console.log("Error:" ,error)
        }
    }
    const handelInput =(e)=>{
        const {name,value}=e.target
        setTasks({
            ...tasks,
            [name]:value
        })
    }

    const handelSubmit= async (e)=>{
        e.preventDefault()
        console.log(tasks)

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/todo/",tasks)
            console.log(response.data)
            setTodos([...todos,response.data])
            setTasks({
                task: "",
                done: false
            }) 
        } catch (error) {
            alert(error.response.data.task)
        }
    }

    const handelDelete= async (id)=>{
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/todo/${id}/`)
            console.log(response.data)
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        

        } catch (error) {
            console.log(error)
        }
    }

    const handelUpdate =(task)=>{
        setupdateingTask(task)
        setpopup(true)
    }


    return (
        <div>
            <div className='bg-slate-500 w-[80vw] h-[80vh] m-auto my-3 rounded-2xl px-20 py-10'>
                <h1 className="text-5xl text-white">Todo Lists</h1>
                <form className='mt-10' onSubmit={handelSubmit}>
                    <input className='border px-2 py-0 border-white w-[50%] h-[40px] rounded placeholder:text-gray-200 text-green-200' type="text" placeholder="Enter your task"  name='task'  onChange={handelInput} value={tasks.task}/>
                    <button className='ml-5 border-0 bg-green-300 px-20 py-1 rounded-2xl text-2xl hover:bg-green-400 hover:text-gray-900 hover:cursor-pointer active:bg-gray-400  active:scale-95' type="submit">Add</button>
                </form>

                <div className="overflow-x-auto p-6   mt-20">

                    <table className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">

                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="py-4 px-6 text-left text-lg">
                                    Task
                                </th>

                                <th className="py-4 px-6 text-center text-lg">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-gray-700">

                            {
                                todos.map((todo)=>(
                                    <tr key={todo.id} className="border-b hover:bg-gray-50 transition duration-200">

                                        <td className="py-4 px-6">{todo.task}</td>

                                        <td className="py-4 px-6 text-center space-x-2">

                                            <button onClick={()=>{handelUpdate(todo)}} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:cursor-pointer active:bg-gray-400  active:scale-95'">
                                                Update
                                            </button>

                                            <button onClick={()=>{handelDelete(todo.id)}} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:cursor-pointer active:bg-gray-400  active:scale-95'">
                                                Delete
                                            </button>

                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>

                </div>

            </div>

            {
                popup && <Update updateingTask={updateingTask} setpopup={setpopup} popup={popup} callApi={callApi}/>
            }
        </div>
    );
};

export default Todo;