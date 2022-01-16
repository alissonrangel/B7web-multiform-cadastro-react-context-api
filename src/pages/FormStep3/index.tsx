import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect, useState, FormEvent } from 'react';

export const FormStep3 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();
    const[errors, setErrors] = useState<string[]>([])
    let [border, setBorder] = useState("#25CD89")

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
        if(state.email === '' && state.github === '') {
            setErrors(["Digite o email!!!","Digite o Github!!!"]);
            setBorder('red');
            setTimeout(() => {
                setBorder("#25CD89");                                                
                setErrors([]);
            }, 3000);
        }
    }, []);

    const handleNextStep0 = () => {
        if(state.name !== '') {
            history.push('/step3');
        } else {
            alert("Preencha os dados.");
        }
    }

    const handleNextStep = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(state.email !== '' && state.github !== '') {
            history.push('/step4');
        } else {
            let err: string[] = [];
            let email: HTMLElement | null = document.getElementById('email');
            let url: HTMLElement | null = document.getElementById('url');
            if (state.email === ''){                
                let er = 'Digite o email!!!';
                
                if ( email ){
                    email.style.borderColor = 'red';
                }
                err.push(er);            
            }
            if (state.github === ''){                
                let er = 'Digite o Github!!!';
                if ( url ){
                    url.style.borderColor = 'red';
                }
                err.push(er);
            }
            setErrors(err);

            setTimeout(() => {
                if ( email && url){
                    email.style.borderColor = '#25CD89';
                    url.style.borderColor = '#25CD89';
                }
                setErrors([]);
            }, 3000);
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container borderInputColor={border}>
                <p>Passo 3/4</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <hr/>
                {errors.length > 0 && 
                    errors.map((it, index)=>(
                        <div className="error" key={index}>{it}</div>
                    ))                    
                }
                <form onSubmit={handleNextStep}>
                    <label>
                        Qual seu e-mail?
                        <input
                            type="email"
                            value={state.email}
                            onChange={handleEmailChange}
                            id="email"
                        />
                    </label>

                    <label>
                        Qual seu GitHub?
                        <input
                            type="url"
                            value={state.github}
                            onChange={handleGithubChange}
                            id="url"
                        />
                    </label>
                    <input type="submit"  value="Próximo" />
                </form>

                <Link to="/step2" className="backButton">Voltar</Link>                
            </C.Container>
        </Theme>
    );
}