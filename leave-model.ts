export class Leave {
  staffId : string;
  department : string;
  startDate : Date;
  endDate : Date;
  reason : string;
  status : string
  constructor( staffId : string, department : string, startDate : Date, endDate : Date,  reason : string, status : string){
    this.staffId = staffId;
    this.department =  department;
    this.startDate =  startDate;
    this.endDate =  endDate;
    this.reason =  reason;
    this.status = 'Pending'  
  }
}
