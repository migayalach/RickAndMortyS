import Card from "./Card";
import "../StyleSheets/Cards.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className="container">
      {characters.map((personaje) => {
        return (
          <Card
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            species={personaje.species}
            gender={personaje.gender}
            image={personaje.image}
            onClose={onClose}
            // status={personaje.status}
            // id={personaje.id}
            // origin={personaje.origin}
          />
        );
      })}
    </div>
  );
}