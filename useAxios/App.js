import useAxios from "./App";

const App = () => {
  const req = useAxios({
    url: "yts.am/api/v2/list_movies.json"
  });

  return (
    <>
      <div className="App">
        <h1>{req.data && req.data.status}</h1>
        <h2>{req.loading && "loading"}</h2>
        <button onClick={req.refetch}>refetch</button>
      </div>
    </>
  );
};

export default App;
