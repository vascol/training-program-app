import React from "react"
import { Modal } from "../components/Modal"

export const Normal = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [normalTrainings, setNormalTrainings] = React.useState([])
  const [isOpen, setOpen] = React.useState(false)
  const [modalId, setModalId] = React.useState()

  const onClickModal = (id) => {
    setModalId(id)
    setOpen(true)
  }

  React.useEffect(() => {
    setIsLoading(true)
    fetch("https://vascol.github.io/training-program-app/normalTrainings.json")
      .then((res) => res.json())
      .then((json) => {
        setNormalTrainings(json.normalTrainings)
      })
      .catch((err) => {
        console.warn(err)
        alert("Error...")
      })
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "155px" }}>Loading...</h1>
    )
  }

  return (
    <div className="trainings">
      {normalTrainings.map((obj) => (
        <div key={obj.id}>
          <div className="collection" onClick={() => onClickModal(obj.id)}>
            <h2>{obj.name}</h2>
            <img className="collection__big" src={obj.img} alt="Item" />

            <h4>{obj.description}</h4>
          </div>
          {modalId === obj.id && (
            <Modal isOpen={isOpen} setOpen={setOpen} classNameModal="modal">
              <h2 className="modal-training--title">
                <span
                  style={{
                    borderBottom: "3px solid red",
                    fontSize: "18px",
                    color: "red",
                    fontWeight: "700",
                  }}
                >
                  <em>{obj.name}</em>
                </span>
              </h2>
              <div
                onClick={() => setOpen(false)}
                className="wrapper_modal-training"
              >
                <div>
                  <h3>
                    <em>Тренування №1</em>
                  </h3>
                  <ul className="modal-training">
                    {obj.training1.map((el, index) => (
                      <li key={index}>{el}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>
                    <em>Тренування №2</em>
                  </h3>
                  <ul className="modal-training">
                    {obj.training2.map((el, index) => (
                      <li key={index}>{el}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>
                    <em>Тренування №3</em>
                  </h3>
                  <ul className="modal-training">
                    {obj.training3.map((el, index) => (
                      <li key={index}>{el}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <p className="modal-description">{obj.bigDescription}</p> */}
            </Modal>
          )}
        </div>
      ))}
    </div>
  )
}
