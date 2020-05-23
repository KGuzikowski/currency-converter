import React from 'react'
import { useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import { RootState } from '../../../redux/rootReducer'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AcceptExtraPoints from '../../components/AcceptExtraPoints/AcceptExtraPoints'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import MainPanel from '../../components/MainPanel/MainPanel'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    }
  })
)

const MainPage = () => {
    const extraPoints = useSelector((state: RootState) => state.extraPoints)
    const classes = useStyles()

    return (
        <>
            <Header />
            <Container className={classes.container}>
                <About />
                <MainPanel />
            </Container>
            <Footer />
            { extraPoints.accepted ? null : <AcceptExtraPoints /> }
        </>
    )
}

export default MainPage
