
import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ChildcareCard from "./components/ChildcareCard";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState(null);

  const childcareServices = [
    {
      name: "Little Stars Daycare",
      location: "Lucknow",
      ageGroup: "2-6 years",
      rating: "4.8",
    },
    {
      name: "Happy Kids Care",
      location: "Lucknow",
      ageGroup: "1-5 years",
      rating: "4.6",
    },
    {
      name: "Sunshine Childcare",
      location: "Kanpur",
      ageGroup: "2-7 years",
      rating: "4.7",
    },
  ];

  const filteredServices = childcareServices.filter((service) => {
    const query = searchTerm.trim().toLowerCase();

    return (
      service.name.toLowerCase().includes(query) ||
      service.location.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <Navbar />

      <main className="main-content">
        <section className="hero-section">
          <h1>Find the Best Childcare for Your Child</h1>
          <p>Discover trusted childcare services near you.</p>

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </section>

        <section className="childcare-section" id="services">
          <h2>Popular Childcare Services</h2>

          <div className="card-container">
            {filteredServices.map((service) => (
              <ChildcareCard
                key={service.name}
                {...service}
                onViewDetails={setSelectedService}
              />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <p className="no-results">
              No childcare services found. Try another search.
            </p>
          )}
        </section>
        {selectedService && (
  <div className="details-panel">
    <h2>{selectedService.name}</h2>

    <p>📍 Location: {selectedService.location}</p>
    <p>Age Group: {selectedService.ageGroup}</p>
    <p>⭐ Rating: {selectedService.rating}</p>

    <button
      className="view-btn"
      onClick={() => setSelectedService(null)}
    >
      Close Details
    </button>
  </div>
)}
      </main>
    </>
  );
}

export default App;
