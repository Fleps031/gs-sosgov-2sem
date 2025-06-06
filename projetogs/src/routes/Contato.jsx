import { useState } from "react";

function Contact(){
    let [fields, setFields] = useState({
        name: '',
        email: '',
        msg: ''
    })
    let [error, setError] = useState({
        hasError: true,
        name: false,
        email: false,
        msg: false
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

        setIsDialogOpen(true);

        clearFields();

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

    return(
        <>
            <section className="flex flex-col gap-4 justify-between items-center w-full h-full pt-10">
                <h1 className="text-center text-2xl">Dúvidas ou sugestões? Entre em contato conosco!</h1>
                <div className="w-full sm:w-[50%] flex flex-col items-center justify-center">
                    <form onSubmit={submitContact} className="w-[100%] gap-7 flex flex-col items-center">
                        <div className="flex flex-col w-[80%]">
                            <label className={`block mb-1 font-medium text-gray-700 ${error.name ? "text-red-500" : "text-gray-700 "}`}>Nome *</label>
                            <input
                                value={fields.name}
                                type="text"
                                className={`w-full px-3 py-2 border ${error.name ? "border-red-500" : "border-gray-300"
                        
                                } rounded focus:outline-none focus:ring-2 focus:ring-sos-purple-100`}
                                onChange={(e) => updateField('name', e.target.value)}
                            />
                            {error.name && (
                                <p className="mt-1 text-sm text-red-600">Preencha esse campo!</p>
                            )}
                        </div>

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
                            <label className={`block mb-1 font-medium ${error.msg ? "text-red-500" : "text-gray-700 "}`}>Mensagem *</label>
                            <textarea
                                value={fields.msg}
                                className={`w-full px-3 py-2  h-[200px] border ${error.msg ? "border-red-500" : "border-gray-300"
                                } rounded focus:outline-none focus:ring-2 focus:ring-sos-purple-100`}
                                onChange={(e) => updateField('msg', e.target.value)}
                            />
                            {error.msg && (
                                <p className="mt-1 text-sm text-red-600">Preencha esse campo!</p>
                            )}
                        </div>


                        <button 
                            type="submit" 
                            className={`bg-sos-purple-100 min-w-[220px] min-h-12 text-sm rounded-full max-w-[320px] text-white text-thin cursor-pointer 
                            border-sos-purple-100 border-2 hover:bg-black active:bg-black focus:bg-black ease-in-out md:duration-200`}
                        >
                            <p className='text-2xl'>Enviar mensagem</p>
                        </button>

                    </form>
                </div>
            </section>

            {isDialogOpen && (
                <div className="fixed inset-0 bg-sos-slide-cover-100 bg-opacity-20 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm relative text-center">
                    <button
                    onClick={() => setIsDialogOpen(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    >
                    x
                    </button>
                    
                    <div className="flex flex-col gap-4 h-full">
                        <h2 className="text-xl font-semibold mb-4">Mensagem enviada com sucesso!</h2>
                        <p className="text-gray-700">Agradecemos seu contato e responderemos assim que possível!</p>

                          <button
                            onClick={() => setIsDialogOpen(false)}
                            className="px-4 py-2 bg-sos-purple-100 text-white rounded-full cursor-pointer text-thin  
                            border-sos-purple-100 border-2 hover:bg-black active:bg-black focus:bg-black ease-in-out md:duration-200"
                        >
                            Ok
                        </button>
                    </div>


                    <div className="">
                      
                    </div>
                </div>
                </div>
            )}
        </>
    )
}

export default Contact