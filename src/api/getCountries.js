export async function getCountries() {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all', {
      cors: true,
    });
    if (!res.ok) {
      throw new Error(`Server error, status: ${res.status}`);
    }
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
}
