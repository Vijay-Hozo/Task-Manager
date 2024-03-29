import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({setupdate}) => {
    const[title,settitle] = useState('')
    const[description,setdescription] = useState('')
    const[duedate,setduedate] = useState('')
    const[category,setcategory] = useState('')

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        const currentDate = new Date();

        if(selectedDate < currentDate.toISOString().split('T')[0]){
            alert('Please select a valid date');
            setduedate('');
        }else{
            setduedate(selectedDate);
        }
    }
   

    let count=0;
    //ADD
    const add = (e) => {
        fetch('https://task-manager-1imi.onrender.com/taskmanager-create',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title:title,
                description:description,
                duedate:duedate,
                category:category 
            })
        }).then((res) => res.json())
        .then(data => {
            console.log("Data received:", data); 
                console.log("Before reset:", { title, description, duedate, category }); 
                settitle('');
                setdescription('');
                setduedate('');
                setcategory('');
                setupdate(prev => !prev);
                console.log("After reset:", { title, description, duedate, category }); 
            })
            .catch(error => {
                console.error("Error:", error); 
            });
    }   

    
  return (
    <div className='w-[600px] h-screen bg-slate-200 rounded-r-lg flex flex-col items-center font-title'>
        <div className='text-xl gap-2 flex font-semibold'>
            <h1 className='text-violet-900 '>Add </h1>
            <span><h1 className='text-yellow-500'> Task</h1></span>
        </div>
    <div className='flex flex-col gap-4 text-xl'>
        <div>
            <h1>Title</h1>
            <input type="text" placeholder='Enter your Task' className='p-1 text-xl rounded-lg' onChange={(e)=>settitle(e.target.value)}/>
        </div>
        <div>
            <h1>Description</h1>
            <textarea name="Description" placeholder='Enter your description' id="" cols="23" rows="3" className='text-xl rounded-lg w-full' onChange={(d)=>setdescription(d.target.value)}></textarea>
        </div>
        <div>
            <h1>Date</h1>
            <input type="date" className='text-xl p-1 rounded-lg' onChange={handleDateChange}/>
        </div>
        <div>
            <h1>Category</h1>
            <select name="High" id="" className='text-xl p-1 rounded-lg' onChange={(e) => setcategory(e.target.value)}>
                <option value="">All</option>
                <option value="High">High</option>
                <option value="Low">Low</option>
            </select>
        </div>
        <div className='flex items-center'>
            <div className='flex justify-center items-center'>
                <Link to="/Body"><button className='bg-yellow-500 p-1 rounded-3xl' onClick={add}>Add Task</button></Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Sidebar