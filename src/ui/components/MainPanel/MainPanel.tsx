import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/rootReducer'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Form from '../Form/Form'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import CurrenciesPanel from '../CurrenciesPanel/CurrenciesPanel'
import GraphsSection from '../GraphsSection/GraphsSection'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },
    data: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
      },
    },
    spinner: {
      width: '48%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    spinner2: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    error: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      margin: theme.spacing(2, 0),
    },
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
        <div className={classes.data}>
          <Form />
          {
            currencyData.isFetching
            ? <div className={classes.spinner}>
                <CircularProgress color="secondary" />
              </div>
            : <CurrenciesPanel shouldDisplayRightPanel={shouldDisplayRightPanel} />
          }
        </div>
        {
          currencyData.isFetching || currencyData.isFetchingHistory
          ? <div className={classes.spinner2}>
              < CircularProgress color="secondary" />
            </div>
          : shouldDisplayRightPanel
            ? <GraphsSection
                usedCurrency={currencyData.usedCurrency}
                currenciesToCheck={currencyData.currenciesToCheck}
                history={currencyData.history}
                historyError={currencyData.historyError}
                allGraphsTogether={currencyData.allGraphsTogether}
              />
            : null
        }
      </div>
    </>
  )
}

export default MainPanel