import { useState, useEffect } from "react";
import { DropWrapper, DungeonWrapper, Icon } from "./styles";
import PropTypes from "prop-types";

export const Dungeon = ({ setProgress, dungeon, drops }) => {
  const [visibleDrops, setVisibleDrops] = useState([]);

  const handleClick = (id) => {
    setVisibleDrops((prev) =>
      prev.includes(id) ? prev.filter((dropId) => dropId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const progress = (visibleDrops.length / 51) * 100;
    setProgress(progress);
  }, [setProgress, visibleDrops.length]);

  return (
    <DropWrapper>
      <DungeonWrapper
        src={`/src/assets/dungeons/${dungeon}.png`}
        alt={dungeon}
      />
      {drops.map((drop) => (
        <div key={drop.id}>
          {/* Image */}
          <Icon
            $isVisible={visibleDrops.includes(drop.id)}
            onClick={() => handleClick(drop.id)}
            src={drop.image}
            alt={drop.name || "Drop"}
          />
        </div>
      ))}
    </DropWrapper>
  );
};

Dungeon.propTypes = {
  setProgress: PropTypes.func,
  dungeon: PropTypes.string,
  drops: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string,
    })
  ),
};
