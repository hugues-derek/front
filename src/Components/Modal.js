import React from "react";

const Modal = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-success mt-4"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Ajouter un bien
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                Ajouter bien
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
                  value="submit"
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

export default Modal;
