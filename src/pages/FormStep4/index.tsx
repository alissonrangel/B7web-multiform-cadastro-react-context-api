import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect, useState, FormEvent } from 'react';

export const FormStep4 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        }else if( state.email === '' || state.github === '' ) {            
            history.push('/step3');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

    const handleNextStep = () => {
        alert("Seu cadastro foi enviado, aguarde o E-mail com o seu emprego!!!");
        let resumo = {
            name: state.name,
            email: state.email,
            github: state.github,
            nivel: state.level === 0 ? 'Iniciante':'Experiente'
        }
        console.log(resumo);
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 4/4</p>
                <h1>Legal {state.name}, cadastro completo!</h1>
                <p>Agora envie para nós o seu cadastro.</p>

                <hr/>                
                
                <label>
                    Nome
                    <input
                        readOnly
                        type="text"
                        value={state.name}                        
                    />
                </label>

                <label>
                    E-mail
                    <input
                        readOnly
                        type="text"
                        value={state.email}                        
                    />
                </label>

                <label>
                    Github
                    <input
                        readOnly
                        type="text"
                        value={state.github}                        
                    />
                </label>

                <label>
                    Nível
                    <input
                        readOnly
                        type="text"
                        value={state.level === 0 ? 'Iniciante':'Experiente'}                        
                    />
                </label>
                
                
                <button onClick={handleNextStep}>Enviar Cadastro</button>
                <Link to="/step3" className="backButton">Voltar</Link>    
                                                            
            </C.Container>
        </Theme>
    );
}