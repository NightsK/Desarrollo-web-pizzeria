export interface Feedback{
    firstname:string;
    lastname:string;
    telnum:string;
    email:string;
    contacttype:string;
    message:string;
    agree:boolean;
}
export const ContactType=['None','Tel','Email'];