import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
      fontWeight: 'normal'
    }
  })
)

const About = () => {
  const classes = useStyles()

  return (
    <Typography variant="h6" className={classes.title}>
        You can use this tool to search for many different currencies and their historical data.
    </Typography>
  )
}

export default About