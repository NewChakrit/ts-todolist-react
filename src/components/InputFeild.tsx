import React from 'react'
import "./style.css"

const InputFeild = () => {
  return (
    <form className='input'>
        <input type="input" placeholder='Enter a task' className='input-box' />
        <button className='input-submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild