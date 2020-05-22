import React from 'react'
import { useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import { RootState } from '../../../redux/rootReducer'
import AcceptExtraPoints from '../../components/AcceptExtraPoints/AcceptExtraPoints'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const MainPage = () => {
    const extraPoints = useSelector((state: RootState) => state.extraPoints)
    
    return (
        <>
            <Header />
            <Container>
                Karol
            </Container>
            <Footer />
            { extraPoints.accepted ? null : <AcceptExtraPoints /> }
        </>
    )
}

export default MainPage
