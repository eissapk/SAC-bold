const apiUrl = process.env.API_ENDPOINT || "http://127.0.0.1:1337/";
export interface IMetaData {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export class ApiService {
  protected apiUrl = process.env.API_ENDPOINT || "http://127.0.0.1:1337/";
  private locale: string;
  protected translatedSlug: string | undefined;
  protected metaData: IMetaData | undefined;

  constructor(locale: string) {
    this.locale = locale;
  }
  public getTranslatedSlug() {
    return this.translatedSlug;
  }

  async get(api: string, appendLocale: boolean = false, isArray = false, select = undefined, populate = undefined) {
    let locale = appendLocale ? "&locale=" + this.locale : "?locale=" + this.locale;
    locale += select ? "&select=" + select : "";
    locale += populate ? "&populate=" + populate : "";
    const url = encodeURI(this.apiUrl + `api/` + api + locale);
    console.log(123, url);

    const fetchData = await fetch(url, { next: { revalidate: 10 } });
    const fetchJson = await fetchData.json();
    if (isArray) {
      if (fetchJson.meta) {
        this.metaData = fetchJson.meta;
      }
      return fetchJson?.data.map((i: { id: any; attributes: any }) => {
        return {
          id: i.id,
          ...i.attributes,
        };
      });
    } else {
      return {
        id: fetchJson?.data?.id,
        ...fetchJson.data?.attributes,
      };
    }
  }
  async post(api: string, appendLocale: boolean = false, data: any = {}) {
    let locale = appendLocale ? "&locale=" + this.locale : "?locale=" + this.locale;
    const url = encodeURI(this.apiUrl + `api/` + api + locale);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const JSONdata = JSON.stringify(data);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONdata,
    };

    const fetchData = await fetch(url, requestOptions);
    const fetchJson = await fetchData.json();
    return fetchJson;
  }

  async getById(api: string, apiName?: string, appendLocale: boolean = false) {
    let locale = appendLocale ? "&locale=" + this.locale : "?locale=" + this.locale;
    const url = encodeURI(this.apiUrl + `/` + api + locale);
    const fetchData = await fetch(url);
    this.translatedSlug = undefined;
    const fetchJson = await fetchData.json();
    return fetchJson;
  }

  async getByURL(api: string, url: string, appendLocale: boolean = false, populate = undefined) {
    let locale = appendLocale ? "&locale=" + this.locale : "?locale=" + this.locale;
    locale += populate ? "&populate=" + populate : "";

    const link = encodeURI(this.apiUrl + `api/` + api + "?filters[url][$eq]=" + url + locale);
    const fetchData = await fetch(link);
    const fetchJson = await fetchData.json();
    const dataItem = fetchJson.data[0];

    if (!dataItem) {
      return {
        notFound: true,
      };
    } else {
      if (api == "services-pages") {
        if (
          dataItem &&
          dataItem.attributes.localizations.data &&
          dataItem.attributes.localizations.data.length > 0 &&
          dataItem.attributes.localizations.data[0].id
        ) {
          // const translatedPage = await fetch(encodeURI(this.apiUrl + `/` + api + '/' + dataItem.attributes.localizations.data[0].id));
          // const translatedPageJson = await translatedPage.json()
          this.translatedSlug = dataItem.attributes.localizations.data[0].attributes.url;
          dataItem.translatedSlug = dataItem.attributes.localizations.data[0].attributes.url;
        } else {
          this.translatedSlug = undefined;
          dataItem.translatedSlug = undefined;
          dataItem.noTranslation = true;
        }
      }
      return {
        id: dataItem?.id,
        ...dataItem?.attributes,
        translatedSlug: dataItem.translatedSlug || null,
        noTranslation: dataItem.noTranslation || null,
      };
    }
    // return fetchJson
  }

  getMetaData() {
    return this.metaData;
  }
}

export async function get(api: string, locale: string = "en", populate: string = undefined) {
  return {}; // just for testing without running strapi
  let url = apiUrl;
  url += "api/" + api + "/?locale=" + locale;
  if (populate) url += "&populate=" + populate;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getByUrl(api: string, locale: string = "en", slug: string, populate = undefined) {
  return {};
  let url = apiUrl;
  url += "api/" + api + "/?locale=" + locale;
  url += "&filters[url][$eq]=" + slug;
  if (populate) url += "&populate=" + populate;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
