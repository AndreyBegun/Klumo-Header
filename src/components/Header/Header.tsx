
import s from './Header.module.css';
import Devider from '../../common/Devider/Devider';
import HeaderProducts from './components/HeaderProducts/HeaderProducts';
import HeaderSection from './components/HeaderSection/HeaderSection';

const products = [
    {
        route: 'poster',
        name: 'Poster'
    },
    {
        route: 'canvas',
        name: 'Canvas'
    },
    {
        route: 'digital-download',
        name: 'Digital Download'
    },
    {
        route: 'gift-card',
        name: 'Gift Card'
    },

];

function Header() {

    return (
        <header className={s.header}>
            <HeaderSection />
            <Devider />
            <HeaderProducts products={products} />
            <Devider />
        </header>
    )
}
export default Header