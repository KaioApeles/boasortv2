import React, {Component} from 'react'
import './cadastro.css'

class DinamicSel extends Component{

  constructor(props){
    super(props)
    
    this.arrOpt = this.arrOpt.bind(this)
  }

  squad = [
    'Wilson Caixa',
    'Biano Oliveira',
    'Renato Fermiza'
  ]    
 
  arrOpt = () => this.squad.map(function(name, i){
    return <option key={i} value={i}>{name}</option>
  })   

  render(){    
    return(      
      <div className="form-group col-md-6">
      <label name="squadInput">Equipe</label>
      <select id="squadInput" className="form-control">
        <option key='Escolher' value='Escolher' selected >Escolher...</option>  
        {this.arrOpt()}
      </select>
    </div>
    )
  }
}

const cadastro = () =>{
  return(
    <div className='Form-boa'>
      <form>
        <h2><i className="fa fa-user-plus" aria-hidden="true"></i> Cadastrar Participante</h2>
        <hr></hr>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label name="inputName">Nome</label>
            <input type="text" className="form-control" id="inputName" placeholder="Nome" />
          </div>
          <div className="form-group col-md-6">
            <label name="inputPassword4">Senha</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Senha" autoComplete="password" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label name="sortIten">Iten da Sorte</label>
            <input type="text" className="form-control" id="sortIten" placeholder="Mandinga pra dar sorte" />          
          </div>
          <DinamicSel />
        </div>       
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
</div>
  )
}

export default cadastro