import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: '80%',

    },
    iframe:{
        height: '400px'
    }
});

export default function ImgMediaCard({video,data}) {
    const classes = useStyles();
    const videoUrl ="https://www.youtube.com/embed/"

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.iframe}
                    component="iframe"
                    alt="Contemplative Reptile"
                    height="140"
                    src={video ? videoUrl+video.id.videoId:""}
                    allowFullScreen={true}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {video && video.snippet.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {video && video.snippet.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}





// import React from 'react'
//
// const VideoPlayer = () => {
//     return(
//         <div className='aviasales-player'>
//
//             <div>
//                 <iframe className='aviasales-player-frame' title='aviasales player' allowFullScreen={true}  src={'https://www.youtube.com/embed/AcL0MeVZIxM'}></iframe>
//             </div>
//
//         </div>
//     )
// }
// export default VideoPlayer