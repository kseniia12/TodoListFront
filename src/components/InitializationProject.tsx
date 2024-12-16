import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../hooks';
import { thunkGetUser, thunkLoginUser } from './store/thunk';

export default function InitializationProject() {

  const [initialization, setInitialization] = useState(false)
  const token = localStorage.getItem('token');
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (token) {
      
      const user = dispatch(
        thunkGetUser({
          token
        })
      )
      console.log(user)
     setInitialization(true)
    }
  }, []);


  return (
    <div>
      
    </div>
  )
}
