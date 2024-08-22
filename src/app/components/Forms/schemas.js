import * as yup from "yup";

// just a guid:

// const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// export const basicSchema = yup.object().shape({
//   email: yup.string().email("Please enter a valid email!").required("This field is required!"),
//   age: yup.number("Please enter your age").positive().integer().required("This field is required!"),
//   password: yup.string().min(5).matches(passwordRegex, { message: "Please create a stronger password!" }).required("This field is required!"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Password must match!")
//     .required("This field is required!"),
// });

// export const advancedSchema = yup.object().shape({
//   username: yup.string().min(3, "Username must be at least 3 chars long").required("this field is required"),
//   jobType: yup.string().oneOf(["designer", "developer", "manager", "other"], "Pease select one").required("this field is required"),
//   acceptedTos: yup.boolean().oneOf([true], "please accept the terms of service"),
// });

const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email!").required("This field is required!")
});

export default schema;