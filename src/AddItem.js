
import React, { useState } from 'react';
import Item from './Item';


const AddItem = () => {


  const [text, setText] = useState("")
  const [items, setItems] = useState([])


  const clickButton = (ev) => {
    if(text.length){
      const tempItems = items.slice(0)
      tempItems.push(text)
      setItems(tempItems)
    }
  }


  const excluirItem = index => {  
    const tempItems = items.slice(0)
    tempItems.splice(index, 1)
    setItems(tempItems) 
  }

  const salvarItem = (index, text) => {
    const tempItems = items.slice(0)
    tempItems[index] = text
    setItems(tempItems) 
  }


  const changeEdit = (ev) => setText(ev.target.value)



  return (    
    <div className="grid-container">
      <div className="grid-item">
        <input type="text" name="element" onChange={ changeEdit } />
        <button onClick={ clickButton } > adicionar </button>
      </div>
      
      { 
        items.map((e,index) => { 
          return <Item
                    key={ index }
                    index={ index } 
                    value={ e }
                    excluirItem={ excluirItem }
                    salvarItem={ salvarItem }
                    />
        }) 
      }

    </div>
  )

}

export default AddItem