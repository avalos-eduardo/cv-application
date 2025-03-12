import { educationFields } from "../form-field-data";

export default function EditEducation({formData, onChange, onAdd}) {

    return (
        <form className="form" name="education">
            <h3>Education</h3>
            {educationFields.map((field) => (
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