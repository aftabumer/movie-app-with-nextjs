import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";

const SideMenu = ({ categories }) => {
  return (
    <div>
      <Modal>
        <MovieCreateForm />
      </Modal>
      <h1 className="my-4">Movie DB</h1>
      <div className="list-group">
        {categories.map((category, index) => (
          <a href="#" className="list-group-item" key={index}>
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
