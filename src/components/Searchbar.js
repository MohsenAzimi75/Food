import { useState } from "react";
import "./Searchbar.css";
import { useNavigate } from "react-router-dom";
const Searchbar = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>

        <input
          id="search"
          type="text"
          onChange={(event) => setTerm(event.target.value)}
          required
        />
      </form>
    </div>
  );
};
export default Searchbar;
