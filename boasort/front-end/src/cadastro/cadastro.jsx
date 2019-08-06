import React, {Component} from 'react'
import { Redirect } from 'react-router'
import './cadastro.css'

class DinamicSel extends Component{

  constructor(props){
    super(props)
    
    this.arrOpt = this.arrOpt.bind(this)
    this.showSel = this.showSel.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.update = this.update.bind(this)
    this.alertMsg = this.alertMsg.bind(this)
    
    this.state = {
      name: '',
      password: '',
      sortIten: '',
      squadInput: ''
    }
  }

  squad = [
    'Wilson Caixa',
    'Biano Oliveira',
    'Renato Fermiza'
  ]    
  
  showSel = (event) => {
    return(
      <div className="form-group col-md-6">
        <label name="squadInput">Equipe</label>
        <select id="squadInput" className="form-control" onChange={(event) => this.handleChange(event)}>
          <option key='Escolher' value='Escolher' selected >Escolher...</option>  
          {this.arrOpt()}
        </select>
      </div>
    )
  }

  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.id)
    console.log(event.target.value)
    this.setState({ [event.target.id]: event.target.value })
  }

  submitForm = (event) =>{
    event.preventDefault();

    let obj = {}
    obj.name = this.state.inputName
    obj.email = this.state.inputEmail
    obj.team = this.state.squadInput
    obj.luckyItem = this.state.sortIten
    obj.password = this.state.inputPassword
    obj.disabled = false

    console.log(obj)    

    return this.update(obj)
  }

  async update(obj){
      const update = await fetch('http://localhost:3333/auth/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
        body:  JSON.stringify(obj)
      })
        const response = await update.json()
        
        if(response.error === 'Registration failed'){
          {this.alertMsg('danger')}
          return console.log('aqui fica um futuro notify')
        }                  
        console.log(response.error)

        return this.props.history.push('/lista');

      
  }

  alertMsg = (type) => {
    return (
      <div className={`alert alert-`+type} role="alert"></div>
    )
  }
  
  arrOpt = () => this.squad.map(function(name, i){
    return <option key={i} value={name}>{name}</option>
  })   

  render(){    
    return(      
      <div className='Form-boa'>
        <form>
          <h2><i className="fa fa-user-plus" aria-hidden="true"></i> Cadastrar Participante</h2>
          <hr></hr>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label name="inputName">Nome</label>
              <input type="text" className="form-control" id="inputName" placeholder="Nome"  onChange={(event) => this.handleChange(event)} />
            </div>
            <div className="form-group col-md-6">
              <label name="inputEmail">Email</label>
              <input type="text" className="form-control" id="inputEmail" placeholder="Email" onChange={(event) => this.handleChange(event)}  />
            </div>
            <div className="form-group col-md-6">
              <label name="inputPassword">Senha</label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Senha" autoComplete="password" required onChange={(event) => this.handleChange(event)}  />
            </div>
            <div className="form-group col-md-6">
              <label name="inputPassword">Confirma Senha</label>
              <input type="password" className="form-control" id="inputPassword2" placeholder="Senha" autoComplete="password" required onChange={(event) => this.handleChange(event)}  />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label name="sortIten">Iten da Sorte</label>
              <input type="text" className="form-control" id="sortIten" placeholder="Mandinga pra dar sorte"  onChange={(event) => this.handleChange(event)} />          
            </div>
            {this.showSel()}
          </div>       
          <button type="submit" className="btn btn-primary" onClick={(event) => this.submitForm(event)}>Cadastrar</button>
        </form>
        
      </div>
    )
  }
}

export default DinamicSel