// Import de useState pour stocker data dans state
// Import de useEffect et axios pour faire une requête
import { useEffect, useState } from "react";
import axios from "axios";
// Import du composant Link qui me permet de rediriger vers une autre page.
import { Link } from "react-router-dom";

const Home = () => {
  // Dans ma page Home je déclare mon state data qui sera un objet vide.
  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  //   Je crée mon useEffect qui aura pour 1er argument une fonction dans laquelle sera une autre fonction et un tableau vide en 2eme argument.
  useEffect(() => {
    // fetchData qui fera une requête axios. Elle sera asynchrone avec un try catch en cas d'erreur avec un console.log de l'erreur.
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // API
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // Console.log de response.data pour voir si j'ai bien mes éléments dans ma page Home.
        // console.log(response.data);

        // Je stocke dans mon state Data la réponse de ma requête, à savoir response.data
        // Je peux faire une vérification sur ma page dans l'onglet components de mon State avec une clé "count" et une "clé offer"
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>En cours de chargement ...</p>
  ) : (
    <div className="home-card-wrapper">
      {data.offers.map((offer, index) => {
        return (
          <Link key={offer._id} to={`/offer/${offer._id}`}>
            <div className="card-container">
              <p>{offer.product_name}</p>
              <img
                className="offer-picture"
                src={offer.product_image.secure_url}
                alt="Product image"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
