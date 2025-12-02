function FiltersPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Filters</h1>

      <div className="space-y-3">
        <select className="border p-2 rounded">
          <option>Select Department</option>
          <option>IT</option>
          <option>CSE</option>
          <option>ECE</option>
        </select>

        <select className="border p-2 rounded">
          <option>Select City</option>
          <option>Coimbatore</option>
          <option>Chennai</option>
          <option>Bangalore</option>
        </select>

        <select className="border p-2 rounded">
          <option>Year</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
    </div>
  );
}

export default FiltersPage;
