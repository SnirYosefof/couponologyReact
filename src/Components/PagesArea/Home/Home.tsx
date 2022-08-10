import "./Home.css";

function Home(): JSX.Element {
  return (
    <div className="Home flex-col-center font2">
      <h2>Welcome to Couponlogy</h2>
      <iframe
        src="https://giphy.com/embed/Ig6xnt4nFTjqoc1oyN"
        width="480"
        height="270"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/topshelfrecords-trippy-psychedelic-psychodelic-Ig6xnt4nFTjqoc1oyN">
        </a>
     
      </p>
    </div>
  );
}

export default Home;
