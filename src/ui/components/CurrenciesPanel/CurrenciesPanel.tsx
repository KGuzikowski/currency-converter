import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/rootReducer'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CurrencyListItem from '../CurrencyListItem/CurrencyListItem'
import Title from '../Title/Title'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: '48%',
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(3, 0),
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    money: {
        fontWeight: 'normal',
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        },
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
  })
)

interface CurrenciesPanelProps {
    shouldDisplayRightPanel: boolean
}

const CurrenciesPanel = ({ shouldDisplayRightPanel }: CurrenciesPanelProps) => {
    const classes = useStyles()
    const currencyData = useSelector((state: RootState) => state.currencies)

    if(!shouldDisplayRightPanel)
        return (
            <div className={classes.root}>
                <Title>Here you will see data you requested:</Title>
            </div>
        )
    else
        return (
            <div className={classes.root}>
                <Title>Here you can see data you requested:</Title>
                <Typography variant="h6" className={classes.money}>{ currencyData.amount } { currencyData.usedCurrency } equals:</Typography>
                <div className={classes.list}>
                    {
                        currencyData.currencies!.map((curr, i) => (
                            <CurrencyListItem key={i} name={curr.name} value={(currencyData.amount! * curr.value).toFixed(2)} />
                        ))
                    }
                </div>
            </div>
        )
}

export default CurrenciesPanel