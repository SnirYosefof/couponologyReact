import "./Bye.css";

function Bye(): JSX.Element {
  return (
    <div className="Bye flex-col-center font2">
        <h2>See you at the next time</h2>
      <iframe
        src="https://giphy.com/embed/26u4b45b8KlgAB7iM"
        width="480"
        height="324"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/reactionseditor-reaction-26u4b45b8KlgAB7iM"></a>
      </p>
    </div>
  );
}

export default Bye;
