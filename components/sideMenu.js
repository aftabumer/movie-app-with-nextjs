import { createMovie } from "../actions";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import { useRouter } from "next/router";

const SideMenu = ({ categories }) => {
  let modal = null;
  const router = useRouter();

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      modal.closeModal();
      router.push("/");
    });
  };
  return (
    <div>
      <Modal ref={(ele) => (modal = ele)} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
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
