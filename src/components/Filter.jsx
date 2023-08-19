const Filter = () => {
  return (
    // <div>
    //     <div>Filter by Region</div>

    // </div>
    <select name="region" id="region">
      <option disabled>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Filter;
