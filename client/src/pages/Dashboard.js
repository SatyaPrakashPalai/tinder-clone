import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import ChatContainer from "../components/ChatContainer";
import "./TinderCards.css";
import Header from "../components/Header";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import axios from "axios";
import { useCookies } from "react-cookie";

function Dashboard() {
  const [people, setPeople] = useState([]);
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [lastDirection, setLastDirection] = useState();

  //cookies
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const userId = cookies.UserId;

  useEffect(() => {
    async function getPersons() {
      const peopleCol = collection(db, "people");
      const peopleSnapshot = await getDocs(peopleCol);
      const peopleList = peopleSnapshot.docs.map((doc) => doc.data());
      setPeople(peopleList);
    }

    getPersons();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user", {
        params: { userId },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGenderedUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/gendered-users", {
        params: { gender: user?.gender_interest },
      });

      setGenderedUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("userobject", user);
  console.log("mylove", genderedUsers);

  useEffect(() => {
    getUser();
    getGenderedUsers();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <>
      {user && (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />

          <div style={{ display: "flex", height: "100%" }}>
            <ChatContainer user={user} />
            <div style={{ width: "100%" }}>
              <p>you swiped {lastDirection}</p>
              <div className="tinder__cardContainer">
                {people.map((person) => (
                  <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    // onCardLeftScreen={() => outOfFrame(person.name)}
                  >
                    <div
                      style={{ backgroundImage: `url(${person.imgSrc})` }}
                      className="card"
                    >
                      <h3>{person.name}</h3>
                    </div>
                  </TinderCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
