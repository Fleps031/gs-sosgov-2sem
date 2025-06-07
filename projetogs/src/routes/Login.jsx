import { useState } from 'react'
import logo from '../assets/Logo-Sos-Gov.png';
import { Link } from 'react-router';
import { useNavigate } from "react-router";



function Login() {
    const navigate = useNavigate()

    let [fields, setFields] = useState({
          email: '',
          password: ''
    })
    let [error, setError] = useState({
        hasError: true,
        email: false,
        password: false
    });

    let [isDialogOpen, setIsDialogOpen] = useState(false);


    function submitContact(e){
        e.preventDefault();

        let tempError = {...error}

        let tempHasError = false
        
        Object.keys(fields).forEach(el => {
            if(fields[el] === ''){
                tempError[el] = true;
                tempHasError = true;
                return
            }
            tempError[el] = false;
        });

        tempError.hasError = tempHasError;

        setError(tempError);

        
        if(tempError.hasError){
            return
        }
        
        navigate("/erro", { replace: true });

    }

    function updateField(field, value){
        let tempFields = {...fields};
        tempFields[field] = value;
        setFields(tempFields)
    }

    function clearFields(){
        let tempFields = {...fields}

        Object.keys(tempFields).forEach((el) => {
            tempFields[el] = ''
        });

        setFields(tempFields);
        console.log(fields)
    }
    return (
      <>
        <section className="flex flex-col w-full h-full items-center justify-center py-40">
              
              <img className='w-[200px] h-[120px] cursor-pointer hover:transform-[scale(1.1)] ease-in-out duration-300' onClick={() => {navigate("/", { replace: true })}} src={logo}></img>

              <h1 className='text-sos-purple-100 text-2xl font-medium'>Login SOS GOV</h1>
              <p className='text-center'>Comece inserindo seu login e senha cadastrado no aplicativo!</p>
              <div className="w-full sm:w-[50%] flex flex-col items-center justify-center">
                  <form onSubmit={submitContact} className="w-[100%] gap-7 flex flex-col items-center">
                      <div className="flex flex-col w-[80%]">
                          <label className={`block mb-1 font-medium text-gray-700 ${error.email ? "text-red-500" : "text-gray-700 "}`}>Email *</label>
                          <input
                              value={fields.email}
                              type="text"
                              className={`w-full px-3 py-2 border ${error.email ? "border-red-500" : "border-gray-300"
                      
                              } rounded focus:outline-none focus:ring-2 focus:ring-sos-purple-100`}
                              onChange={(e) => updateField('email', e.target.value)}
                          />
                          {error.email && (
                              <p className="mt-1 text-sm text-red-600">Preencha esse campo!</p>
                          )}
                      </div>

                      <div className="flex flex-col w-[80%]">
                          <label className={`block mb-1 font-medium text-gray-700 ${error.password ? "text-red-500" : "text-gray-700 "}`}>Senha *</label>
                          <input
                              value={fields.password}
                              type="password"
                              className={`w-full px-3 py-2 border ${error.password ? "border-red-500" : "border-gray-300"
                              } rounded focus:outline-none focus:ring-2 focus:ring-sos-purple-100`}
                              onChange={(e) => updateField('password', e.target.value)}
                          />
                          {error.password && (
                              <p className="mt-1 text-sm text-red-600">Preencha esse campo!</p>
                          )}
                      </div>
                      

                      <button 
                        type="submit" 
                        className={`bg-sos-purple-100 min-w-[220px] min-h-12 text-sm rounded-full max-w-[320px] text-white text-thin cursor-pointer 
                        border-2 hover:bg-black active:bg-black  ease-in-out md:duration-200`}
                      >
                        <p className='text-2xl'>Fazer Login</p>
                      </button>
                  </form>
              </div>
        </section>
      </>
    )
}

export default Login
