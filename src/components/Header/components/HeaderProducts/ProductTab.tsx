import { useMatch, useNavigate } from "react-router-dom";
import { IProduct } from "./types"
import s from './HeaderProducts.module.css'

const ProductTab: React.FC<IProduct> = ({ route, name }) => {
    const navigate = useNavigate();
    const match = useMatch(route)

    const isSelected = match ? s.selected : '';

    return (
        <div
            onClick={() => navigate(route)}
            className={`${s.tab} ${isSelected}`}
        >
            {name}
        </div >
    )
}
export default ProductTab