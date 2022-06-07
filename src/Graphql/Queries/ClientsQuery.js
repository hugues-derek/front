import { gql } from "@apollo/client";

const GET_BIENS = gql`
  query {
    biens {
      id
      superficie
      situationGeo
      description
      photos
      proprietaire {
        nom
        id
      }
    }
  }
`;

const GET_USERS = gql`
  query {
    annonces {
      id
      dateAnnonce
      typeAnnonce
      titre
      proprio {
        nom
        id
      }
    }
  }
`;

const GET_BIEN = gql`
  query getBien($id: ID!) {
    bien(id: $id) {
      id
      situationGeo
      description
      photos
      superficie
      proprietaire {
        id
        nom
        prenom
        email
      }
    }
  }
`;

const GET_VISITES = gql`
  query {
    visites {
      id
      heureVisite
      dateVisite
      visiteur {
        nom
        prenom
        id
        email
      }
      bienVisite {
        situationGeo
        description
        superficie
        id
      }
    }
  }
`;

export { GET_BIENS, GET_USERS, GET_BIEN, GET_VISITES };
