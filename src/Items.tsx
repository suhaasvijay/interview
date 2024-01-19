import React from 'react'

export const ItemList = (item, onEdit, onDelete) => {
  return (
    <>
      <ul>
        {item?.map((item, index) => {
          <li key={index}>
            {item?.isEditing ? (
              <>
                <input
                  type='text'
                  value={item.text}
                  onChange={(e) => onEdit(index, e.target.value)}
                />
                <button onClick={() => onEdit(index)}>Cancel</button>
              </>
            ) : (
              <>
                <p>{item.text}</p>
                <button onClick={() => onEdit(index, item.text)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
              </>
            )}
          </li>
        })}
      </ul>
    </>
  )
}

