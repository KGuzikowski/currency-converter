import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ChevronRight from '@material-ui/icons/ChevronRight'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 0),
        },
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        marginLeft: theme.spacing(1)
    }
  })
)

interface CurrencyListItemProps {
    name: string,
    value: string
}

const CurrencyListItem = ({ name, value }: CurrencyListItemProps) => {
    const classes = useStyles()
    const text = `${value} ${name}`
    return (
        <div className={classes.root}>
            <ChevronRight color="secondary" />
            <span className={classes.text}>{ text }</span>
        </div>
    )
}

export default CurrencyListItem