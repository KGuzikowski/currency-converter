import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      margin: theme.spacing(2, 0),
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      fontWeight: 'bold',
    }
  })
)

interface ErrorMessageProps {
  children: string[]
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
const classes = useStyles()

  return (
    <Paper elevation={2} className={classes.root}>
      {children.map((error, i) => (
        <Typography key={i}>
          - {error}
        </Typography>
      ))}
    </Paper>
  )
}

export default ErrorMessage