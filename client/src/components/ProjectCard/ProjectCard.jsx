import './ProjectCard.css'

function ProjectCard(props) {
  const { name,
    img_url,
    description,
    category,
    instructions_link,
    made_for,
    notes,
    // user_id,
    item_id
  } = props;
  console.log(props)
  
  return (
    <div className="project-card glass">
      <div className="project-card-body" >
      <div className='title'>{name}</div>
      <img src={img_url} alt={name} />
        <p>{description}</p>
        <p>{ category }</p>
        <p>{ instructions_link }</p>
        <p>{ made_for }</p>
        <p>{ notes }</p>
        <p>{ item_id }</p>
      </div>
  </div>
  );
}

export default ProjectCard;
