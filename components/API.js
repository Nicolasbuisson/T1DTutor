export function apiTest() {
  fetch("http://localhost:8000")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
}
