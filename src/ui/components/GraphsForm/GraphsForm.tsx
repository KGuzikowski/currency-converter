import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    switch: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: theme.spacing(3)
        }
    },
    graphs: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    control: {
        marginLeft: theme.spacing(2)
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    },
    btn: {
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(3)
        }
    },
    dates: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        }
    }
  })
)

interface GraphsFormProps {
    submit: (startDate: string | undefined, endDate: string | undefined) => void,
    toggleChecked: () => void,
    allGraphs: boolean,
    defaultStart: string | undefined,
    defaultEnd: string | undefined
}

const GraphsForm = ({ submit, toggleChecked, allGraphs, defaultStart, defaultEnd }: GraphsFormProps) => {
    const classes = useStyles()
    const startDateInput = React.createRef<HTMLInputElement>()
    const endDateInput = React.createRef<HTMLInputElement>()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        submit(startDateInput.current?.value, endDateInput.current?.value)
    }

    const start = defaultStart ? defaultStart : ''
    const end = defaultEnd ? defaultEnd : ''

    return (
        <form className={classes.graphs} noValidate onSubmit={(e) => handleSubmit(e)}>
            <div className={classes.switch}>
                <div>
                    <Typography>Should all currencies be displayed on one chart?</Typography>
                    <Typography>(If not, then each currency gets its own chart.)</Typography>
                </div>
                <FormControlLabel
                    className={classes.control}
                    control={<Switch checked={allGraphs} onChange={toggleChecked} />}
                    label={ allGraphs ? 'Yes' : 'No' }
                />
            </div>
            <div className={classes.dates}>
                <TextField
                    id="date"
                    label="Start date"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                    inputRef={startDateInput}
                    defaultValue={start}
                />
                <TextField
                    id="date"
                    label="End date"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                    inputRef={endDateInput}
                    defaultValue={end}
                />
            </div>
            <Button variant="contained" color="secondary" type="submit" className={classes.btn}>Get charts</Button>
        </form>
    )
}

export default GraphsForm