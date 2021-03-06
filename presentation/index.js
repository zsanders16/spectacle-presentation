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
  Code,
  Table,
  TableRow,
  TableItem,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  thunderstorm2: require('../assets/thunderstorm2.jpg'),
  gifSlides: require('../assets/gifSlides.gif'),
  TechStack: require('../assets/TechStack.png'),
  technologies: require('../assets/technologies.png'),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  white: '#f9fcf7',
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
  },
  opacBackground: {
    backgroundColor: 'black',
    opacity: '0.5',
    borderRadius: '10px',
    padding: '1em 1em',
  },
  nonOpacBackground: {
    opacity: '1 !important',
    color: 'rgba(255,255,255,1) !important',
  },
  technologies: {
    padding: '0 !important',
    margin: '0 !important',
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide id='Main' transition={['fade','fade']} bgColor="quartenary" bgImage={images.thunderstorm2.replace('/','')}>
          <Appear>
            <Heading  size={4} fit caps lineHeight={4} textColor="white">
              Weather Station Application
            </Heading>
          </Appear>
            <Layout>
              <Fill style={styles.opacBackground}>
                <Text margin="10px 0 0" textColor="white" size={2} fit bold lineHeight={2} style={styles.nonOpacBackground}>
                  <Link textColor='white' textSize={26}>{`https://capstone-weather-station.herokuapp.com/`}</Link>
                </Text>
                <Text textColor='primary' textSize='2rem'>
                  Developers: Zack Sanders, Brennick Langston
                </Text>
              </Fill>
            </Layout>
        </Slide>
        <Slide id='Objectives' transition={["fade"]} bgColor="quartenary" bgImage={images.thunderstorm2.replace('/','')}>
          <Heading textColor='primary' caps>
            Objectives
          </Heading>
          <Layout>
            <Fill>
              <List style={styles.opacBackground}>
                <Appear>
                  <ListItem textColor='primary' textSize='1em'>External Api for Acquiring Data</ListItem>
                </Appear>
                <Appear>
                  <ListItem italic textColor='primary' textSize='1em'>Client-side Selection of How Data is Displayed</ListItem>
                </Appear>
                <Appear>
                  <ListItem italic textColor='primary' textSize='1em'>Acquisition of Realtime Data</ListItem>
                </Appear>
                <Appear>
                  <ListItem italic textColor='primary' textSize='1em'>Client-side Display of Realtime Data</ListItem>
                </Appear>
                <Appear>
                  <ListItem italic textColor='primary' textSize='1em' >Coorelation of Data from Two Sources</ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide id='Plateforms' transition={["fade",'fade']} bgColor="quartenary" bgImage={images.thunderstorm2.replace('/','')}>
          <Heading textColor="primary" caps fit >
            Platforms, Frameworks, and Libraries
          </Heading>
          <Image src={images.TechStack} width='100%' style={{marginBottom: '100px'}}></Image>
        </Slide>
        <Slide
          id='Technologies' transition={["fade"]}
          bgImage={images.technologies.replace('/','')}>
        </Slide>
        <Slide transition={['fade']} bgColor='quartenary' bgImage={images.thunderstorm2.replace('/','')}>
          <Heading size={1} caps fit textColor='primary' lineHeight={1}>
            Challenges and Hurdles
          </Heading>
          <List style={styles.opacBackground}>
            <Appear>
              <ListItem textColor='primary' textSize='1em'>Reliability of Remote Weather Api</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor='primary' textSize='1em'>Race Conditions</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor='primary' textSize='1em'>Out-of-Date Arduino/J5 Libraries</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']}  bgImage={images.thunderstorm2.replace('/','')}>
          <Image src={images.gifSlides.replace('/','')} width='100%'></Image>
        </Slide>
        <Slide transition={['fade']}  bgImage={images.thunderstorm2.replace('/','')}>
          <Heading size={1} caps fit textColor='primary' lineHeight={1}>
            Questions or Comments?
          </Heading>
          <br />
          <Heading size={1} caps fit textColor='primary'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Come and See Our Booth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
