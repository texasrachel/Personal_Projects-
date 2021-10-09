function ProjectCard(props) {
  const { title, image, description } = props;
  return (
    <div>
      <h1>ProjectCard</h1>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
