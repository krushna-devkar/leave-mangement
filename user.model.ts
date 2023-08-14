
export class User {
  id? : string
 status?: Status;

 constructor(public fName: string, public lastName: string, public email : string, public contactNo : number,
  public department : string, public username: string, public password : string, public role: string,  public totalLeave :number,
  public approved : number,public rejected :number ){

 
}
}

export class Status {
totalLeaves : number
approved : number;
rejected : number;
constructor(){
  this.totalLeaves = 20;
  this.approved =  0;
  this.rejected =  0;
}
}


