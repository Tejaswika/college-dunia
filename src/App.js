import { useState } from "react";
import './App.css';
import CollegeCard from './component/Card/Card.js';
import { college } from "./College.js";

function App() {
  const [colleges, setColleges] = useState(college);
  const [sortState, setSortState] = useState("none");
  const [searchPhrase, setSearchPhrase] = useState("");

  const search = (event) => {
    const matchedCollege = college.filter((college) => {
      return `${college.college}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setColleges(matchedCollege);
    setSearchPhrase(event.target.value);
  };

  const sortMethods = {
    none: { method: (a, b) => null },
    cRAscending: { method: (a, b) => a.rating - b.rating },
    cRDescending: { method: (a, b) => b.rating - a.rating },
    uRAscending: { method: (a, b) => a.userReview - b.userReview },
    uRDescending: { method: (a, b) => b.userReview - a.userReview },
    feesAscending: { method: (a, b) => a.fees - b.fees },
    feesDescending: { method: (a, b) => b.fees - a.fees },
  };

  const collegeCard = colleges.sort(sortMethods[sortState].method).map(item => {
    return (
      <CollegeCard college={item} />
    )
  });

  return (
    <div className="Section">
      <h3 className="Heading">Collegedunia</h3>
      <div className="SearchContainer">
        <input
          type="text"
          placeholder="Search..."
          value={searchPhrase}
          onChange={search}
        />
      </div>
      <div className="SortContainer">
        <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
          <option value="DEFAULT" disabled>None</option>
          <option value="cRAscending">Collegedunia Rating - Ascending</option>
          <option value="cRDescending">Collegedunia Rating - Descending</option>
          <option value="uRAscending">User Rating - Ascending</option>
          <option value="uRDescending">User Rating - Descending</option>
          <option value="feesAscending">Fees - Ascending</option>
          <option value="feesDescending">Fees - Descending</option>
        </select>
      </div>
      <div className="CardsContainer">
        {collegeCard}
      </div>
    </div>
  );
}

export default App;
