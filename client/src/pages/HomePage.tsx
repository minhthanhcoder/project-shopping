import React from 'react'
import Header from '../layout/users/Header'
import Footer from '../layout/users/Footer'
import ListProducts from '../layout/users/ListProducts'
import Bander from '../layout/users/Bander'

const HomePage:React.FC<{}> = () => (
    <>
        <div>
            <Header />
            <div className=''>
                <div>
                    <div>
                        <Bander/>
                        <ListProducts/>
                    </div>
                    <div><Footer/></div>
                </div>
            </div>
        </div>
    </>
)

export default HomePage
