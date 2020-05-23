import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { acceptExtraPoints } from '../../../redux/extraPoints/extraPoints.actions'
import Slide from '@material-ui/core/Slide'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
            backgroundColor: theme.palette.secondary.main,
            position: 'fixed',
            bottom: '0',
            width: '100%',
            textAlign: 'center'
        },
        btn: {
            marginLeft: theme.spacing(2),
            padding: theme.spacing(1, 2)
        }
    })
)

const AcceptExtraPoints = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const [visible, changeVisible] = useState<boolean>(true)

    const handleClick = () => {
        changeVisible(false)
        setTimeout(() => {
            dispatch(acceptExtraPoints())
        }, 500)
    }

    return (
        <Slide direction="up" in={visible} timeout={500}>
            <div className={classes.root}>
                <Typography variant="body1">
                    It's not cookies! Accept to add extra recruitment points.
                    <Button variant="contained" color="primary" className={classes.btn} onClick={handleClick}>
                        Accept
                    </Button>
                </Typography>
            </div>
        </Slide>
    )
}

export default AcceptExtraPoints