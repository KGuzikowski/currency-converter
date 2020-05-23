import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Form from '../Form/Form';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '1000px'
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
      fontWeight: 'normal'
    }
  })
)

const MainPanel = () => {
  const classes = useStyles()

  return (
    <div>
      <Form />
    </div>
  )
}

export default MainPanel