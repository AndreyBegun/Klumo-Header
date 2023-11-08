import { useNavigate } from 'react-router-dom';
import s from './Icon.module.css';
import { IIcon } from './types';

function Icon({ image, title, route }: IIcon) {
    const navigate = useNavigate()
    const handler = () => route ? navigate(route) : null
    return (

        <div className={s.icon} onClick={handler} >
            <img src={image} alt={title} />
            {title}
        </div>
    )
}
export default Icon