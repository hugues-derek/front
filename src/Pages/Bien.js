import React from "react";
import { useQuery } from "@apollo/client";
import Spinner from "../Components/Spinner";
import BienCard from "../Components/BienCard";
import { GET_BIENS } from "../Graphql/Queries/ClientsQuery";
import Back from "../Components/Back";
import img from "../images/pricing.jpg";
import AddBien from "../Components/AddBien";
import Modal from "../Components/Modal";

const Biens = () => {
  const { loading, error, data } = useQuery(GET_BIENS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      <div className="container">
        <Modal />
        {/* <h1 className="bg-success text-center pt-2 pb-2 text-light">
          Tous les Biens
        </h1> */}
        {data.biens.length > 0 ? (
          <div className="row mt-4 mb-4 justify-content-center">
            {data.biens.map((bien) => (
              <BienCard key={bien.id} bien={bien} />
            ))}
          </div>
        ) : (
          <p>Pas de Biens</p>
        )}
      </div>
    </>
  );
};

export default Biens;
