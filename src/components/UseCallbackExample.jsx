import React, { useState, useCallback } from 'react'
function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task'])
  }, [setTasks])

  const Button = React.memo(({ addTask }) => {
    console.log('Button has been rendered')
    return (
      <button className="btn btn-primary" onClick={addTask}>
        Add Task
      </button>
    )
  })

  return (
    <div>
      <h1>UseCallbackExample</h1>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}

export default UseCallbackExample
