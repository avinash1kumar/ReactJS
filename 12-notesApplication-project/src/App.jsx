import React from 'react';
import { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {
  
  const [title, setTitle] = useState('')
  const [textarea, setTextarea] = useState('')
  const [task, setTask] = useState([])

  const submitHandling = (e) => {
    e.preventDefault();
    // console.log(title,textarea)

    const copyTask = [...task];
    copyTask.push({title, textarea})
    console.log(copyTask)

    setTask(copyTask) // es line ka mtlb: jaise jaise button per click kare waise waise array me add hote rhe. agar ye line nhi likhte toh pahle walla value current value se replace hote jyta aur array me sirf ek hi value rah jyta.
    console.log(copyTask)

    setTitle('')
    setTextarea('')
  }

  const deleteNotes = (idx) => {
    // console.log('note deleted')
    const copytTask = [...task];
    // console.log(idx)

    copytTask.splice(idx,1)
    setTask(copytTask)
  }


  return (
    <div className='h-full lg:h-screen lg:flex bg-black text-white '>
      <form 
      onSubmit={
        (e) => {
          submitHandling(e)
        }
      }
      className='flex p-10 gap-2 flex-col lg:w-1/2'>
        <h1 className='text-2xl font-semibold text-white'
        >Add Notes</h1>

        {/* INPUT FOR HEADING  */}
        <input 
          type="text"
          placeholder='Enter notes heading'
          className='px-5 py-4 border-2 rounded outline-none font-medium'
          value={title} 
          onChange={(e) => {
             setTitle(e.target.value);
          }}
        />  

        {/* AREA TO WRITE TEXT  */}
        <textarea 
          placeholder='Write Details' 
          type='text'
          className='px-5 py-2 border-2 rounded h-24 outline-none font-medium' 
          value={textarea}
          onChange={(e) => {
            setTextarea(e.target.value)
          }}
        />

        {/* BUTTON  */}
        <button 
        className='outline-none bg-cyan-900 text-black px-5 py-1 rounded font-medium active:bg-neutral-900'>
          Add Notes
        </button>

      </form>

      <div className='lg:w-2/2 p-10'>

        <h1 className='text-2xl font-semibold text-white mb-2'
        >Recent Notes</h1>

        <div className='flex flex-wrap gap-4 h-full overflow-auto'>
          
          {task.map(function(elem,idx){
          
            return <div className=' relative h-fit w-80 rounded-xl bg-[url(https://imgs.search.brave.com/4i-kuqeolpCBtB8uUaTXrKz8PNO1Gnlxvli4io6f8Rs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY5NC9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw)] bg-cover text-black p-3 overflow-auto hide-scrollbar'>
              <h2 
               onClick={()=>{
                deleteNotes(idx)
               }}
               className='absolute top-5 right-3 bg-black text-gray-200 rounded cursor-pointer active:scale-95'><X />
              </h2>

              <h3 className='mt-2 leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-serif text-gray-500 '>{elem.textarea}</p>
            </div>
          })}
          
          
          
        </div>

      </div>
    </div>
  );
};

export default App;