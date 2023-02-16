import "./Main.scss"

const Card = (item) => {
      const { title, image, date, desc } = item;
  console.log("ne geliyo");
  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="date">
        <h1>{date}</h1>
      </div>
      <img src={image} alt="img" />
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
