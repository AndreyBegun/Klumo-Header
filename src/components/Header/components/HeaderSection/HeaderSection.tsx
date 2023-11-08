import Logo from "../../../../common/Logo/Logo"
import SearchBar from "../../../SearchBar/SearchBar"
import s from './HeaderSection.module.css';
import wishlist from '../../../../assets/wishlist.png';
import account from '../../../../assets/account.png';
import cart from '../../../../assets/cart.png';
import Icon from "../../../../common/Icon/Icon";

function HeaderSection() {
    return (
        <div className={s.headerSection}>
            <Logo />
            <SearchBar />
            <div className={s.info}>
                <Icon image={wishlist} title={'WishList'} route='wish-list' />
                <Icon image={account} title={'Account'} route='account' />
                <Icon image={cart} title={'Cart'} route='cart' />
            </div>
        </div>
    )
}
export default HeaderSection