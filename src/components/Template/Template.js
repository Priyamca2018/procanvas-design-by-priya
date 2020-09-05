import React from "react";
import {
  Typography,
  Input,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  FormControl,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
} from "@material-ui/core";
import paint from "../../assets/images/paint.png";
import paint2x from "../../assets/images/paint2x.png";
import screenshot76 from "../../assets/images/Screenshot76.png";
import screenshot76_2x from "../../assets/images/Screenshot76_2x.png";
import screenshot75 from "../../assets/images/Screenshot75.png";
import screenshot75_2x from "../../assets/images/Screenshot75_2x.png";
import screenshot77 from "../../assets/images/Screenshot77.png";
import screenshot77_2x from "../../assets/images/Screenshot77_2x.png";
import screenshot74 from "../../assets/images/Screenshot74.png";
import screenshot74_2x from "../../assets/images/Screenshot74_2x.png";
import screenshot78 from "../../assets/images/Screenshot78.png";
import screenshot78_2x from "../../assets/images/Screenshot78_2x.png";

import "./Template.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 275,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
    marginLeft: "40px",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  card1: {
    position: "absolute",
    left: "30px",
    width: "280px",
    height: "216px",
  },
  card2: {
    position: "absolute",
    left: "350px",
    width: "280px",
    height: "216px",
  },
  card3: {
    position: "absolute",
    left: "670px",
    width: "280px",
    height: "216px",
  },
  card4: {
    position: "absolute",
    left: "990px",
    width: "280px",
    height: "216px",
  },
}));

const Template = () => {
  const [category, setCategory] = React.useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Typography variant="h6">All Templates</Typography>
      <hr />

      <div style={{ display: "flex" }}>
        <FormControl className={classes.formControl}>
          <Input type="text" placeholder="Search Here..."></Input>
        </FormControl>

        <FormControl className={classes.formControl}>
          <Select
            value={category}
            onChange={handleChange}
            style={{ position: "relative", left: "28px" }}
          >
            <MenuItem value={"Category1"}>Category1</MenuItem>
            <MenuItem value={"Category2"}>Category2</MenuItem>
            <MenuItem value={"Category3"}>Category3</MenuItem>
          </Select>
        </FormControl>

        <div
          style={{
            position: "absolute",
            left: "670px",
            marginTop: "10px",
            background: "#f1f1f1 0% 0% no-repeat padding-box",
            boxShadow: "0px 8px 20px #A4A4A421",
            borderRadius: "2px",
            opacity: "1",
          }}
        >
          <img
            src={paint}
            srcSet={`${paint2x} 2x`}
            style={{ width: "28px", height: "25px" }}
          ></img>
        </div>

        <div className="rectangular-box"></div>

        <FormControl>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.margin}
          >
            Create New
          </Button>
        </FormControl>
      </div>

      <Grid container spacing={3} style={{ marginTop: "5px" }}>
        <Grid item xs={3}>
          <Card className={(classes.root, classes.card1)}>
            <CardActionArea>
              <img
                src={screenshot76}
                srcSet={`${screenshot76_2x} 2x`}
                className={classes.media}
              ></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Template001
                </Typography>
                <Typography variant="inherit">
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Food
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Chicken
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Drink
                  </label>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card className={(classes.root, classes.card2)}>
            <CardActionArea>
              <img
                src={screenshot75}
                srcSet={`${screenshot75_2x} 2x`}
                className={classes.media}
              ></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Template001
                </Typography>
                <Typography variant="inherit">
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Food
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Chicken
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Drink
                  </label>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card className={(classes.root, classes.card3)}>
            <CardActionArea>
              <img
                className={classes.media}
                src={screenshot77}
                srcSet={`${screenshot77_2x} 2x`}
              ></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Template001
                </Typography>
                <Typography variant="inherit">
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Food
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Chicken
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Drink
                  </label>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card className={(classes.root, classes.card4)}>
            <CardActionArea>
              <img
                src={screenshot74}
                className={classes.media}
                srcSet={`${screenshot74_2x} 2x`}
              ></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Template001
                </Typography>
                <Typography variant="inherit">
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Food
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Chicken
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Drink
                  </label>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: "220px" }}>
        <Grid item xs={3}>
          <Card className={(classes.root, classes.card1)}>
            <CardActionArea>
              <img
                className={classes.media}
                src={screenshot75}
                srcSet={`${screenshot75_2x} 2x`}
              ></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Template001
                </Typography>
                <Typography variant="inherit">
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Food
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Chicken
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Drink
                  </label>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card className={(classes.root, classes.card2)}>
            <CardActionArea>
              <img
                className={classes.media}
                src={screenshot78}
                srcSet={`${screenshot78_2x} 2x`}
              ></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Template001
                </Typography>
                <Typography variant="inherit">
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Food
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Chicken
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Drink
                  </label>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card className={(classes.root, classes.card3)}>
            <CardActionArea>
              <img
                src={screenshot76}
                className={classes.media}
                srcSet={`${screenshot76_2x} 2x`}
              ></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Template001
                </Typography>

                <Typography variant="inherit">
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Food
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Chicken
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Drink
                  </label>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card className={(classes.root, classes.card4)}>
            <CardActionArea>
              <img
                src={screenshot76}
                srcSet={`${screenshot76_2x} 2x`}
                className={classes.media}
              ></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Template001
                </Typography>

                <Typography variant="inherit">
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Food
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Chicken
                  </label>
                  &nbsp;
                  <label
                    style={{
                      width: "44px",
                      height: "19px",
                      background: " #F1F1F1 0% 0% no-repeat padding-box",
                      opacity: 1,
                      padding: "5px",
                    }}
                  >
                    Drink
                  </label>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Template;
