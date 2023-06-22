import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, sprites, hp}) {
  const [side, setSide] = useState(true)

  const handleCard = () => {
    setSide(!side)
  }

  return (
    <Card>
      <div onClick={handleCard}>
        <div className="image">
          <img src={side ? sprites.front : sprites.back} alt={name}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
