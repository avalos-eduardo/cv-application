import { personalDetailsFields } from "../form-field-data";

export default function EditPersonalDetails({formData, onChange}) {
    
    return (
        <form className="form" name="personal-details">
            <h3>Personal Details</h3>
            {personalDetailsFields.map((field) => (
                <div className="form-group" key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input 
                        type={field.type}
                        name={field.name} 
                        value={formData[field.name]}
                        onChange={onChange}
                        id={field.id}
                    />
                </div>
            ))} 
        </form>
    )
}