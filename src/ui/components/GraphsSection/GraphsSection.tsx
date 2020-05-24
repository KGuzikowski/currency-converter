import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Title from '../Title/Title'
import GraphsForm from '../GraphsForm/GraphsForm'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { fetchHistoryStartAsync } from '../../../redux/currencies/currencies.actions'
import { historyType } from '../../../redux/currencies/currencies.types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        padding: theme.spacing(3, 0)
    },
    form: {

    },
    divider: {
      marginBottom: theme.spacing(4)
    },
    error: {
        width: '500px',
        margin: theme.spacing(5, 'auto')
    }
  })
)

interface GraphsSectionProps {
    usedCurrency: string | null,
    currenciesToCheck: string[],
    history: historyType
}

const GraphsSection = ({ usedCurrency, currenciesToCheck, history }: GraphsSectionProps) => {
    const classes = useStyles()
    const [allGraphs, setAllGraphs] = useState<boolean>(true)
    const [ error, setError ] = useState<string>('')
    const [ warning, setWarning ] = useState<string>('')
    const dispatch = useDispatch()

    const toggleChecked = (): void => {
        setAllGraphs((prev: boolean) => !prev);
    }

    const handleSubmit = (startDate: string | undefined, endDate: string | undefined): void => {
        console.log(startDate, endDate, allGraphs)
        if(!endDate || !startDate) {
            setError('Please fill the dates!')
            return
        }
        else {
            if(endDate < startDate) {
                setError('Start date is bigger than end date!')
                return
            }
            else if(endDate === startDate) {
                setError('Start date equals end date!')
                return
            }
                
            if(new Date(endDate) < new Date()) {
                setWarning('Displaying data till today.')
                setError('')
            }
        }

        setError('')
        dispatch(fetchHistoryStartAsync(startDate, endDate, usedCurrency!, currenciesToCheck))
    }

    console.log('history', history)

    return (
        <div className={classes.root}>
            <div className={classes.form}>
                <Divider className={classes.divider} />
                <Title>Below you can see and adjust graphs showing currencies' historical data.</Title>
                
                <GraphsForm submit={handleSubmit} toggleChecked={toggleChecked} allGraphs={allGraphs} />
            </div>
            {
                error
                ? <div className={classes.error}><ErrorMessage>{ [error] }</ErrorMessage></div>
                // : <Graphs warning={warning} />
                : <div>Karolll</div>
            }
        </div>
    )
}

export default GraphsSection