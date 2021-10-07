import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProject, addItemsToProject } from '../services/projects';

function ProjectDetail(props) {
  const [projectDetailItem, setProjectDetailItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');
  const { id } = useParams();
  const { items } = props;

  useEffect(() => {
    const getProjectDetailItem = async () => {
      const ProjectData = await getOneProject(id);
      setProjectDetailItem(projectData);
    };
    getProjectDetailItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedItem(value);
  };

  // Our handle submit for adding the item to our project
  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectDetailItem = await addItemsToProject(selectedItem, id);
    setProjectDetailItem(projectDetailItem);
  };

  return (
    <div>
      <h3>{projectDetailItem?.name}</h3>
      {projectDetailItem?.items.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
      {/* below is our form for the item drop down */}
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} defaultValue='default'>
          {/* we can set a default value to tell people to select a item*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value='default'>
            -- Select an Item --
          </option>
          {/* now we loop over all items and return an <option> tag for each */}

          {items.map((item) => (
            // we track the item's id as the "value" which will get added to state onChange
            // the item's name goes between the open and close tag which is what the user sees
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ProjectDetail