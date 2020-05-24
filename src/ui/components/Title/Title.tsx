import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
        textAlign: 'center',
        marginBottom: theme.spacing(4)
    }
  })
)

interface TitleProps {
    children: string
}

const Title = ({ children }: TitleProps) => {
    const classes = useStyles()

    return <Typography className={classes.title} variant="h6">{ children }</Typography>
}

export default Title