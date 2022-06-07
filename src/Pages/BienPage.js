import React from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../Components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_BIEN } from "../Graphql/Queries/ClientsQuery";
import { getImage } from "../Data/data";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import ClientInfo from "../Components/ClientInfo";

const BienPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BIEN, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  console.log(data);
  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5 my-5">
          {data.bien.photos.map((item, id) => {
            return (
              <img
                className="img-thumbnail d-inline"
                src={`/images/list/p-${getImage()}.png`}
                alt={id}
                key={id}
              />
            );
          })}
          <h2>{data.bien.description}.</h2>
          <h3 className="mt-3">Localisation:</h3>
          <p className="lead">{data.bien.situationGeo}</p>

          <h3 className="mt-3">Superficie:</h3>
          <p className="lead">{data.bien.superficie + "m²"}</p>
          <ClientInfo client={data.bien.proprietaire} />
          <Link
            to="/bien"
            className="btn btn-success mb-3 btn-sm w-25 d-inline ms-auto fs-4"
          >
            <BsFillArrowLeftSquareFill />
            {"  "}
            Retour
          </Link>
        </div>
      )}
    </>
  );
};

export default BienPage;
