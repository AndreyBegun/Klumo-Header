import { PageProps } from "./types"
import s from './MockPage.module.css'

const MockPage: React.FC<PageProps> = ({ text }) => {
    return (

        <div className={s.page}>
            {text}
        </div >
    )
}
export default MockPage