import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginScreen(){
    const router = useRouter();
    const [values, setValues] = useState({
      usuario: 'omariosouto',
      senha: 'safepassword',
    });
  
    function handleChange(event) {
      const fieldValue = event.target.value;
      const fieldName = event.target.name;
      setValues((currentValues) => {
        return {
          ...currentValues,
          [fieldName]: fieldValue,
        };
      })
    }
    
    return (
    <section className='vh-100 vw-100 d-flex flex-column justify-content-center align-items-center'>
        <h1>Login</h1>

        <form className='w-25'>
            <div className='d-flex flex-column'>
                <span className='material-icons-outlined'>person</span>
                <input className='form-control' type='text' name='user' id='user'/>
                <label htmlFor="user">Usuário</label>
            </div>

            <div className='d-flex flex-column'>
                <span className='material-icons-outlined'>lock</span>
                <input className='form-control' type='password' name='pass' id='pass'/>
                <label htmlFor="pass">Senha</label>
            </div>

            <div className='d-flex flex-column'>
                <input className='btn btn-md btn-cm-primary' type='submit' defaultValue='Logar'/>
            </div>
        </form>
    </section>
    );
}
