export default function Education({ educationList }) {
    
    return (
      <>
      <h2>Education</h2>
        {educationList.map((edu, index) => (
          <div className="education-section" key={index}>
            <div className="edu-section1">
                <b><p>{edu.schoolName}</p></b>
                <p>{edu.location}</p>
            </div>
            <div className="edu-section2">
                <b><p>{edu.study}</p></b>
                <p>{edu.startDate} - {edu.endDate}</p>
            </div>
          </div>
        ))}
      </>
    );
  }