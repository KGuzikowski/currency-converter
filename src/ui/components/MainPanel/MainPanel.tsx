import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/rootReducer'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Form from '../Form/Form'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import CurrenciesPanel from '../CurrenciesPanel/CurrenciesPanel'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      // alignItems: 'stretch'
    },
    spinner: {
      width: '48%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    error: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      margin: theme.spacing(2, 0),
    }
  })
)

const MainPanel = () => {
  const classes = useStyles()
  const currencyData = useSelector((state: RootState) => state.currencies)
  const shouldDisplayRightPanel = !!(currencyData.currencies && currencyData.currencies.length)

  return (
    <>
      {
        currencyData.errorMessage 
          ? <div className={classes.error}><ErrorMessage>{[currencyData.errorMessage]}</ErrorMessage></div>
          : null
      }
      <div className={classes.root}>
        <Form />
        {
          currencyData.isFetching
            ? <div className={classes.spinner}>
                <CircularProgress color="secondary" />
              </div>
            : <CurrenciesPanel shouldDisplayRightPanel={shouldDisplayRightPanel} />
        }
      </div>
    </>
  )
}

export default MainPanel