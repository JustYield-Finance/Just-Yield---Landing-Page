const styles = theme => ({
  root: {
    minHeight: '60vh',
  },
  content: {
    padding: '100px 20px',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
  },
  title: {
    fontSize: '3.2rem',
    fontStyle: 'bold',
    fontWeight: '900',
    fontStrech: 'bold',
  },
  title2: {
    fontSize: '1rem',
  },
  bold: {
    fontSize: '2rem',
    fontWeight: '900',
    fontStyle: 'bold',
    fontStrech: 'bold',
  },
  caption: {
    color: '#A69885',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  btn: {
    borderRadius: '30px',
    fontWeight: 'bold',
    padding: '5px 15px 5px',
    border: 'solid 2px #85bf4b',
    backgroundColor: '#85bf4b',
    textTransform: 'none',
    margin: '0 10px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#85bf4b',
      color: 'white',
    },
  },
  btndocs: {
    borderRadius: '30px',
    fontWeight: 'bold',
    padding: '5px 15px 5px',
    border: 'solid 2px #85bf4b',
    backgroundColor: 'white',
    textTransform: 'none',
    margin: '0 10px',
    color: '#85bf4b',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#85bf4b',
    },
  },
  networks: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& img': {
      height: '60px',
      '&:hover': {
        transition: '0.5s',
        transform: 'scale(1.3)',
      },
    },
  },
  bifi: {
    height: '150px',
  },
  text: {
    color: '#A69885',
  },
});

export default styles;
