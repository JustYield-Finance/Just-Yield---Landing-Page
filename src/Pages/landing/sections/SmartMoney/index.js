import React from 'react';
import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styles from './styles';
import OutlinedButton from 'components/OutlinedButton';
import { getWidgetData } from 'Pages/landing/utils/api';
import Github from 'components/Github';
import Discord from 'components/Discord';

const useStyles = makeStyles(styles);

const SmartMoney = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const theme = useTheme();
  const containerWidth = useMediaQuery(theme.breakpoints.down('sm')) ? 'xs' : 'md';

  return (
    <Box className={classes.root}>
      <Container maxWidth={containerWidth} className={classes.content}>
        <Cards />
      </Container>
    </Box>
  );
};

const Cards = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [stats, setStats] = React.useState({});

  React.useEffect(() => {
    async function FetchData() {
      const data = await getWidgetData();
      setStats(data);
    }

    FetchData();
  }, []);

  return (
    <Grid container className={classes.center} spacing={1}>
      <Grid item className={classes.center} xs={12} md={4}>
        <Card mr={2} className={classes.card}>
          <CardContent>
            <Typography className={classes.bold}>{t('Discord-Card-Title')}</Typography>
            <Box py={2}>
              <Typography variant="body2">Be the first to know about updates by following us on Discord</Typography>
            </Box>
            <CardActions mt={5} className={classes.center}>
              <a
                style={{ textDecoration: 'none'}}
                rel="noreferrer"
                target="_blank"
                href="https://discord.gg/bbdvQJ4Avg"
              >
                <OutlinedButton color="#7289DA">
                  <Discord className={classes.hoverIcon} />
                  {t('Discord-Card-Btn')}
                </OutlinedButton>
              </a>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.center} xs={12} md={4}>
        <Card className={classes.cardCenter}>
          <CardContent>
            <Typography className={classes.bold}>{t('Optimizin-CardTitle')}</Typography>
            <Box py={2}>
              <Typography variant="body2">
                {t('Optimizin-CardContent')}
              </Typography>
            </Box>
            <Box py={2}>
              <img height="125px" alt="JustYield" src={require('images/yieldlogo.png').default} />
            </Box>
            <Box className={classes.center}>
              <a
                style={{ textDecoration: 'none' }}
                rel="noreferrer"
                target="_blank"
                href="https://app.justyield.finance/"
              >
                <Button className={classes.btn}>
                  {t('Btn-StartEarning')}
                </Button>
              </a>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.center} xs={12} md={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.bold}>{t('Github-CardTitle')}</Typography>
            <Box py={2}>
              <Typography variant="body2">{t('Github-CardContent')}</Typography>
            </Box>
            <CardActions mt={5} className={classes.center}>
              <a
                style={{ textDecoration: 'none'}}
                rel="noreferrer"
                target="_blank"
                href={'https://github.com/JustYield-Finance'}
              >
                <OutlinedButton color="#0D0E14">
                  <Github />
                  Github
                </OutlinedButton>
              </a>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SmartMoney;
