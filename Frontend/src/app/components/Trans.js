import { useTranslations } from "next-intl";

function Trans() {
	const t = useTranslations("Index");
	return <p>{t("title")}</p>;
}

export default Trans;
