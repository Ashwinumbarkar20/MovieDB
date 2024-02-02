import React, { useContext } from 'react'
import { Button, TextField, Grid, Paper } from '@mui/material';
import { MovieDBApp } from '../../Context';
import './Search.css'
export default function Search() {
    const { startDate, setEndDate, endDate, setStartDate, handleSearch, error, setError } = useContext(MovieDBApp)
    return (
        <>
            <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Start Date"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="End Date"
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSearch}
                            fullWidth
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
                <p style={{color:'#0336FF',margin:"10px"}}><span style={{fontWeight:"bolder"}}> Important Note:-</span> Date Range should be a range no longer than 14 days</p>
                {error && (
                    <div className='error-div'>
                        <p>No data found for mentioned range</p>
                        <Button variant='outlined' onClick={() => { setError(false); setStartDate(""); setEndDate("") }}>Dismiss</Button>
                    </div>
                )}
            </Paper>
        </>
    )
}
