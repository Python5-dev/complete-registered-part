import * as Yup from "yup";

const registerSchema = Yup.object({
    username: Yup.string().matches(/^(?:[A-Za-z][A-za-z\d]*)$/, "Username must contain at least one letter").min(3, "Username must be at least 3 characters").max(15, "Username must be 15 characters or less").required("Username is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{8,}$/, "Password must be strong").min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: Yup.string().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{8,}$/, "Password must be strong").required("Confirm Password is required").oneOf([Yup.ref("password")], "Password and Confirm Password must be match")
})

const loginSchema = Yup.object({
    username_or_email: Yup.string().required("Email is requierd"),
    password: Yup.string().min(8).required("Password is required")
})

export { registerSchema, loginSchema };