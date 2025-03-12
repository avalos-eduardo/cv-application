export default function Experience({ experienceList }) {

    return (
        <>
        <h2>Experience</h2>
        {experienceList.map((exp, index) => (
          <div className="experience-section" key={index}>
            <div className="exp-section1">
                <b><p>{exp.company}</p></b>
                <p>{exp.location}</p>
            </div>
            <div className="edu-section2">
                <b><p>{exp.position}</p></b>
                <p>{exp.startDate} - {exp.endDate}</p>
                <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  }