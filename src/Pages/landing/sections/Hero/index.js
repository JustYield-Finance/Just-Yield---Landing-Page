import React from 'react';
import { makeStyles, Box, Container, Typography, Button, Divider } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Header from 'components/Header';
import BegginersModal from 'components/BegginersModal';
import styles from './styles';

const useStyles = makeStyles(styles);

const Hero = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const theme = useTheme();
  const containerWidth = useMediaQuery(theme.breakpoints.down('sm')) ? 'xs' : 'md';

  const stats = [
    { key: 1, value: '$545.5M', caption: t('TVL') },
    { key: 2, value: '$4.5M', caption: t('Total-Rewards') },
    { key: 3, value: '$150.5M', caption: t('Market-cap') },
  ];
  return (
    <>
      <Box className={classes.root}>
        <Container maxWidth={containerWidth} className={classes.content}>
          <Box py={1} className={classes.center}>
            <img className={classes.bifi} alt="JustYield" src={require('images/header-logo.png').default} />
          </Box>
          <Box py={1} textAlign="center" className={classes.center}>
            <Typography variant="h4" className={classes.title}>
              {t('Hero-Multichain')}
            </Typography>
          </Box>
          <Box py={1} textAlign="center" className={classes.center}>
            <Typography variant="h4" className={classes.title2}>
              {t('Hero-Vaults')}
            </Typography>
          </Box>
          <Box py={2}/>
          <Box py={2} className={classes.networks}>
            <img alt="BSC" src={require('images/networks/bsc.svg').default} />
            <img alt="AVAX" src={require('images/networks/avax.svg').default} />
            <img alt="POLY" src={require('images/networks/polygon.svg').default} />
            <img alt="FTM" src={require('images/networks/fantom.svg').default} />
            <img alt="ARB" src={require('images/networks/arbitrum.svg').default} />
            <img alt="OP" src={require('images/networks/optimism.svg').default} />
          </Box>
          <Box mt={4} className={classes.center}>
          <a
              style={{ textDecoration: 'none' }}
              rel="noreferrer"
              target="_blank"
              href="https://app.justyield.finance/"
            >
              <Button size="large" className={classes.btn}>
                {t('Btn-StartEarning')}
              </Button>
            </a>
            <a
              style={{ textDecoration: 'none' }}
              rel="noreferrer"
              target="_blank"
              href="https://docs.justyield.finance/"
            >
              <Button size="large" className={classes.btndocs}>
                {t('Btn-ViewDocs')}
              </Button>
            </a>
          </Box>
        </Container>
        <Divider />
      </Box>
    </>
  );
};

export default Hero;
