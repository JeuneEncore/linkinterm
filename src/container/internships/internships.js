import React, { useState } from "react";
import "./internships.css";

const internshipsData = [
    { id: 1, title: "Frontend Developer Internship", company: "Kaspi KZ", location: "Astana, KZ", type: "Full-Time" },
    { id: 2, title: "Data Science Internship", company: "DataArt", location: "Astana, KZ", type: "Part-Time" },
    { id: 3, title: "Marketing Internship", company: "OLX", location: "Astana, KZ", type: "Full-Time" },
    { id: 4, title: "Product Management Internship", company: "Ozon", location: "Astana, KZ", type: "Remote" },
  ];
  const Internships = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const [selectedInternship, setSelectedInternship] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "", resume: "" });

    const handleSearchChange = (event) => setSearch(event.target.value);
    const handleFilterChange = (event) => setFilter(event.target.value);

    const handleApply = (internship) => setSelectedInternship(internship);

    const handleCloseModal = () => {
        setSelectedInternship(null);
        setFormData({ name: "", email: "", resume: "" });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Replace with actual server endpoint
        fetch('https://example.com/api/apply', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, internshipId: selectedInternship.id }),
        })
        .then(response => response.json())
        .then(data => {
            alert("Application submitted successfully!");
            handleCloseModal();
        })
        .catch(error => console.error("Error submitting application:", error));
    };

    const filteredInternships = internshipsData.filter(internship => 
        internship.title.toLowerCase().includes(search.toLowerCase()) && 
        (filter === "" || internship.type === filter)
    );

    return (
        <div className="internships-container">
            <div className="search-filter">
                <input
                    type="text"
                    placeholder="Search internships"
                    value={search}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <select value={filter} onChange={handleFilterChange} className="filter-select">
                    <option value="">All Types</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                </select>
            </div>

            <div className="internship-list">
                {filteredInternships.map((internship) => (
                    <div className="internship-card" key={internship.id}>
                        <h3 className="internship-title">{internship.title}</h3>
                        <p className="internship-company">{internship.company}</p>
                        <p className="internship-location">Location: {internship.location}</p>
                        <p className="internship-type">Type: {internship.type}</p>
                        <button className="apply-button" onClick={() => handleApply(internship)}>Apply</button>
                    </div>
                ))}
            </div>

            {selectedInternship && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Apply for {selectedInternship.title}</h3>
                        <p>Company: {selectedInternship.company}</p>
                        <p>Location: {selectedInternship.location}</p>
                        <p>Type: {selectedInternship.type}</p>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Resume (URL):
                                <input
                                    type="text"
                                    name="resume"
                                    value={formData.resume}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <button type="submit" className="submit-button">Submit Application</button>
                            <button type="button" onClick={handleCloseModal} className="modal-close">Close</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Internships;
