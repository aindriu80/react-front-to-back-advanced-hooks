import { useState, useEffect, useRef } from 'react'
import Todo from './Todo'
function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true)
  return (
    <div>
      <h1>useRef 3</h1>
      <h2>Memory Leak Error Fix</h2>
      return <div>{showTodo && <Todo />}</div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setShowTodo(!showTodo)
        }}>
        Click to Toggle
      </button>
    </div>
  )
}

export default UseRefExample3
