import { useField } from "formik";
function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);
//   console.log("field:", field); // has name, value, onBlur, onChange
//   console.log("meta:", meta); // has touched, error
  return (
    <>
      <label>{label}</label>
      <select {...field} {...props} className={meta.error && meta.touched ? "input-error" : ""}></select>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomSelect;
