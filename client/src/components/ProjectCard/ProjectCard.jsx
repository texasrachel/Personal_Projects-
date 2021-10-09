import './ProjectCard.css'

function ProjectCard(props) {
  const { title, image, description, category, instructions_link, for, notes, user_id, item_id } = props;
  console.log(image)
  return (
    <div className="card">
      <p>ProjectCard</p>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <div className="card-body">
        <p>{description}</p>
      </div>
  </div>
  );
}

export default ProjectCard;
