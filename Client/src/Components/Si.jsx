import React from 'react'
import './style.css'
export const Si = () => {
  return (
    <>
    <div className='container'>
        <div className='content'>
            <h1>Signup</h1>
            <form>
                <div className='form-group'>
                    <label for='name'>Name</label>
                    <input type='text' id='name' name='name' />
                </div>
                <div className='form-group'>
                    <label for='email'>Email</label>
                    <input type='email' id='email' name='email' />
                </div>
                <div className='form-group'>
                    <label for='password'>Password</label>
                    <input type='password' id='password' name='password' />
                </div>
                <div className='form-group'>
                    <button type='submit'>Signup</button>
                </div>
            </form>
            </div>
    </div>
    </>
  
  )
}
