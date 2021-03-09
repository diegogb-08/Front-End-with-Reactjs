

//Tool Functions and Miscelanious

const checkError = (data) => {
    

    for(let field in data){


        switch(field) {

            case 'name' : 

                // eslint-disable-next-line
                if(! /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(data[field])){

                    return "The name entered can only contain letters ";
                }

            break;

            case 'email' :
                
                // eslint-disable-next-line
                if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(data[field]) ){
                    
                    return "El email introducido no es correcto";
                }

            break;


            case 'password' :

                // eslint-disable-next-line
                if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(data[field])){
                    return "El password debe contener 8 caracteres, mayúsculas, minúsculas, número y algún caracter especial";
                }
                
            break;

            default: 

            break;


        }
    }

};

export default checkError;