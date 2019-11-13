import React from "react";
import {Card, CardImg, CardText, CardBody,CardTitle, Button,CardGroup} from 'reactstrap';
import DayOneImg from "../Images/dayone.jpg";
import DayTwoImg from "../Images/daytwo.jpg";
import DayThreeImg from "../Images/daythree.jpg"
import "./Screen.css";
export class Screen extends React.Component {
  constructor(props) {
    super(props);
  }
render(){
    return (
      <div>
      <CardGroup>
      <Card>
        <CardImg top width="100%" height="50%" src={DayOneImg}/>
        <CardBody>
          <CardTitle className="font-weight-bold">DAY ONE</CardTitle>
          <CardText>You can also choose from our range of luxury limousines for a more refined, elegant and comfortable ride – be it from the driver’s seat or the backseat.</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" height="50%" src={DayTwoImg}/>
        <CardBody>
          <CardTitle className="font-weight-bold">DAY TWO</CardTitle>
          <CardText>Even if you’re not an adrenaline junky at all, you can still go and explore the beautiful nature of Slovenia and its wildlife on your feet or on the back of a horse, riding through vast forests, accompanied by surreal scenery.</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" height="50%" src={DayThreeImg}/>
        <CardBody>
          <CardTitle className="font-weight-bold">DAY THREE</CardTitle>
          <CardText>Enjoy driving powerful 2 stroke racing karts with the help of true professionals, or you can just have a huge load of fun all by yourself, just for the sake of it.</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
    </CardGroup>
      </div>     
    );
  };
}
