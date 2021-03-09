

//Tool Functions and Miscelanious

const checkError = (data) => {
    

    for(let field in data){


        switch(field) {

            case 'fullName' : 

                // eslint-disable-next-line
                if(! /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(data[field])){

                    return "The name entered can only contain letters ";
                }

            break;

            case 'userName' :

                if(! /^(?=.{6,20}$)(?![_.])[a-zA-Z0-9._]$/.test(data[field])){
                    return ("The user name can contain only:",
                    "1. Between 6 to 20 characters,",
                    "2. Special characters like '_' or '.', but only inside the user name")
                }

            break;

            case 'email' :
                
                // eslint-disable-next-line
                if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(data[field]) ){
                    
                    return "The email entered is not correct";
                }

            break;


            case 'password' :

                // eslint-disable-next-line
                if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{8, 16}/.test(data[field])){
                    return ("The password MUST contain:",
                    "1. Between 8 to 16 characters,",
                    "2. At least one Uppercase",
                    "3. At least one lowercase",
                    "4. At least one special character")
                }
                
            break;

            default: 

            break;

        }
    }

};

export default checkError;