import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About flex-col-center font">
			 <h1 className="flex-center">About</h1>
             <h5>The new coupon website, created by Snir Yosefof, the access to the coupons is only to Snir Yosefof credit card members...  </h5>
            <iframe src="https://giphy.com/embed/l41YouCUUcreUabHW" width="480" height="272" frameBorder="0" className="giphy-embed " allowFullScreen></iframe><p><a className="link" href="https://www.youtube.com/watch?v=_6qklnKfiUA"> where are you you here?</a></p>
        </div>
    );
}

export default About;
