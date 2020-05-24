import React, { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import LastPage from '@material-ui/icons/LastPage'
import FirstPage from '@material-ui/icons/FirstPage'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { intersection, not } from '../../../utils/TransferList.utils'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: 200,
      height: 300,
      overflow: 'auto',
    },
    container: {
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-evenly'
      }
    },
    button: {
      margin: theme.spacing(0.5, 0),
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(0),
        transform: 'rotate(90deg)',
      }
    },
    btnsContainer: {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
      }
    },
    btnsItem: {
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      }
    }
  }),
)

interface TransferListProps {
  startRight: string[],
  startLeft: string[],
  setToCheck: (toCheck: string[]) => void
}

const TransferList = ({ startRight, startLeft, setToCheck }: TransferListProps) => {
  const classes = useStyles()
  const [checked, setChecked] = useState<string[]>([])
  const [left, setLeft] = useState<string[]>(startLeft)
  const [right, setRight] = useState<string[]>(startRight)

  const leftChecked = intersection(checked, left)
  const rightChecked = intersection(checked, right)

  const handleToggle = (value: string): void => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const handleAllRight = (): void => {
    setRight(right.concat(left))
    setLeft([])
    setToCheck(right.concat(left))
  }

  const handleCheckedRight = (): void => {
    setRight(right.concat(leftChecked))
    setLeft(not(left, leftChecked))
    setChecked(not(checked, leftChecked))
    setToCheck(right.concat(leftChecked))
  }

  const handleCheckedLeft = (): void => {
    setLeft(left.concat(rightChecked))
    setRight(not(right, rightChecked))
    setChecked(not(checked, rightChecked))
    setToCheck(not(right, rightChecked))
  }

  const handleAllLeft = (): void => {
    setLeft(left.concat(right))
    setRight([])
    setToCheck([])
  }

  const customList = (items: string[]) => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {items.map((value: string) => {
          const labelId = `transfer-list-item-${value}-label`

          return (
            <ListItem key={value} role="listitem" button onClick={() => handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          )
        })}
        <ListItem />
      </List>
    </Paper>
  )

  return (
    <Grid container spacing={2} alignItems="center" justify="space-between" className={classes.container}>
      <Grid item>{customList(left)}</Grid>
      <Grid item className={classes.btnsItem}>
        <Grid container direction="column" alignItems="center" className={classes.btnsContainer}>
          <IconButton
            size="small"
            className={classes.button}
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            <LastPage />
          </IconButton>
          <IconButton
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            <KeyboardArrowRightIcon />
          </IconButton>
          <IconButton
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton
            size="small"
            className={classes.button}
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            <FirstPage />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item>{customList(right)}</Grid>
    </Grid>
  )
}

export default TransferList