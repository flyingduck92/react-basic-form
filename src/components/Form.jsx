import { useState } from 'react'

function Form() {
  let [items, setItems] = useState([])

  let [name, setName] = useState('')
  let [category, setCategory] = useState('')
  let [stock, setStock] = useState(0)
  let [price, setPrice] = useState(0)
  let [image, setImage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (name === '' || category === '' || stock === 0 || price === 0) {
      return
    }

    let newItem = {
      id: crypto.randomUUID(),
      name,
      category,
      stock,
      price,
      image,
    }
    setItems([...items, newItem])

    setName('')
    setCategory('')
    setStock(0)
    setPrice(0)
    setImage('')

    console.log('submit', items)
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' id='name' value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input type="text" name='category' id='category' value={category} onChange={e => setCategory(e.target.value)} />
        </div>
        <div>
          <label htmlFor="stock">Stock</label>
          <input type="text" name='stock' id='stock' value={stock} onChange={e => setStock(e.target.value)} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" name='price' id='price' value={price} onChange={e => setPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="text" name='image' id='image' value={image} onChange={e => setImage(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <br />
      <hr />
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              items.length > 0 ?
                (
                  items.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>{item.stock}</td>
                      <td>{item.price}</td>
                      <td>{item.image}</td>
                      <td className='flex-action'>
                        <button>Edit</button>
                        <button>Delete</button>
                      </td>
                    </tr>
                  ))
                )
                :
                (
                  <tr>
                    <td colspan="7">No data</td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Form