export const getPersons = async () => {
  const response = await fetch('https://fakerapi.it/api/v2/persons?_locale=fr_FR');
  return response.json();
}