import axios from "axios";

export async function Request(datasend) {
  console.log(datasend, "what is thaaaaaat");
  return await axios
    .post(`http://localhost:8080/`, datasend)
    .then((res) => res.data);
}
