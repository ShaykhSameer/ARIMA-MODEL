export default function Validation(values) {
    const errors = {};
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.name === "") {
        errors.name = "Name is required";
    }else{
        
    }
    
    if (values.password === "") {
        errors.password = "Password is required";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password must be at least 8 characters long, containing at least one digit, one lowercase letter, and one uppercase letter.";
    }

    return errors;
}
