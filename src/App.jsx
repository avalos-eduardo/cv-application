import "./styles/App.css";
import { useState } from "react";
import EditEducation from "./components/EditEducation";
import EditExperience from "./components/EditExperience";
import EditPersonalDetails from "./components/EditPersonalDetails";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import Experience from "./components/Experience";

export default function App() {

  const [personalDetails, setPersonalDetails] = useState({
    name: "Eduardo Avalos",
    hometown: "Memphis, TN",
    email: "avalos2001eduardo@gmail.com",
    phone: "(901) 123-4567",
  })

  const [educationList, setEducationList] = useState([
    {
      schoolName: "Example University",
      study: "Computer Science",
      startDate: "2025",
      endDate: "Present",
      location: "Somewhere, USA",
    },
    {
      schoolName: "University of Memphis",
      study: "Business Information Technology",
      startDate: "2020",
      endDate: "2023",
      location: "Memphis, TN",
    },
  ])

  const [education, setEducation] = useState({
    schoolName: "",
    study: "",
    startDate: "",
    endDate: "",
    location: "",
  })

  const [experienceList, setExperienceList] = useState([
    {
      company: "Google",
      position: "Software Engineer",
      startDate: "2025",
      endDate: "Present",
      location: "Mountain View, CA",
      description: "Developed web and mobile applications",
    },
    {
      company: "Facebook",
      position: "Front End Developer",
      startDate: "2021",
      endDate: "2024",
      location: "Menlo Park, CA",
      description: "Developed new features using React",
    },
    {
      company: "Example",
      position: "Example Developer",
      startDate: "2001",
      endDate: "2021",
      location: "Memphis, TN",
      description: "Used examples to display preview of resume format",
    }
  ])

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  })

  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target; 
    setPersonalDetails((prevDetails) => ({
       ...prevDetails,
       [name]: value,
    }))
  }

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target; 
    setExperience((prevExperience) => ({
       ...prevExperience,
       [name]: value,
    }))
  }  


  const handleAddEducation = (e) => {
    e.preventDefault();
    setEducationList([...educationList, education]);
    setEducation({
      schoolName: "",
      study: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    setExperienceList([...experienceList, experience]);
    setExperience({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    })
  }

  const handleClearAll = () => {
    setPersonalDetails({
      name: "",
      hometown: "",
      email: "",
      phone: "",
    });
  
    setEducationList([]); // Clear all education entries
    setExperienceList([]); // Clear all experience entries
  };

  return (
    <>
      <h1 className="app-title"> CV Application </h1>
      <button onClick={handleClearAll} className="clear-button">
        Clear All
      </button>
      <div className="application">
        <div className="editing-section">
          <div className="form-container">
            <EditPersonalDetails 
              formData={personalDetails}
              onChange={handlePersonalDetailsChange}
            />
          </div>
          <div className="form-container">
            <EditEducation
              formData={education}
              onChange={handleEducationChange} 
              onAdd={handleAddEducation}
              />
          </div>
          <div className="form-container">
            <EditExperience
              formData={experience}
              onChange={handleExperienceChange}
              onAdd={handleAddExperience}
            />
          </div>
        </div>

        <div className="resume-display">
          <div className="resume">
            <PersonalDetails {...personalDetails} />
            <div className="education">
              <Education educationList={educationList} />
            </div>
            <div className="experience">
              <Experience experienceList={experienceList} />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}