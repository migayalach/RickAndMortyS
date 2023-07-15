import { connect } from "react-redux";
import Card from "./Card";

const Favorites = ({ myFavorites }) => {
  return (
    <div>
      <h1>Favoritos</h1>
      {
      myFavorites?.map((favoritos)=>{
        return(
          <Card
            key={favoritos.id}
            id={favoritos.id}
            name={favoritos.name}
            species={favoritos.species}
            gender={favoritos.gender}
            image={favoritos.image}
            onClose={favoritos.onClose}
         />
        );
      })
    }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
