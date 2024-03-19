import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Admin() {

  const [post,setPost] = useState([])

  const [id,setId] = useState('')
  const [title,setTitle] = useState('')
  const [caption,setCaption] = useState('')
  const [img,setImage] = useState('')

  function generateRandom4DigitNumber(){
    return Math.floor(Math.random() * 9000) + 1000;
  }

  const handleCreate = (e)=>{

    axios.post("http://localhost:3003/posts",{
      "id":generateRandom4DigitNumber(),
      "title":title,
      "caption":caption,
      "image":img
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

    e.preventDefault()
  }
  
  useEffect(()=>{
    axios.get("http://localhost:3003/posts")
    .then(res=>setPost(res.data))
    .catch(err=>console.log(err))
  })

  const handleDelete = (id)=>{
    axios.delete(`http://localhost:3003/posts/${id}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  const [popup,setPopup] = useState(false)
  const [id1,setId1] = useState('')
  const [title1,setTitle1] = useState('')
  const [caption1,setCaption1] = useState('')
  const [img1,setImage1] = useState('')

  const openPopup = (x)=>{
    setPopup(true)
    setId1(x.id)
    setTitle1(x.title)
    setCaption1(x.caption)
    setImage1(x.image)
  }

  const handleUpdate = ()=>{
    axios.put(`http://localhost:3003/posts/${id1}`,{
      "id":id1,
      "title":title1,
      "caption":caption1,
      "image":img1
    })
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }

  return (
    <div className='AdminPage'>
      <div className='Container'>
        <form onSubmit={handleCreate}>
          <h2>ADD POST</h2>
          
          <div className='input-box'>
            <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}} required/>
            <span>Title</span>
          </div>
          
          <div className='input-box'>
            <input type='text' value={caption} onChange={(e)=>{setCaption(e.target.value)}} required/>
            <span>Caption</span>
          </div>

          <div className='input-box'>
            <input type='text' value={img} onChange={(e)=>{setImage(e.target.value)}} required/>
            <span>Image Link</span>
          </div>

          <div className='input-box'>
            <button type='submit'>Post</button>
          </div>
        </form>
        <div className='table-container'>
          <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Caption</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {post.map(x=>(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.title}</td>
                        <td>{x.caption}</td>
                        <td>
                          <img src={x.image} width={100} height={100}/>
                        </td>
                        <td>
                          <div className='btns'>
                            <button onClick={()=>{openPopup(x)
                            console.log("Upadate")}}>Update</button>
                            <button onClick={()=>handleDelete(x.id)}>Delete</button>
                          </div>
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
        <br />
      </div>
      {
        popup &&   <div className='popup'>
        <form onSubmit={handleUpdate}>
          <h2>UPDATE POST</h2>

          <div className='input-box'>
            <input type='text' value={id1} required/>
            <span>ID</span>
          </div>

          
          <div className='input-box'>
            <input type='text' value={title1} onChange={(e)=>{setTitle1(e.target.value)}} required/>
            <span>Title</span>
          </div>
          
          <div className='input-box'>
            <input type='text' value={caption1} onChange={(e)=>{setCaption1(e.target.value)}} required/>
            <span>Caption</span>
          </div>

          <div className='input-box'>
            <input type='text' value={img1} onChange={(e)=>{setImage1(e.target.value)}} required/>
            <span>Image Link</span>
          </div>

          <div className='input-box btns'>
            <button onClick={()=>setPopup(false)}>Close</button>
            <button type='submit'>Update</button>
          </div>
        </form>
      </div>
      }
    </div>
  )
}
