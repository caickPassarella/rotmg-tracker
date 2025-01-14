import styled from "styled-components";
import "./App.css";
import items from "./data/items.json";

import { Dungeon } from "./components/dungeonWrapper/dungeonWrapper";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 50vw;
  padding: 30px;
  gap: 8px;
  background-color: #ffffffcf;
  box-shadow: 0 0 2px #a789e0, 0 0 4px #a789e0, 0 0 5px #a789e0,
    0 0 15px #a789e0, 0 0 20px #a789e0;
`;

function App() {
  return (
    <Container>
      {items.dungeons.map((dungeon, index) => (
        <Dungeon
          dungeon={dungeon.dungeonName}
          drops={dungeon.items}
          key={index}
        />
      ))}
    </Container>
  );
}

export default App;
