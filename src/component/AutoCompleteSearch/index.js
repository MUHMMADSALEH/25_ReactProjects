import { useEffect, useState } from "react";

export default function AutoCompleteSearch() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [serachParams, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleOnClickOfFillteredList(getSelectedQuery) {
    // console.log(getSelectedQuery);
    setSearchParam(getSelectedQuery);
    setFilteredUsers([]);
  }


  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    // console.log(query,typeof(query))
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        userData && userData.length
          ? userData.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data && data.users && data.users.length) {
        setUserData(data.users.map((user) => user.firstName));
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
      setError(err);
    }
  };
  // console.log(userData,filteredUsers);

  useEffect(() => {
    fetchUserData();
  }, []);





  if (loading) return <h3>Please wait data is loading</h3>;



  return (
    <div className="search-auto-complete-container">
      <input
        type="text"
        placeholder="Search...."
        onChange={handleChange}
        value={serachParams}
        name="search-user"
      />
      {showDropDown ? (
        <div className="drop-down-List">
          {filteredUsers.map((matchItem, index) => (
            <li
              onClick={() => handleOnClickOfFillteredList(matchItem)}
              key={index}
            >
              {matchItem}
            </li>
          ))}
        </div>
      ) : (
        <div className="original-list">
          {userData.map((userName,index) => (
            <li key={index}>{userName}</li>
          ))}
        </div>
      )}
    </div>
  );
}
// let str="hello"
// console.log(str.charAt)
