import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Title from '../Title/Title'
import GraphsForm from '../GraphsForm/GraphsForm'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { fetchHistoryStartAsync, switchAllGraphsTogether } from '../../../redux/currencies/currencies.actions'
import { historyType } from '../../../redux/currencies/currencies.types'
import Graphs from '../Graphs/Graphs'

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
    history: historyType,
    historyError: string,
    allGraphsTogether: boolean
}

const GraphsSection = ({ usedCurrency, currenciesToCheck, history, historyError, allGraphsTogether }: GraphsSectionProps) => {
    const classes = useStyles()
    const [ error, setError ] = useState<string>(historyError)
    const dispatch = useDispatch()

    const toggleChecked = (): void => {
        dispatch(switchAllGraphsTogether())
    }

    const handleSubmit = (startDate: string | undefined, endDate: string | undefined): void => {
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
        }

        setError('')
        dispatch(fetchHistoryStartAsync(startDate, endDate, usedCurrency!, currenciesToCheck, allGraphsTogether))
    }
    
    return (
        <div className={classes.root}>
            <div className={classes.form}>
                <Divider className={classes.divider} />
                <Title>Below you can see and adjust graphs showing currencies' historical data.</Title>
                <GraphsForm
                    submit={handleSubmit}
                    toggleChecked={toggleChecked}
                    allGraphs={allGraphsTogether}
                    defaultStart={history?.start}
                    defaultEnd={history?.end}
                />
            </div>
            {
                error
                ? <div className={classes.error}><ErrorMessage>{ [error] }</ErrorMessage></div>
                : !history // if there is no data for charts then display nothing else display charts
                    ? null
                    : <Graphs rates={history!.rates} allGraphsTogether={allGraphsTogether} />
            }
        </div>
    )
}

export default GraphsSection