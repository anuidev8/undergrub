
//components
import Header from '../components/shared/Header/Index'


const Wrapper = ({ children }) => {

    return (
        <main className='overflow-hidden'>
            <Header />
            {children}

        </main>
    )

}

export default Wrapper