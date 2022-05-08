import {ListElementProps} from './ListElementProps'
import s from './ListElement.module.scss'
import { Link } from 'react-router-dom';
export const ListElement = ({name,city,company,id}:ListElementProps):JSX.Element =>{

    return (
        <div className={s.list} key={id}>
           <div> <span className={s.list__category}>ФИО:</span><span className={s.list__category_name}>{name}</span></div>
            <div> <span className={s.list__category}>город:</span><span className={s.list__category_name}>{city}</span></div>
           <div>  <span className={s.list__category}>компания:</span><span className={s.list__category_name}>{company}</span></div>
           <Link to={'/users/' + id}><span className={s.list__detail}>Подробнее</span></Link>
        </div>
    )
}