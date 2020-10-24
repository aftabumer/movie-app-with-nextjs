import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.closeButton = null;
  }

  closeModal = () => {
    this.closeButton.click();
  };

  submitModal = () => {
    alert("Submmiting modal");
    this.closeModal();
  };

  render() {
    const { hasSubmit, children } = this.props;
    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Create Movie
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Movie
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{children}</div>
              <div className="modal-footer">
                <button
                  ref={(event) => (this.closeButton = event)}
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                {hasSubmit && (
                  <button
                    onClick={this.submitModal}
                    type="button"
                    className="btn btn-primary"
                  >
                    Save changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Modal;

// const Modal = ({ children, hasSubmit }) => {
//   let closeButton = null;

// const closeModal = () => {
//   closeButton.click();
// };
// const submitModal = () => {
//   alert("Submmiting modal");
//   closeModal();
// };

//   return (
// <>
//   <button
//     type="button"
//     className="btn btn-primary"
//     data-toggle="modal"
//     data-target="#exampleModal"
//   >
//     Create Movie
//   </button>

//   <div
//     className="modal fade"
//     id="exampleModal"
//     tabIndex="-1"
//     aria-labelledby="exampleModalLabel"
//     aria-hidden="true"
//   >
//     <div className="modal-dialog">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title" id="exampleModalLabel">
//             Create Movie
//           </h5>
//           <button
//             type="button"
//             className="close"
//             data-dismiss="modal"
//             aria-label="Close"
//           >
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div className="modal-body">{children}</div>
//         <div className="modal-footer">
//           <button
//             ref={(event) => (closeButton = event)}
//             type="button"
//             className="btn btn-secondary"
//             data-dismiss="modal"
//           >
//             Close
//           </button>
//           {hasSubmit && (
//             <button
//               onClick={submitModal}
//               type="button"
//               className="btn btn-primary"
//             >
//               Save changes
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// </>
//   );
// };
// export default Modal;
