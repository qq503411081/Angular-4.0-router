import { CanActivate} from '@angular/router';

export class LoginGuard implements CanActivate{
    canActivate(){
        let LoggedIn : boolean = Math.random()<0.5;
        if(!LoggedIn){
            console.log('用户未登陆')
        }
        return LoggedIn;
    }
}