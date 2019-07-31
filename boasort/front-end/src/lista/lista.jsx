import React, {Component, useState, useEffect} from 'react'
import './lista.css'

function List(){

  const [myList, setMyList] = useState([])

  useEffect( () =>{

    async function fetchMyList() {

    const response = await fetch('http://localhost:3333/get/all')
    const data = await response.json()    

    setMyList(data.data)
    }
    fetchMyList()
  }, [])

  console.log(myList)

  async function justDelete(item){
    const doDelete = await fetch('http://localhost:3333/auth/delete', {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },      
      body:  JSON.stringify({
	      name: item.name
      })
    })

    const response = await doDelete.json()
    console.log(response)
    
    return response    
  }

  async function changeTodisable(item){
    const disabled = await fetch(`http://localhost:3333/disabled/${item._id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },      
      body:  JSON.stringify({
	      disabled: item.disabled
      })
    })

    const response = await disabled.json()
    console.log(response)
    
    return response   
  }

  function loadList (){
    return (
    <>
      {myList.map(item =>(
        <tr>
          <td>{item.name}</td>
          <td>{item.team}</td>
          <td>{item.luckyItem}</td>
          {drawBT(item)}
        </tr>
      ))}
    </>
    )
  }

  function drawBT(item){    
      return(
        <td>
          <button className='btn btn-danger mt-0' onClick={() => justDelete(item)} ><i className={'fa fa-trash-o'}></i></button>
          <button className='btn btn-warning mt-0' onClick={() => changeTodisable(item)} ><i className={'fa fa-clock-o'}></i></button>
        </td>
      )  
  }
 
  const drawTB = () => {
    return (
      <div className='div-lista'>  
        <h2><i className="fa fa-user" aria-hidden="true"></i> Lista de Participantes</h2>    
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Nome</th>
              <th scope='col'>Equipe</th>
              <th scope='col'>Mandinga</th>
              <th scope='col'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {loadList()}
          </tbody>
        </table>
      </div>
    )
  }

  return(
    <>
    {drawTB()}
    </>
  )
}


export default List