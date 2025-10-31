import { useReducer } from "react";
import styled from "styled-components";
import RainyDance from "../assets/rainy-dance.png";
import RainyPark from "../assets/rainy-park.png";
import RainySky from "../assets/rainy-sky.png";
import SunnyPark from "../assets/sunny-park.png";
import SunnyPicnic from "../assets/sunny-picnic.png";
import SunnySky from "../assets/sunny-sky.png";
import Button from "../components/Button";
import {
  PageContainer,
  PageContent,
  PageTitle,
} from "../components/PageContent";

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const WeatherButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const ImageDescription = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  color: #333;
  text-align: center;
  margin: 0 0 1rem 0;
  line-height: 1.4;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const rainySeasonStates = {
  season: "Rainy",
  inSky: RainySky,
  isSkyDSC: "Clouds are present in the sky",
  environment: RainyPark,
  environmentDSC: "It's raining in the park",
  funActivity: RainyDance,
  funActivityDSC: "Dancing joyfully in the rain",
};
const sunnySeasonStates = {
  season: "Sunny",
  inSky: SunnySky,
  isSkyDSC: "The sky is clear and sunny",
  environment: SunnyPark,
  environmentDSC: "It's a sunny day in the park",
  funActivity: SunnyPicnic,
  funActivityDSC: "Having picnic under the sun",
};

const initialState = { ...rainySeasonStates };

const reducerHandler = (state, action) => {
  switch (action.type) {
    case "RAINY_SEASON":
      return { ...state, ...rainySeasonStates };
    case "SUNNY_SEASON":
      return { ...state, ...sunnySeasonStates };
    default:
      return state;
  }
};

const Module1 = () => {
  const [state, dispatch] = useReducer(reducerHandler, initialState);
  const handleAction = (type) => {
    dispatch({ type });
  };
  console.log("Current State:", state);
  return (
    <PageContainer>
      <PageTitle>Multiple states (useReducer())</PageTitle>
      <PageContent>
        <ButtonContainer>
          <WeatherButton
            variant="primary"
            onClick={() => handleAction("RAINY_SEASON")}
            style={{
              background: state.season === "Rainy" ? "" : "gray",
              color: state.season === "Rainy" ? "" : "black",
            }}
          >
            🌧️ Rainy Season
          </WeatherButton>
          <WeatherButton
            variant="primary"
            onClick={() => handleAction("SUNNY_SEASON")}
            style={{
              background: state.season === "Sunny" ? "" : "gray",
              color: state.season === "Sunny" ? "" : "black",
            }}
          >
            ☀️ Sunny Season
          </WeatherButton>
        </ButtonContainer>

        <GridContainer>
          <GridItem>
            <ImageDescription>{state.isSkyDSC}</ImageDescription>
            <StyledImage src={state.inSky} alt={state.isSkyDSC} />
          </GridItem>

          <GridItem>
            <ImageDescription>{state.environmentDSC}</ImageDescription>
            <StyledImage src={state.environment} alt={state.environmentDSC} />
          </GridItem>

          <GridItem>
            <ImageDescription>{state.funActivityDSC}</ImageDescription>
            <StyledImage src={state.funActivity} alt={state.funActivityDSC} />
          </GridItem>
        </GridContainer>
      </PageContent>
    </PageContainer>
  );
};

export default Module1;
