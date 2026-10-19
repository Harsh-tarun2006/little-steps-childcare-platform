
function ChildcareCard({
  name,
  location,
  ageGroup,
  rating,
  onViewDetails,
}) {
  return (
    <div className="childcare-card">
      <div className="card-image">
        <img
          src="https://images.unsplash.com/photo-1602030028438-4cf153cbae9e"
          alt={`${name} childcare service`}
        />
      </div>

      <div className="card-content">
        <h3>{name}</h3>
        <p className="location">📍 {location}</p>
        <p>Age Group: {ageGroup}</p>
        <p className="rating">⭐ {rating}</p>

        <button
          className="view-btn"
          onClick={() => onViewDetails({
            name,
            location,
            ageGroup,
            rating,
          })}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ChildcareCard;
