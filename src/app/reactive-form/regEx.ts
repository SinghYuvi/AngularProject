export class RegularEx{
    static username(control){
        let regx = /^[a-zA-Z\-]+$/;
        let valid = regx.test(control.value);
        return valid ? null : {username:true}
    }

    static userpassword(control){
        let regx =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        let valid = regx.test(control.value);
        return valid ? null : {userpassword:true}
    }

    static useremail(control){
        let regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       let valid = regx.test(control.value);
       return valid ? null : {useremail:true}
    }
} 