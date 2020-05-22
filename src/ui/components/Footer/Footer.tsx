import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            textAlign: 'center'
        },
        name: {
            color: theme.palette.secondary.main,
            fontWeight: 'bold'
        }
    })
)

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant='body1'>
                Let's convert some currencies! App made for recruitment purposes by <span> </span>
                <Link href='https://github.com/KGuzikowski' target='_blank' rel='noopener' className={classes.name}>
                    Karol Guzikowski
                </Link>.
            </Typography>
        </div>
    )
}

export default Footer