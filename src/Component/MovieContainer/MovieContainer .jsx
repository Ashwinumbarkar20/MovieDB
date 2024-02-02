import React, { useContext } from 'react';
import movieimg from '../../assets/movie.jpg'
import { Link } from 'react-router-dom'
import './MovieContainer.css'
import {
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Paper,
} from '@mui/material';
import { MovieDBApp } from '../../Context';


const MovieContainer = () => {
    const { movies } = useContext(MovieDBApp)
    return (
        
        <Container>
        <div style={{display:"flex",justifyContent:"end"}}><p style={{marginBottom:"10px"}}>Total Movies:- {movies.length}</p></div>
        {movies? <Grid container spacing={3}>
                {movies.map((movie) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                        <Paper elevation={3}>
                            <Link target="_blank" className="Link" to={movie.homepage}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        alt={movie.title}
                                        height="140"
                                        image={movieimg}
                                    />
                                    <CardContent>
                                        <Typography align='center' variant="h6" component="div">
                                            {movie.title}
                                        </Typography>
                                        {/* <Typography align='center' variant="body2" color="text.secondary">
                                            {`${(movie.overview).substr(0, 30)}`}
                                        </Typography> */}
                                        <Typography align='center' variant="body2" color="text.secondary">
                                            Release Date: {movie.release_date}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Paper>
                    </Grid>
                ))}
            </Grid>:"Loading..."}
           
        </Container>
    );
};

export default MovieContainer;