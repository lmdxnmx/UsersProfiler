import { Data } from './../Types/Data'
export interface SidebarProps {
    users?: Data[];
    setFlag?: any;
    flag?: boolean;
    disabled?:boolean;
}
interface Adress {
    city: string;
    street: string;
    zipcode: string;
}
interface Company {
    name: string;
    bs: string;
}
export interface FilterData {
    address: Adress;
    company: Company;

}