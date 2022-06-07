import React from "react";
import { FaEnvelope, FaIdBadge } from "react-icons/fa";

const ClientInfo = ({ client }) => {
  return (
    <div className="my-4">
      <h2 className="mt-5"> Info Propriétaire</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <FaEnvelope className="mr-3" /> {client.email}
        </li>

        <li className="list-group-item">
          <FaIdBadge className="mr-3" /> {client.nom} {client.prenom}
        </li>
      </ul>
    </div>
  );
};

export default ClientInfo;
