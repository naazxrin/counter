import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../redux/counterSlice'

const Counter = () => {
  const handleIncrementAmount=()=>{
    if(amount){
// action dispatch
dispach(incrementByAmount(amount))
    }else{
      alert("please enter valid input!!!")
    }
  }
  const [amount,setamount]=useState(0)
  const {count} =useSelector(state=>state.counterReducer)
  const dispach =useDispatch()
  return (
    <div className='border rounded p-5 text-center'>
<h1 style={{fontSize:'100px'}}>{count}</h1>
<div style={{width:'500px'}} className='d-flex justify-content-between my-5'>
<button onClick={()=>dispach(decrement())}  className='btn btn-warning text-light'>Decrement</button>
<button onClick={()=>dispach(reset())}  className='btn btn-danger text-light'>Reset</button>
<button onClick={()=>dispach(increment())} className='btn btn-success text-light'>Increment</button>
</div>
<div className='d-flex justify-content-center aliagn-items-center'>
<input onChange={e=>setamount(e.target.value)} placeholder='input the amount to be increment' type="text" className='form-control' />
<button onClick={handleIncrementAmount} className='btn btn-primary ms-3'>Increment by Amount</button>
</div>
    </div>
  )
}

export default Counter