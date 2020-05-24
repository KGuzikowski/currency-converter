import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { rate } from '../../../redux/currencies/currencies.types'
import LineChart from '../LineChart/LineChart'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root1: {
        height: '400px',
        width: '100%'
    },
    root2: {
    },
    chartContainer: {
        height: '300px'
    },
    title: {
        textAlign: 'center',
        marginTop: theme.spacing(5)
    }
  })
)

interface GraphsProps {
    rates: rate[],
    allGraphsTogether: boolean
}

const Graphs = ({ rates, allGraphsTogether }: GraphsProps) => {
    const classes = useStyles()
    
    if(allGraphsTogether) {
        return (
            <>
                <Typography className={classes.title} variant="h6">Work in progress...</Typography>
                <div className={classes.root1}>
                    <LineChart data={rates} />
                </div>
            </>
        )
    } else {
        return (
            <div className={classes.root2}>
                {
                    rates.map((curr, i) => <div className={classes.chartContainer} key={i}><LineChart data={[curr]} /></div>)
                }
            </div>
        )
    }
}

export default Graphs