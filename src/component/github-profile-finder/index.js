import { useEffect, useState } from "react";
import User from "./user";
import "./style.css"

export default function GithubProfileFinder() {
  const [UserName, setUserName] = useState("MUHMMADSALEH");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${UserName}`);
      const data = await res.json();
      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
      console.log("mounted")
      fetchUserData();
    }, []);
    console.log(userData);

  if (loading) {
    return <p>Data is Loading....</p>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-byusername"
          placeholder="Enter github Username..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={fetchUserData}> Search</button>
      </div>
      {
        userData && <User user ={userData}/>
      }
    </div>
  );
}
