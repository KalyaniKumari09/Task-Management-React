const ButtonFilter = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      <label>
        <input
          type="radio"
          name="filter"
          value="all"
          checked={filter === "all"}
          onChange={() => setFilter("all")}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="completed"
          checked={filter === "completed"}
          onChange={() => setFilter("completed")}
        />
        Completed
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="incomplete"
          checked={filter === "incomplete"}
          onChange={() => setFilter("incomplete")}
        />
        Incomplete
      </label>
    </div>
  );
};

export default ButtonFilter;
