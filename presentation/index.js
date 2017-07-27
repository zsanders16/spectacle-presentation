// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Layout,
  Fit,
  Fill,
  Appear,
  Image,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  thunderstorm: require('../assets/thunderstorm.jpg'),
  thunderstorm2: require('../assets/thunderstorm2.jpg'),
  j5Robot: require('../assets/j5-robot.png'),
  j5Logo: require('../assets/j5-logo.svg'),
  noaa: require('../assets/noaa_logo.png'),
  screenShotA: require('../assets/ScreenShotA.png'),
  screenShotB: require('../assets/ScreenShotB.png'),
  screenShotC: require('../assets/ScreenShotC.png'),
  screenShotD: require('../assets/ScreenShotD.png'),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const styles = {
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    absolute: '20px 20px',
    height: '50vh',
  },
  fillSlide: {
    height: '100vh !important',
    padding: '0 0 !important',
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide id='Main' transition={['fade','fade']} bgColor="quartenary" bgImage={images.thunderstorm2.replace('/','')}>
          <Heading size={4} fit caps lineHeight={4} textColor="primary">
            Weather Station Application
          </Heading>
          <br />
          <Text margin="10px 0 0" textColor="secondary" size={2} fit bold lineHeight={2}>
            <Link textSize={26}>{`https://capstone-weather-station.herokuapp.com/`}</Link>
          </Text>
          <Text textColor='quartenary' textSize='2rem'>
            Developers: Z. Sanders, B. Langston, A. Graupman
          </Text>
        </Slide>
        <Slide id='Objectives' transition={["fade"]} bgColor="quartenary" bgImage={images.thunderstorm2.replace('/','')}>
          <Heading size={1} textColor="primary" caps fit lineHeight={1}>
            Objectives
          </Heading>
          <List>
            <Appear>
              <ListItem margin='2rem 0' italic textColor='primary' >Acquisition of Realtime Data</ListItem>
            </Appear>
            <Appear>
              <ListItem margin='2rem 0'>Remote Storage of Device Driven Data</ListItem>
            </Appear>
            <Appear>
              <ListItem margin='2rem 0' italic textColor='primary' >Client-side Display of Realtime Data</ListItem>
            </Appear>
            <Appear>
              <ListItem margin='2rem 0'>Weather Api for Acquiring Historical Data</ListItem>
            </Appear>
            <Appear>
              <ListItem margin='2rem 0' italic textColor='primary' >Realtime and Historical Data Coorelation</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide id='Plateforms' transition={["fade",'fade']} bgColor="quartenary" bgImage={images.thunderstorm2.replace('/','')}>
          <Heading size={1} textColor="primary" caps fit lineHeight={1}>
            Plateforms, Frameworks, and Libraries
          </Heading>
          <List>
            <Appear>
              <ListItem margin='1.5rem' italic textColor='primary'>{`Arduino/Johnny-Five IoT`}</ListItem>
            </Appear>
            <Appear>
              <ListItem margin='1.5rem' italic textColor='primary'>{`React/Rails`}</ListItem>
            </Appear>
            <Appear>
              <ListItem margin='1.5rem' >Postgresql</ListItem>
            </Appear>
            <Appear>
              <ListItem margin='1.5rem' italic textColor='primary'>HighChart</ListItem>
            </Appear>
            <Appear>
              <ListItem margin='1.5rem' >Good Dose of Creativity</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide id='ScreenShots' transition={["fade"]} bgColor="quartenary"  bgImage={images.thunderstorm2.replace('/','')}>
          <Heading size={1} fit caps textColor='primary' lineHeight={1}>
            Application Screen Shots
          </Heading>
          <List>
            <Appear>
              <ListItem>Arduino board</ListItem>
            </Appear>
            <Appear>
              <ListItem>AdaFruit Sensor</ListItem>
            </Appear>
            <Appear>
              <ListItem>Arduino Firmware</ListItem>
            </Appear>
            <Appear>
              <ListItem>Postgresql Database</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='quartenary' bgImage={images.thunderstorm2.replace('/','')}>
          <Heading size={1} caps fit textColor='primary' lineHeight={1}>
            Challenges and Hurdles
          </Heading>
          <List>
            <Appear>
              <ListItem>Reliability of Remote Weather Api</ListItem>
            </Appear>
            <Appear>
              <ListItem>Race Conditions</ListItem>
            </Appear>
            <Appear>
              <ListItem>Network Access Restrictions</ListItem>
            </Appear>
            <Appear>
              <ListItem>Out-of-Date Arduino/J5 Libraries</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']}  bgImage={images.thunderstorm2.replace('/','')}>
          <Image src={images.screenShotA.replace("/", "")} ></Image>
        </Slide>
        <Slide transition={['fade']}  bgImage={images.thunderstorm2.replace('/','')}>
          <Image src={images.screenShotB.replace("/", "")} height='650px'></Image>
        </Slide>
        <Slide transition={['fade']}  bgImage={images.thunderstorm2.replace('/','')}>
          <Image src={images.screenShotC.replace("/", "")} height='650px'></Image>
        </Slide>
        <Slide transition={['fade']}  bgImage={images.thunderstorm2.replace('/','')}>
          <Image src={images.screenShotD.replace("/", "")} height='650px'></Image>
        </Slide>
        <Slide transition={['fade']}  bgImage={images.thunderstorm2.replace('/','')}>
          <Heading size={1} caps fit textColor='primary' lineHeight={1}>
            Come and See Our Booth
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
