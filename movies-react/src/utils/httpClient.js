const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGU5ZjE5MDg1ZGE5YmYxNzhkNDhhYTQzZjEyMTVmMCIsInN1YiI6IjYyYmI1YmIyN2VmMzgxMDQzNzBkN2M4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e91KgynC_45wGqLZ0B0jEoe0dXgTddGLY8TQcdiLLlk",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}