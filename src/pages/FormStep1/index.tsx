import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useEffect } from 'react'
import { useForm, FormActions } from '../../contexts/FormContext'
import * as C from './styles'
import {Theme} from '../../components/Theme/index'

const FormStep1 = () => {

  const navigate = useNavigate()
  const {state, dispatch} = useForm()
  // 1000 Milisegundos - 2 segundos = 2 Segundos
  let TIMER_HIDE_MESSAGEERROR = 1000 * 2

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  })

  const handleNextStep = () => {
    if(state.name !== ''){
      navigate('/step2')
    }else{
      document.querySelector('.errorMessage')?.classList.add('show')
      setTimeout(() => {
        document.querySelector('.errorMessage')?.classList.remove('show')
      }, TIMER_HIDE_MESSAGEERROR);
    }
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <C.Container>
          <p>Passo 1/3</p>
          <h1>Vamos começar com o seu nome</h1>
          <p>Preencha o campo abaixo com o seu nome completo.</p>

          <hr/>

          <label>
            Seu nome completo
            <input 
              type="text"
              autoFocus
              value={state.name}
              onChange={handleNameChange}
            />
          </label>
          <div className='errorMessage'>Digite seu nome!</div>

          <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  )
}

export default FormStep1