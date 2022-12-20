import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useForm, FormActions } from '../../contexts/FormContext'
import * as C from './styles'
import {Theme} from '../../components/Theme/index'
import {SelectOption} from '../../components/SelectOption/index'

const FormStep2 = () => {

  const navigate = useNavigate()
  const {state, dispatch} = useForm()

  useEffect(() => {
    if(state.name === ""){
      navigate('/')
    }else{
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      })
    }
  })

  const handleNextStep = () => {
    navigate('/step3')
  }

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return (
    <Theme>
      <C.Container>
          <p>Passo 2/3</p>
          <h1>{state.name}, o que melhor descreve você?</h1>
          <p>Escolha a opção que melhor condiz com seu estado atual, profissonalmente</p>

          <hr/>

          <SelectOption 
            title="Sou iniciante"
            description="Comecei a programar a menos de 2 anos"
            icon="🥳"
            selected={state.level === 0}
            onClick={()=>setLevel(0)}
          />

          <SelectOption 
            title="Sou programador"
            description="Já programo há 2 anos ou mais"
            icon="😎"
            selected={state.level === 1}
            onClick={()=>setLevel(1)}
          />

          <div className='errorMessage'>Digite seu nome!</div>

          <Link to="/" className='backButton'>Voltar</Link>
          <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  )
}

export default FormStep2