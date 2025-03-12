export default function PersonalDetails({name, email, phone, hometown}) {

    return (
        <div className="personal-details">
            <h2>{name}</h2>
            <p>{hometown}</p>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    )
}