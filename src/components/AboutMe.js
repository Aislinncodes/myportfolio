import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'

import tech1 from '../images/html.png'
import tech2 from '../images/css.png'
import tech3 from '../images/javascript.png'
import tech4 from '../images/reacttech.png'
import tech5 from '../images/redux.png'
import tech6 from '../images/nodejs.png'
import tech7 from '../images/python.png'
import tech8 from '../images/github.png'
import tech9 from '../images/Material-UI.png'
import tech10 from '../images/bootstrap.png'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#003566',
    height: '100%',
  },
  techContainer: {
    maxWidth: 100,
    margin: '3rem auto',
  },
  aboutMe: {
    justifyContent: 'center',
  },
  contentFont: {
    color: '#fff',
    textAlign: 'center',
    margin: '1.5rem',
  },
  heading: {
    color: '#ffd60a',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
}))

const technologies = [
  {
    name: 'html',
    image: tech1,
  },
  {
    name: 'css',
    image: tech2,
  },
  {
    name: 'javascript',
    image: tech3,
  },
  {
    name: 'react',
    image: tech4,
  },
  {
    name: 'redux',
    image: tech5,
  },
  {
    name: 'nodejs',
    image: tech6,
  },
  {
    name: 'python',
    image: tech7,
  },
  {
    name: 'github',
    image: tech8,
  },
  {
    name: 'Material-UI',
    image: tech9,
  },
  {
    name: 'bootstrap',
    image: tech10,
  },
]

const AboutMe = () => {
  const classes = useStyles()
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center" spacing={2}>
        <Box sx={{ mt: 3 }}>
          <Typography
            textAlign="center"
            variant="h3"
            className={classes.heading}
          >
            About Me
          </Typography>
        </Box>
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Grid container justify="center" spacing={2}>
          <Typography className={classes.contentFont}>
            Hi! I'm Aislinn Wallace and I'm a healthcare insurance employee turn
            Full Stack web developer with a passion for using my skills
            assisting with web applications for social causes, non-profits, and
            small businesses. Boston Native ; Atlanta Resident. Recent Nucamp
            Coding Bootcamp Graduate
          </Typography>
        </Grid>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Grid container justify="center" spacing={2}>
          <Typography variant="h5" className={classes.heading}>
            Technologies I know!
          </Typography>
        </Grid>
      </Box>
      <Grid container justify="center">
        {technologies.map((tech, i) => (
          <Grid item xs={6} sm={4} md={2} key={i}>
            <Box className={classes.techContainer}>
              <CardMedia component="img" image={tech.image} />
              <Paper component="span">
                <Typography
                  align="center"
                  variant="subtitle2"
                  className={classes.fontCustom}
                >
                  {tech.name}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default AboutMe
