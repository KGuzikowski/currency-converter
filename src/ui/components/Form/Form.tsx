import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Typography from '@material-ui/core/Typography'
import TransferList from '../TransferList/TransferList'

const currencies = [ 'EUR', 'CAD', 'HKD', 'ISK', 'PHP', 'DKK', 'HUF', 'CZK', 'AUD', 'RON', 'SEK', 'IDR', 'INR', 'BRL', 'RUB', 'HRK', 'JPY', 'THB', 'CHF', 'SGD', 'PLN', 'BGN', 'TRY', 'CNY', 'NOK', 'NZD', 'ZAR', 'USD', 'MXN', 'ILS', 'GBP', 'KRW', 'MYR' ]

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch'
        },
        autocomplete: {
            // width: '500px'
        },
    })
)

const Form = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Autocomplete
                className={classes.autocomplete}
                options={currencies}
                renderInput={(params) => <TextField {...params} label="Choose your currency" variant="outlined" />}
            />
            <TransferList currencies={currencies} />
        </div>
    )
}

export default Form