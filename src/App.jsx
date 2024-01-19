import { useState } from 'react'

import './App.css'
import { ItemList } from './Items'


function App() {
  const item = [
    {
      text: "suhaas",
      isEditing: false
    },
    {
      text: "rahul",
      isEditing: false
    },
  ]
  const [items, setItems] = useState(item)
  console.log('%c 🍈 items: ', 'font-size:12px;background-color: #33A5FF;color:#fff;', items);

  const handelAddItem = () => {
    const newItem = { text: 'New element', isEditing: false }
    setItems([...item, newItem])
  }

  const handleEdit = (index, newText) => {
    const updatedItem = [...items];
    updatedItem[index] = { ...items[index], text: newText, isEditing: !items[index].isEditing };
    setItems(updatedItem)
  }

  const handleDelete = (index) => {
    const deletedItem = [...items];
    deletedItem.splice(index, 1);
    setItems(deletedItem)
  }

  return (
    <>
      <h1>Item List</h1>
      <button onClick={handelAddItem}>Add</button>
      <ItemList items={items} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  )
}

export default App
