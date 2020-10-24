import { useState } from "react";

const MovieCreateForm = ({ handleFormSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    rating: "",
    image: "",
    cover: "",
    longDescription: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleGenreChange = (event) => {
    const { options } = event.target;
    const optionsLength = options.length;
    let value = [];

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setForm({
      ...form,
      genre: value.toString(),
    });
  };

  const submitForm = () => {
    handleFormSubmit(form);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          value={form.name}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="name"
          name="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          value={form.description}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="description"
          name="description"
          placeholder="Somewhere in Middle-earth..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          value={form.rating}
          onChange={handleChange}
          type="number"
          max="5"
          min="0"
          className="form-control"
          id="rating"
          name="rating"
          placeholder="3"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          value={form.image}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="image"
          name="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          value={form.cover}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="cover"
          name="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDescription">Long Description</label>
        <textarea
          className="form-control"
          value={form.longDescription}
          onChange={handleChange}
          id="longDescription"
          name="longDescription"
          rows="3"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          onChange={handleGenreChange}
          multiple
          className="form-control"
          id="genre"
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
      <button onClick={submitForm} type="button" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default MovieCreateForm;
