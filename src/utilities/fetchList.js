import axios from 'axios';

export async function fetchList(url) {
  const response = await axios
    .get(url)
    .then((response) => response.data);
  try {
    const data = response.data.transactions;
    return data;
  } catch (err) {
    console.log(err);
  }
}
