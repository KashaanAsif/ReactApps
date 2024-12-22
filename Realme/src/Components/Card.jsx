export const Card = ({ model, tagline, price, image, isNew }) => {
  return (
    <div className="phone-card">
      {isNew && <span className="new-tag">NEW</span>}
      <div className="phone-image">
        <img src={image} alt={model} />
      </div>
      <div className="phone-details">
        <h3 className="phone-model">{model}</h3>
        <p className="phone-tagline">{tagline}</p>
        {price && <p className="phone-price">Rs.{price.toLocaleString()}</p>}
      </div>
    </div>
  );
};
