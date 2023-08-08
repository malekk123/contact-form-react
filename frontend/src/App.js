import React, { useState } from 'react'
import './App.css'
import Swal from 'sweetalert2'
import axios from 'axios';

export default function App() {
  const [form,setForm]= useState({
    name:'',
    phone:'',
    email:'',
    message:'',
  })
 /* const [name,setName] =useState("");
  const [phone,setPhone] =useState('');
  const [email,setEmail] =useState("");
  const [message,setMessage] =useState("");
*/
const handleInputChange =(event) =>{
  const {name,value}= event.target;
  setForm ({
    ...form,
  [name]: value })
}
  const handleSubmit = async(e) =>{
    e.preventDefault();
     await axios.post(
      '/api/sendEmail',form).then(res=>{
        console.log(form)
      }).then(()=>{
      setTimeout(() => {
        setForm({
          name:'',
          phone:'',
          email:'',
          message:'',
        })
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      }, 1000)
      
      })
     // Simulate a form submission
     /*try{
      setTimeout(() => {
        setForm({
          name:'',
          phone:'',
          email:'',
          message:'',
        })
        // Reset form fields
        /*setName('');
        setPhone('');
        setEmail('');
        setMessage('');
  */
        // Show success alert
        /*Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      }, 1000);*/
     .catch(()=>
     Swal.fire(
        'Problem of submittion',
        ' check the email address',
        'error')
     )}
    return (
    
      <div className='card-body'>
        <h1 className='form-title'>Contact us</h1>
       <form onSubmit={handleSubmit}>
      <div className='text-field'>
      <input type='text' className='form-control' required
      onChange={handleInputChange}
      value={form.name}
      name="name"
      ></input>
        <span></span>
      <label className='form-label'>Name: </label>
      </div>
      <div className='text-field'>
      <input type='text' className='form-control' required
      onChange={handleInputChange}
      value={form.phone}
      name='phone'
      ></input>
        <span></span>
        <label className='form-label'>Phone</label> 
      </div>
      <div className='text-field'>
      <input type='email ' className='form-control' required
      onChange={handleInputChange}
      value={form.email}
      name='email'
      >
        </input>
        <span className='textarea_span'></span>
        <label className='form-label' required>Email</label>
        
      </div>
      <div className='text-field'>
      <textarea className='form-control' 
      onChange={handleInputChange}
      value={form.message}
      name='message'
      style={{ minHeight: '100px', resize: 'vertical' }}

      ></textarea>
        <span className='textarea_span'></span>
        <label className='textarea_label'>Message</label>
      </div>
      <div className='button' >
      <button type='submit'
       style={{
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
      > Send </button>
      </div>
      </form>
      </div>

      
    
  )
}
