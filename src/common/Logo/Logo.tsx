
import { useNavigate } from 'react-router-dom';
import KlumoLogo from '../../assets/KlumoLogo.png';
import s from './Logo.module.css'
function Logo() {
    const navigate = useNavigate();
    return (
        <img src={KlumoLogo} alt='logo' width={100} height={32} onClick={() => navigate('/')} className={s.logo} />
    )
}
export default Logo