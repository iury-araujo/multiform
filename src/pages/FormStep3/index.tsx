import { useNavigate, Link } from 'react-router-dom'
import { ChangeEvent, useEffect } from 'react'
import { useForm, FormActions } from '../../contexts/FormContext'
import * as C from './styles'
import {Theme} from '../../components/Theme/index'

const FormStep3 = () => {

  const navigate = useNavigate()
  const {state, dispatch} = useForm()
  // 1000 Milisegundos - 2 segundos = 2 Segundos
  let TIMER_HIDE_MESSAGEERROR = 1000 * 2

  useEffect(() => {
    if(state.name === ""){
      navigate('/')
    }else{
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      })
    }
  })

  const handleNextStep = () => {
    if(state.email !== '' && state.github !== ""){
      navigate('/step3')
    }else{
      if(state.email === ""){
        document.querySelector('.emailMessage')?.classList.add('show')
      }else{
        if(state.github === ""){
          document.querySelector('.githubMessage')?.classList.add('show')
        }
      }
      setTimeout(() => {
        document.querySelectorAll('.errorMessage').forEach((item, index) => {
          item.classList.remove('show')
        })
      }, TIMER_HIDE_MESSAGEERROR);
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleGitHub = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <C.Container>
          <p>Passo 3/3</p>
          <h1>Legal {state.name}, onde te achamos?</h1>
          <p>Preencha com seus dados para conseguirmos entrar em contato.</p>

          <hr/>

          <label>
            Qual seu e-mail?
            <input 
              type="email"
              value={state.email}
              onChange={handleEmailChange}
            />
          </label>
          <div className='errorMessage emailMessage'>Digite seu email!</div>

          <label>
            Qual seu github?
            <input 
              type="url"
              value={state.github}
              onChange={handleGitHub}
            />
          </label>
          <div className='errorMessage githubMessage'>Digite seu github!</div>

          <Link to="/step2" className='backButton'>Voltar</Link>
          <button onClick={handleNextStep}>Finalizar cadastro!</button>
      </C.Container>
    </Theme>
  )
}

export default FormStep3