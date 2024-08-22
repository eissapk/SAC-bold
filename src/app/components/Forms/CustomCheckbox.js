import { useField } from "formik";
function CustomCheckbox({ label, ...props }) {
  const [field, meta] = useField(props);
  // console.log("field:", field); // has name, value, onBlur, onChange
  // console.log("meta:", meta); // has touched, error
  return (
    <>
      <div className="checkbox">
        <label>{label}</label>
        <input {...field} {...props} className={meta.error && meta.touched ? "input-error" : ""} />
        <span>I accept the terms of service</span>
      </div>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomCheckbox;
