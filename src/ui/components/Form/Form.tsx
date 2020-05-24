import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TransferList from '../TransferList/TransferList'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { RootState } from '../../../redux/rootReducer'
import { fetchCurrenciesStartAsync } from '../../../redux/currencies/currencies.actions'
import { restOf } from '../../../utils/Form.utils'
import Title from '../Title/Title'

const currencies = [ 'EUR', 'CAD', 'HKD', 'ISK', 'PHP', 'DKK', 'HUF', 'CZK', 'AUD', 'RON', 'SEK', 'IDR', 'INR', 'BRL', 'RUB', 'HRK', 'JPY', 'THB', 'CHF', 'SGD', 'PLN', 'BGN', 'TRY', 'CNY', 'NOK', 'NZD', 'ZAR', 'USD', 'MXN', 'ILS', 'GBP', 'KRW', 'MYR' ]

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '48%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            margin: theme.spacing(3, 0),
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            }
        },
        inputs: {
            display: 'flex'
        },
        autocomplete: {
            boxSizing: 'border-box',
            width: '50%',
            [theme.breakpoints.down('sm')]: {
                width: '60%'
            },
        },
        amount: {
            boxSizing: 'border-box',
            width: '50%',
            [theme.breakpoints.down('sm')]: {
                width: '40%'
            },
        },
        btn: {
            marginTop: theme.spacing(3),
            padding: theme.spacing(1.5),
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
                marginTop: theme.spacing(5)
            }
        },
        explanation: {
            margin: theme.spacing(2, 0),
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
                padding: theme.spacing(2)
            }
        }
    })
)


const Form = () => {
    const classes = useStyles()
    const currencyPrevData = useSelector((state: RootState) => state.currencies)
    const [ usedCurrency, setUsedCurrency ] = useState<string | null>(currencyPrevData.usedCurrency)
    const [ toCheck, setToCheck ] = useState<string[]>(currencyPrevData.currenciesToCheck)
    const [ amount, setAmount ] = useState<number | null>(currencyPrevData.amount)
    const [ error, setError ] = useState<string[]>([])
    const dispatch = useDispatch()

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value === '' ? null : parseInt(e.currentTarget.value)
        setAmount(val)
    }

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        const msgArr = []
        if(!amount || amount < 0)
            msgArr.push('You need to specify the amount of money.')
        if(!usedCurrency)
            msgArr.push('Pick currency you want to check.')
        if(toCheck.length === 0)
            msgArr.push('You have to also pick at least one other currency.')
        if(toCheck.length === 1 && toCheck[0] === usedCurrency)
            msgArr.push('You have to pick different currency.')
            
        if(msgArr.length) {
            setError(msgArr)
            return
        }
        else if(error.length)
            setError([])

        dispatch(fetchCurrenciesStartAsync(usedCurrency!, toCheck, amount!))
    }
    
    return (
        <form className={classes.root} onSubmit={e => handleSubmit(e)}>
            <Title>Choose what you want to exchange:</Title>
            { error.length ? <ErrorMessage>{ error }</ErrorMessage>: null }
            <div className={classes.inputs}>
                <TextField
                    label="Amount"
                    className={classes.amount}
                    type="number"
                    value={!amount ? '' : amount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)}
                />
                <Autocomplete
                    value={usedCurrency}
                    className={classes.autocomplete}
                    options={currencies}
                    renderInput={(params) => <TextField {...params} label="Choose currency"/>}
                    onChange={(e: any, newValue: string | null) => {
                        setUsedCurrency(newValue)
                    }}
                />
            </div>
            <Typography className={classes.explanation}>Pick currencies which exchange rates you want to check:</Typography>
            <TransferList startRight={toCheck} startLeft={restOf(toCheck, currencies)} setToCheck={setToCheck}/>
            <Button variant="contained" color="secondary" type="submit" className={classes.btn}>Check exchange rates</Button>
        </form>
    )
}

export default Form