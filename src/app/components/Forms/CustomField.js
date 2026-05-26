import { useField } from "formik";
import cx from "classnames";

function CustomField({ label, className = "", ...props }) {
	let [field, meta, helpers] = useField(props);
	//   console.log("field:", field); // has name, value, onBlur, onChange
	//   console.log("meta:", meta); // has touched, error
	//   console.log("helpers:", helpers); // has setError, setValue, setTouched

	return (
		<>
			{label && <label>{label}</label>}
			<input
				autoComplete="off"
				{...props}
				{...field}
				className={cx(meta.error && meta.touched ? "border-[#fc8181]" : "", className)}
			/>
			{meta.error && meta.touched && (
				<div className="text-[#fc8181] text-xs text-left mt-1 absolute top-[110%]">{meta.error}</div>
			)}
		</>
	);
}

export default CustomField;
