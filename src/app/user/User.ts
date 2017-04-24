
/**
 * Class representation of a user
 * 
 * @author Joshua Kissoon
 * @since 20170319
 */
export class User
{
    uid: number;
    userId: string;
    password: string;
    passwordConfirm: string;
    named: string;
    usid: number;
    uatid: number;    
    createdTs: string;
    
    status: string;
    
    loadFromMap(data: any)
    {
        this.uid = data.uid;
        
        this.uatid = data.uatid;
    }
    
    isAdmin()
    {
        return this.uatid == 1;
    }
}