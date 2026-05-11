import React, { useState, useEffect } from "react";
import NewPlantForm from "../components/NewPlantForm";
import PlantList from "../components/PlantList";
import Search from "../components/Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Task: See all plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  // Task: Add a new plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Task: Search for plants by name (case-insensitive)
  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;