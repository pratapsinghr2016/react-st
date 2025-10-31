import { Component } from "react";
import sittingImage from "../assets/sitting.png";
import standingImage from "../assets/standing.png";
import Button from "../components/Button";
import {
  PageContainer,
  PageContent,
  PageTitle,
} from "../components/PageContent";

class Module01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSitting: true,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isSitting: !prevState.isSitting,
    }));
  };

  render() {
    const { isSitting } = this.state;

    return (
      <PageContainer>
        <PageTitle>State (Class Component)</PageTitle>
        <PageContent>
          <Button onClick={this.handleToggle} variant="primary">
            {isSitting ? "Stand Up" : "Sit Down"}
          </Button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>You are currently {isSitting ? "sitting" : "standing"}</h2>
            <img
              style={{ marginTop: 15 }}
              width={200}
              src={isSitting ? sittingImage : standingImage}
              alt="Person"
            />
          </div>
        </PageContent>
      </PageContainer>
    );
  }
}

export default Module01;
