import { Form, Formik } from "formik";
import CustomField from "../CustomField";
import schema from "../schemas";
import cx from "classnames";
import { useState } from "react";
import { textBodyLg, textCaption } from "@/src/lib/ui";

// an example for yup, formik & strapi POST reuqests
function NewsLetter() {
	const [showThanks, setShowThanks] = useState(false);
	const [showFailure, setShowFailure] = useState(false);
	async function submitHandler(vals, actions) {
		console.log({ vals, actions });

		try {
			const response = await fetch("http://localhost:1337/api/newsletters", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ data: { ...vals } }), // payload shape must be: body: JSON.strigify({data: myDummyData})
			});
			const data = await response.json();

			if (data.data.attributes) console.log("success", data);
			else console.log("error", data);

			actions.setSubmitting(false);
			actions.resetForm();
			setShowThanks(true);
			setTimeout(() => setShowThanks(false), 2000);
		} catch (err) {
			actions.setSubmitting(false);
			console.error(err);
			setShowFailure(true);
			setTimeout(() => setShowFailure(false), 2000);
		}
	}

	return (
		<Formik initialValues={{ email: "" }} validationSchema={schema} onSubmit={submitHandler}>
			{props => (
				<Form className={cx("flex border-b-[1px] border-weave", { "border-[#fc8181]": Object.keys(props.errors).length && Object.keys(props.touched).length })}>
					<div className="basis-[80%] relative">
						<CustomField
							type="email"
							name="email"
							placeholder="Your email"
							className={`pe-2 w-full ${textBodyLg} bg-transparent text-weave font-pr-regular placeholder:text-weave placeholder:font-pr-regular border-none outline-none`}
						/>
						{showThanks && <div className="bg-green text-white rounded absolute px-1 top-[120%]">Thanks!</div>}
						{showFailure && <div className="bg-red text-white rounded absolute px-1 top-[120%]">Got Error, try again!</div>}
					</div>
					<button disabled={props.isSubmitting} type="submit" className={`shrink-0 basis-1/4 min-w-[5rem] ${textCaption} text-weave font-pr-light disabled:opacity-40`}>
						Subscribe
					</button>
				</Form>
			)}
		</Formik>
	);
}

export default NewsLetter;
