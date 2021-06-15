import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./Requests";
import Row from "./Row";

function App() {
  return (
    <div className="app">
      {/* <h1>Hello!! From Heet Patel 🚀🚀</h1> */}
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
       
      />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrerMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
        
      />
    </div>
  );
}

export default App;
