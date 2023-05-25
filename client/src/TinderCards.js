import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function getPersons() {
      const peopleCol = collection(db, "people");
      const peopleSnapshot = await getDocs(peopleCol);
      const peopleList = peopleSnapshot.docs.map((doc) => doc.data());
      setPeople(peopleList);
    }

    getPersons();
  }, []);

  return (
    <div>
      <h1>TinderCards</h1>
      <div className="tinder__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
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
  );
}

export default TinderCards;
