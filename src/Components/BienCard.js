import React, { useState } from "react";
import { getImage } from "../Data/data";
import { Link } from "react-router-dom";

const SupModal = () => {
  return (
    <>
      <button
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        supprimer
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Voulez-vous vraiment le supprimer ?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Oui
              </button>
              <button type="button" class="btn btn-success">
                Non
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const UpdateModal = ({ updateBien }) => {
  const { description, id, photos, situationGeo, superficie } = updateBien;
  const [desc, setDesc] = useState(description);
  const [situaGeo, setSitGeo] = useState(situationGeo);
  const [superValue, setSuperValue] = useState(superficie);
  const [photosArray, setPhotosArray] = useState(photos);

  const HandleChange = (e) => {
    const { value, name } = e.target;
    if (name === "description") setDesc(value);
    if (name === "superficie") setSuperValue(value);
    if (name === "situationGeo") setSitGeo(value);
  };

  return (
    <>
      <button
        class="btn btn-warning"
        data-bs-target="#updateModal"
        data-bs-toggle="modal"
      >
        Modifier
      </button>
      <div
        className="modal fade"
        id="updateModal"
        aria-labelledby="updateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="updateModalLabel">
                Modifier bien
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label
                    className="form-label font-weight-bold"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={desc}
                    name="description"
                    onChange={HandleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    className="form-label font-weight-bold"
                    htmlFor="superficie"
                  >
                    Superficie
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="superficie"
                    value={superValue}
                    name="superficie"
                    onChange={HandleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    className="form-label font-weight-bold"
                    htmlFor="situationGeo"
                  >
                    localisation
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="situationGeo"
                    value={situaGeo}
                    name="situationGeo"
                    onChange={HandleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    className="form-label font-weight-bold"
                    htmlFor="photos"
                  >
                    photos
                  </label>
                  <input type="file" className="form-control" id="photos" />
                </div>

                <input
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: "#27ae60" }}
                  data-bs-dismiss="modal"
                  value="Modifier"
                />
              </form>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

const BienCard = ({ bien }) => {
  const src = `./images/list/p-${getImage()}.png`;
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <img src={src} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center pt-4 pb-4">
            <h5 className="card-text">{bien.description}.</h5>
          </div>
          <div className="d-flex justify-content-between">
            <UpdateModal updateBien={bien} />

            <Link
              to={`/bien/${bien.id}`}
              className="btn text-light"
              style={{ backgroundColor: "#27ae60" }}
            >
              plus...
            </Link>
            <SupModal bienId={bien.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BienCard;
