
import React, { useState } from 'react';


  
const Item = (props) => {

  const styleIn = {
    label: { float: 'left', display: 'block' },
    edit: { float: 'left', display: 'none' }
  }

  const styleBlueIn = {
    label: { float: 'left', display: 'block', backgroundColor: 'blue' },
    edit: { float: 'left', display: 'none' }
  }
  
  const styleOut = {
    label: { float: 'left', display: 'none' },
    edit: { float: 'left', display: 'block' }
  }

  
  const [style, setStyle] = useState(styleIn)
  const [text, setText] = useState(props.value)
  

  const validarTexto = (text) =>  text.indexOf('estudar') > -1 || text.indexOf('ler') > -1

  
  const excluirItem = () => props.excluirItem(props.index)

  const salvarItem = () => {
    props.salvarItem(props.index, text)

    if( validarTexto(text) ){
      setStyle(styleBlueIn)
    }else{
      setStyle(styleIn)
    }
    
  }

  const clickEditar = () => setStyle(styleOut)

  const onChangeEdit = (ev) => setText(ev.target.value)


  return (
    <div className="grid-item">


      <input type="checkbox" name="elementCheck" style = {{ float: 'left' }}/>
      
      <label
        onClick={ clickEditar } 
        style={ style.label }
        >{ props.value }
      </label>
      
      <input 
        type="text" 
        name={ "elementdit"+props.index }
        id={ "elementdit"+props.index }
        onBlur={ salvarItem }
        onChange={ onChangeEdit } 
        value={ text }
        style={ style.edit }
      />
      
      <button 
        onClick={ excluirItem }
        style = {{ float: 'right' }}
        > X </button>
    
    </div>
  )

}

export default Item