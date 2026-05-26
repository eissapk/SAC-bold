import { useField } from "formik";
function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);
//   console.log("field:", field); // has name, value, onBlur, onChange
//   console.log("meta:", meta); // has touched, error
  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error && meta.touched ? "w-full p-[0.65rem] text-base text-white border-2 border-[#fc8181] bg-[#2d3748] rounded-[10px] outline-none" : "w-full p-[0.65rem] text-base text-white border-2 border-[#4a5568] bg-[#2d3748] rounded-[10px] outline-none focus:border-[#4299e1]"}
      ></select>
      {meta.touched && meta.error && <div className="text-[#fc8181] text-xs text-left mt-1">{meta.error}</div>}
    </>
  );
}

export default CustomSelect;
