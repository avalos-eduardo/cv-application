import { experienceFields } from "../form-field-data";

export default function EditExperience({formData, onChange, onAdd}) {

    return (
        <form className="form" name="experience">
            <h3>Experience</h3>
            {experienceFields.map((field) => (
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
            <button onClick={onAdd} className="add-new">Add New</button>
        </form>
    )
}