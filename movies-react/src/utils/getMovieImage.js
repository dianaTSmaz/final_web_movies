import React from 'react';
import placeholder from '../placeholder.jpg';

export function getMovieImage(path,width){
    return path ? "https://image.tmdb.org/t/p/w" + width + path : placeholder;
}