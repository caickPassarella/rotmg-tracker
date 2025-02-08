import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import items from "./data/items.json";

import { Dungeon } from "./components/dungeonWrapper/dungeonWrapper";
import { ProgressBar } from "./components/progressBar/progressBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 55vw;
  padding: 40px;
  border: 2px solid #5573b3;
  gap: 25px;
  border-radius: 20px;
  background-color: #3a4f7d;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  color: #ffffff;
  font-family: "Press Start 2P", serif;
  font-size: 55px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  width: 58%;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
  /* IE, only works on <img> tags */
  -ms-interpolation-mode: nearest-neighbor;
  /* Firefox */
  image-rendering: crisp-edges;
  /* Chromium + Safari */
  image-rendering: pixelated;
`;

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <Container>
      <TitleWrapper>
        <Icon src={"/src/assets/whitebag.png"} />
        <H1>RotMG Shiny Tracker</H1>
        <Icon src={"/src/assets/whitebag.png"} />
      </TitleWrapper>
      <ItemsWrapper>
        {items.dungeons.map((dungeon, index) => (
          <Dungeon
            setProgress={setProgress}
            dungeon={dungeon.dungeonName}
            drops={dungeon.items}
            key={index}
          />
        ))}
      </ItemsWrapper>
      <ProgressBar progress={progress} />
    </Container>
  );
}

export default App;
