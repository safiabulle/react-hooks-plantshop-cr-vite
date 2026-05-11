import React, { useEffect, useState } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import Header from "./Header";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // 1. State for search

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // 2. Filter the plants based on the search query
  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <main>
      <Header />
      <NewPlantForm onAddPlant={handleAddPlant} />
      {/* 3. Pass the search state and setter to the Search component */}
      <Search 
        searchTerm={searchQuery} 
        onSearchChange={setSearchQuery} 
      />
      {/* 4. Pass ONLY the filtered plants to the list */}
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default App;