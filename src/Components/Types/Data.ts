export interface Data {
    address:Adress;
    company:Company;
    email:string;
    name:string;
    phone:string;
    id:number;
    username:string;
    website:string;
}
interface Adress {
   city:string;
   street:string;
  zipcode:string;
}
interface Company {
    name:string;
    bs:string;
}