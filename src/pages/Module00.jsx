import { useState } from "react";
import sittingImage from "../assets/sitting.png";
import standingImage from "../assets/standing.png";
import Button from "../components/Button";
import {
  PageContainer,
  PageContent,
  PageTitle,
} from "../components/PageContent";

const Module00 = () => {
  const [isSitting, setIsSitting] = useState(true);
  return (
    <PageContainer>
      <PageTitle>State</PageTitle>
      <PageContent>
        <Button onClick={() => setIsSitting(!isSitting)} variant="primary">
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
};

export default Module00;
