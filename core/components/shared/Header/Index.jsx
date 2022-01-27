
import styles from './Header.module.css'

//data
import { primaryRoutes } from '../../../utils/routes'
//components
import Icons from '../icons/Index'
import NavLink from '../NavLink'
import Button from '../Button'
import MainLogo from '../brand/MainLogo'

const Header = () => {

    return (
        <header className={`bg-white  py-6 flex justify-center items-center px-wrapper`}>
            <nav className='max-w-screen-2xl w-full flex items-center justify-between'>

                <MainLogo />
                <ul>
                    {
                        primaryRoutes.map((item, index) => (
                            <NavLink key={index} name={item.name} isOnlyView={true} />
                        ))
                    }
                </ul>
                <Button title="Contacto" className="bg-primary w-btn_x h-btn_x" />

            </nav>
        </header>
    )
}

export default Header