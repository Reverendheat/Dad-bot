import fetch from "node-fetch";

const headers = {
  'Accept': 'application/json',
}

export async function randomJoke () {
  let req = await fetch("https://icanhazdadjoke.com/", {
    headers,
    method: "GET"
  });
  return await req.json();
}