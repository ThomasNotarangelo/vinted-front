import { useEffect, useState } from "react";
import axios from "axios";
// Pour récupérer un params dans un url
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //   Je déstructure la clé id de l'objet que renvoi useParams. Autre façon : const params.id = useParams
  const { id } = useParams();

  //   console.log(params);
  //   console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // Je concatène ma chaîne de caractère à id. J'aurais aussi pû faire directement une interpolation : `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
          "https://lereacteur-vinted-api.herokuapp.com/offer/" + id
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // Pour ne pas avoir de warning dans le terminal lié au projet j'inclue id dans le tableau de dépendance. Utile au cas où l'id change de valeur.
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <h2>{data.product_name}</h2>
      {data.product_details.map((detail, index) => {
        // Je donne l'objet detail à ma fonction qui va me retourner un tableau.
        const keyName = Object.keys(detail);
        console.log(keyName[0]);
        return (
          <div key={index}>
            <span>{keyName[0]}</span>
            <span>{detail[keyName[0]]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Offer;
