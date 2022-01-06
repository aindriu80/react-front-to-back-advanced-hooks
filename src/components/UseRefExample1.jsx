import { useRef } from 'react'

function UseRefExample1() {
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault(
      console.log('InputRef.current:', inputRef.current),
      console.log('inputRef.current.value:', inputRef.current.value),
      (inputRef.current.value = 'Set inputRef value to Hello'),
      (inputRef.current.style.backgroundColor = 'purple'),
      (paraRef.current.innerText = 'Goodbye')
    )
  }
  return (
    <div>
      <h1>useRef</h1>
      <h2>Create Dome Reference</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello <b>useRef</b> -> Click on this text to set focus on the input
          field above
        </p>
      </form>
    </div>
  )
}

export default UseRefExample1
