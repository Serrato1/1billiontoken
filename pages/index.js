import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import Navigation from "sections/Navigation";
import BannerTwo from "sections/BannerTwo";
import Service from "sections/Service";
import CoinFund from "sections/CoinFund";
import About from "sections/About";
import Awards from "sections/Awards";
import WhitePaper from "sections/Awards";

import UserMap from "sections/UserMap";
import Wallet from "sections/Wallet";
import Statistics from "sections/Statistics";
import Stack from "sections/Stack";
import Faq from "sections/Faq";
import Footer from "sections/Footer";

import FavIcon from "assets/images/fav-icon.png";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>1BillionToken | To the Moon</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GQG1F91MZ0"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
    
              gtag('config', 'G-GQG1F91MZ0');`,
          }}
        />
      </Head>

      <GlobalStyle />
      <Navigation />
      <BannerTwo />
      <Service />
      <CoinFund />
      <About />
      <Awards />
      {/* <UserMap /> */}
      {/* <Wallet /> */}
      {/* <Statistics /> */}
      <Faq />
      <Stack />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
