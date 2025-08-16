import { useState } from 'react'

const EventHandler = () => {
  const [number, setNumber] = useState(0)
  const [name, setName] = useState('')

  const increaseHandler = () => {
    number < 10 ?
      setNumber(prev => prev + 1) :
      alert('Max Number 10')
  }

  const decreaseHandler = () => {
    number > 0 ?
      setNumber(prev => prev - 1) :
      alert('Min Number 0')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hello, ${name}`)
  }

  return (
    <>
      <div>
        <h1>{number}</h1>
        <button onClick={increaseHandler}>Increase by 1</button>
        <button onClick={decreaseHandler}>Decrease by 1</button>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={e => setName(e.target.value)} />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}

export default EventHandler