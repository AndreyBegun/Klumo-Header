import React from 'react'
import s from './HeaderProducts.module.css';
import { IProduct } from './types';
import ProductTab from './ProductTab';

const HeaderProducts: React.FC<{ products: IProduct[] }> = ({ products }) => {
    return (
        <div className={s.headerProducts}>
            {products.map((product: IProduct) => {
                const { name, route } = product;
                return (<ProductTab route={route} name={name} key={name} />
                )
            })
            }
        </div>
    )
}
export default HeaderProducts