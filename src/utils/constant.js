export const conutryDeatails = {
  name: "name",
  capital: "capital",
  languages: "languages",
  area: "area",
  independent: "independent",
  currencies: "currencies",
  population: "population",
  region: "region",
  subregion: "subregion",
  timezones: "timezones",
};

export const getParam = () => {
  let str = "";
  for (let keys in conutryDeatails) {
     (str = str.concat(`${keys},`));
  }
  return str;
};
