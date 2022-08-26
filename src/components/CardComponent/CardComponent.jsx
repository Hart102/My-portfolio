
const CardComponent = ({ img, action }) => {
  return (

    <div className="d-flex justify-content-center py-lg-3 py-4">
        <img src={img} className="img-fluid" alt="img" onClick={action} />
    </div>
  )
}

export default CardComponent