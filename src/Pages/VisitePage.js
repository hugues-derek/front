import React from "react";
import Spinner from "../Components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_VISITES } from "../Graphql/Queries/ClientsQuery";
import { Link } from "react-router-dom";

function timeConverter(timesTamp) {
  const a = new Date(timesTamp * 1000);
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Aout",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}

const VisiteCard = ({ visite }) => {
  console.log(visite);
  return (
    <div className="mx-auto w-25 card p-5 my-5">
      <h3 className="mt-3">Visiteur:</h3>
      <p className="lead">
        {visite.visiteur.nom} {visite.visiteur.prenom}
        <h3>{visite.visiteur.email}</h3>
        <Link to="/">
          <button className="d-block my-2 p-2">Info Visiteur</button>
        </Link>
      </p>

      <h3 className="mt-3">Heure Visite:</h3>
      <p className="lead">{visite.heureVisite}</p>

      <h3 className="mt-3">Date Visite:</h3>
      <p className="lead">{timeConverter(visite.dateVisite)}</p>

      <h3 className="mt-3">Bien Visite:</h3>
      <p className="lead">
        <span className="px-2" style={{ fontWeight: "400" }}>
          localisation:
        </span>
        {visite.bienVisite.situationGeo}
      </p>
      <p className="lead">
        <span className="px-2" style={{ fontWeight: "400" }}>
          superficie:
        </span>
        {visite.bienVisite.superficie + "m²"}

        <Link to={`/bien/${visite.bienVisite.id}`}>
          <button className="d-block my-2 p-2">Info Bien</button>
        </Link>
      </p>
    </div>
  );
};

const VisitePage = () => {
  const { loading, error, data } = useQuery(GET_VISITES);
  if (loading) return <Spinner />;
  if (error) return <p>Something wrong</p>;
  return (
    <>
      <div className="container">
        {data.visites.length > 0 ? (
          <div className="row mt-4 mb-4 justify-content-center">
            {data.visites.map((visite) => (
              <VisiteCard key={visite.id} visite={visite} />
            ))}
          </div>
        ) : (
          <p>Pas de visites</p>
        )}
      </div>
    </>
  );
};

export default VisitePage;
