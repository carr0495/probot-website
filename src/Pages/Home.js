import React from "react";
import slide2 from "../static/images/slide2.png";
import slide3 from "../static/images/slide3.png";
import homehero from "../static/images/homehero.svg";
import savemoney from "../static/images/savemoney.svg";
import features from "../static/images/features.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "10px",
    alignContent: "center",
    textAlign: "center",
  },
  imgPreview: {
    maxHeight: 500,
  },
  section: {
    display: "flex",
  },
  textArea: {
    display: "flex",
    paddingRight: "20px",
    flexDirection: "column",
  },
  text: {
    marginTop: "40px",
    marginBottom: "40px",
    fontFamily: "Comfortaa, cursive",
  },
  video: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  legend: {},
}));
function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Carousel>
        <div className={classes.imgPreview}>
          <img src={savemoney} alt="save money" />
          <p className="legend">
            Save money for your buisness through virtual assitants and
            automations
          </p>
        </div>
        <div className={classes.imgPreview}>
          <img src={slide2} alt="Second Slide" />
          <p className="legend">Fast Reliable Bots</p>
        </div>
        <div className={classes.imgPreview}>
          <img src={slide3} alt="Third SLide" />
          <p className="legend">
            Automations that easily integrate into your buisness infrastructure
          </p>
        </div>
      </Carousel>
      <h1>What We Do</h1>
      <div className={classes.section}>
        <div className={classes.textArea}>
          <Typography variant="h6" className={classes.text}>
            Probot is a company dedicated to saving organizations money by
            creating robotic process automations (RPA’s) that can save employees
            and employers time. Our solution is to create RPAs to help save
            these organizations money. These RPAs can perform tasks that
            employees would normally spend hours or days completing, within
            minutes or seconds. Employees can then focus on more fulfilling
            tasks which increases their enjoyment at the workplace which helps
            overall productivity.
          </Typography>

          <Typography variant="h6" className={classes.text}>
            Our solution is to create RPAs to help save these organizations
            money. These RPAs can perform tasks that employees would normally
            spend hours or days completing, within minutes or seconds. Employees
            can then focus on more fulfilling tasks which increases their
            enjoyment at the workplace which helps overall productivity.
          </Typography>
        </div>
        <img width="500px" src={homehero} alt="hero for home" />
      </div>
      <h1>Features</h1>
      <div className={classes.section}>
        <div className={classes.textArea}>
          <div className={classes.features}>
            <img width="500px" src={features} alt="features hero" />
            <Typography variant="h4" className={classes.text}>
              <ul>
                <p>RPA Development For Enterprise Buisnesses</p>
                <p>Small Buisness Bot Development</p>
                <p>
                  Additional Security Implemented When Working With Important
                  Data
                </p>

                <p>Premium Support</p>
              </ul>
            </Typography>
          </div>

          <Typography variant="h6" className={classes.text}>
            We are the right people to build this business because we are a
            small team with emphasis on customer satisfaction and care that
            larger companies can not offer. We have a highly diverse team who
            are passionate about RPA’s and helping organizations RPA scale as
            they grow in size.
          </Typography>
        </div>
      </div>
      <div className={classes.video}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9URSbTOE4YI?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
export default Home;
