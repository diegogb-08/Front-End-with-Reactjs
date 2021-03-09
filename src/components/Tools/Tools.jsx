

//Tool Functions and Miscelanious

const checkError = (data) => {

    let password = data.password;
    let password2 = data.password2;
    
//     const getAge = (data) => {
//         let birthDate = data.birthDate
//         let today = new Date();
//         var diff = today.getTime() - birthDate.getTime();
//         const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
//         return console.log('¿HOW OLD IS THAT PERSON?',age)
//     }
//    getAge()
    
    for(let field in data){

        switch(field) {

            case 'fullName' : 

                // eslint-disable-next-line
                if(! /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(data[field])){

                    return "*The name entered can only contain letters ";
                }

            break;

            case 'userName' :

                if(! /^(?=.{6,16}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(data[field])){
                    return (<div>*The user name can contain:<br/>
                    1. Between 6 to 20 characters<br/>
                    2. Special characters like '_' or '.', but only inside the user name
                    </div>)
                }

            break;

            case 'phoneNumber' : 
                // eslint-disable-next-line
                if(! /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/.test(data[field])){
                    return "*Phone number with incorrect format"
                }

            break;

            case 'email' :
                
                // eslint-disable-next-line
                if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(data[field]) ){
                    
                    return "*The email entered is not correct";
                }

            break;


            case 'password' :
                // eslint-disable-next-line 
                if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\_.*])(?=.{8,})/.test(data[field])){
                    return (<div>*The password MUST contain: <br/>
                    1. Minimum 8 characters,<br/>
                    2. At least one uppercase and one lowercase,<br/>
                    3. At least one special character
                        </div>)
                }
                
            break;

            case 'password2' : 
                if(password2 !== password){
                    console.log('PASSWORD', password)
                    console.log('PASSWORD22222222', password2)
                    return '*The password must be the same in both fields'
                }
               
            break;



            default: 

            break;

        }
    }

};

export default checkError;