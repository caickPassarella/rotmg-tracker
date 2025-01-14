import { DropWrapper, DungeonWrapper, Icon } from "./styles";
import PropTypes from "prop-types";

export const Dungeon = ({ dungeon, drops }) => {
  return (
    <DropWrapper>
      <DungeonWrapper src={`/src/assets/dungeons/${dungeon}.png`} />
      {drops.map((drop) => (
        <Icon key={drop.id} src={drop.image} />
      ))}
    </DropWrapper>
  );
};

Dungeon.propTypes = {
  dungeon: PropTypes.string,
  drops: PropTypes.array,
};
