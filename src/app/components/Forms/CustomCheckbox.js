import { useField } from "formik";
function CustomCheckbox({ label, ...props }) {
  const [field, meta] = useField(props);
  // console.log("field:", field); // has name, value, onBlur, onChange
  // console.log("meta:", meta); // has touched, error
  return (
    <>
      <div className="flex justify-start items-center mt-4">
        <label>{label}</label>
        <input
          {...field}
          {...props}
          className={meta.error && meta.touched ? "w-fit mr-2 scale-125 border-[#fc8181]" : "w-fit mr-2 scale-125"}
        />
        <span>I accept the terms of service</span>
      </div>
      {meta.touched && meta.error && <div className="text-[#fc8181] text-xs text-left mt-1">{meta.error}</div>}
    </>
  );
}

export default CustomCheckbox;
