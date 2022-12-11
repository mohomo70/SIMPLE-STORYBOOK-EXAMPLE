import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../lib/store'
import TaskList from './TaskList'
import { Header } from './Header'

export default function InboxScreen() {
  const dispatch = useDispatch()
  const [user, setUser] = React.useState()
  const { error } = useSelector((state) => state.taskbox)
  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  if (error) {
    return (
      <div className='page lists-show'>
        <Header
          user={user}
          onLogin={() => setUser({ name: 'حسین محمدی' })}
          onLogout={() => setUser(undefined)}
          onCreateAccount={() => setUser({ name: 'حسین محمدی' })}
        />
        <div className='wrapper-message'>
          <span className='icon-face-sad' />
          <p className='title-message'>Oh no!</p>
          <p className='subtitle-message'>Something went wrong</p>
        </div>
      </div>
    )
  }
  return (
    <div className='page lists-show'>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'حسین محمدی' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'حسین محمدی' })}
      />
      <TaskList />
    </div>
  )
}
