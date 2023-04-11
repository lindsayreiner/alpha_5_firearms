import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Rating from '@mui/material/Rating';

import daryl from '../images/daryl_review.jpg';
import milton from '../images/milton_review.jpg';
import nick from '../images/nick_review.jpg';
import nikki from '../images/nikki_review.jpg';
import steven from '../images/steven_review.jpg';

export default function Reviews() {
    return (
        <>
            <ImageList sx={{ width: '100vw', height: 450, margin: '0 auto' }} cols={3} rowHeight={164}>
                <ImageListItem>
                    <img
                        src={daryl}
                        srcSet={daryl}
                        alt="Daryl review"
                        loading="lazy"
                    />
                    <Rating name="read-only" value={5} readOnly />
                </ImageListItem>
            </ImageList>
        </>
    )
}