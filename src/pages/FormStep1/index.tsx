import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect, useState } from 'react';

export const FormStep1 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();
    const [hasName, setHasName] = useState(true);


    useEffect(() => {        
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
        if(state.name === '') {            
            setHasName(false);
        } 
    }, []);

    useEffect(() => {
        console.log("Entrou 2");        
        if ( !hasName ){
            setTimeout(() => {
                setHasName(true);
            }, 3000);
        }
    },[hasName])

    const handleNextStep = () => {
        if(state.name !== '') {
            history.push('/step2');
            setHasName(true);
        } else {
            setHasName(false);
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
        // if (e.target.value !== ''){
        //     setHasName(true);
        // }else{
        //     setHasName(false);
        //     console.log('HASNAME, ', hasName);            
        // }
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/4</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>                
                <hr/>
                {!hasName && 
                    <div className="error">Preencha seu nome!!!</div>
                }
                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}