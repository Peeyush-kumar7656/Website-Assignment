import './App.css';
import illustration from '../src/assets/illustration.png'
import apiimage from '../src/assets/apiTeam@2x-5a72bbd0df3f17c4851dca773b2b1b8f-3ad8f.png'
import graphQL from '../src/assets/graphQL.png'
import botbot from '../src/assets/botbot.png'
import showcase from '../src/assets/showcase.png'
import superimg  from '../src/assets/superchargeWorkflow.png'
import logowhite from '../src/assets/logo-white.svg'
import logoblue from '../src/assets/logo-blue.svg'
import React from "react";
function App() {
  return (
    <>
    <div className="header">
      <div className="blue">
        <img src={logowhite} alt="logowhite"/>
      </div>

      <div className="developers">
      <h5>|DEVELOPERS</h5>
      </div>
       
        <div className="Marvel">
				<h5> Why Marvel</h5>
        </div>

        <div className="Enterprise">
				<h5> Enterprise</h5>
        </div>

        <div className="pricing">
				<h5> Pricing</h5>
        </div>

        <div className="signin">
				<h5> Sign in</h5>
        </div>

        <div className="signup">
				<button> Sign up free</button>
        </div>
			</div>
   

    <div className="firstdiv">
    <div>
    <h1>Let's build the future of design,now.</h1>
    <p>Create amazing tools and intgrations for 1 million users or customise Marvel for your team.</p>
    <div className="buttons">
    <button className="submit">Submit your app</button>
    <button className="view">View API Docs</button>
    </div>
    </div>
    <div className="imgdiv">
      <img src={illustration} alt="illustration"/>
    </div>
    </div>

    <div className="seconddiv">
      <h2>Experience the freedom to build <br/>the features,right away.</h2>
      <h6>You can now harness the component of our platform and build powerful <br/>integrations for our 2 million users-or simply just for our team.</h6>
    </div>


    <div className="thirddiv">

      <div className="firstimage">
      <img src={apiimage} alt="apiimage"/>
      <h2>Dedicated API Team</h2>
      <h6>Our team are available for  user's questions<br/> viaSlack Developer Community or Email.</h6>
      </div>

      <div className="secondimage">
      <img src={graphQL} alt="graphQL"/>
      <h2>Our API uses Graph QL </h2>
      <h6>No  handling server side.Get Many API'S <br/>responses in single request.</h6>
      </div>

      <div className="thirdimage">
      <img src={superimg} alt="superimg"/>
      <h2>Supercharge your workflow</h2>
      <h6>Automate workflow,integrate and analyse data <br/>and take Marvel to the next level</h6>
      </div>

    </div>

    <div className="fourthdiv">
    <div>
    <h1>Showcase your app in your integrations directory.</h1>
    <p>Buildng something special? We'are always looking to work with partners who wants to help the world bring their ideas to their life.</p>
    <div className="buttons">
    <button className="partner">Become a partner.</button>
    <button className="integration">View Integrations.</button>
    </div>
    </div>
    <div className="imgdiv2">
      <img src={showcase} alt="showcase"/>
    </div>
    </div>

    <div className="fifthdiv">
    <div className="imgdiv3">
      <img src={botbot} alt="botbot"/>
    </div>
    <div>
    <h1>A Slack-bot for creating and managing prototype.</h1>
    <p>Buildng something special? We'are always looking to work with partners who wants to help the world bring their ideas to their life.</p>
    <div className="buttons">
    <button className="partner">Become a partner.</button>
    <button className="integration">View Integrations.</button>
    </div>
    </div>
    </div>



  <div className="lastdiv">

    <div className="whitelogo">
    <img src={logoblue} alt="logoblue"/>
    </div>

    <div className="footer1">
      <h2>Overview</h2>
      <h3>Enterpise</h3>
      <h3>Pricing</h3>
      <h3>Request a demo</h3>
      <h3>Explore</h3>
      <h3>Apps</h3>
      <h3>Developer API</h3>
      </div>

      <div className="footer2">
      <h2>Features</h2>
      <h3>Wireframing</h3>
      <h3>Design</h3>
      <h3>Prototyping</h3>
      <h3>Handoff</h3>
      <h3>Integrations</h3>
      <h3>Sketch Plugin</h3>
    </div>

    <div className="footer3">
      <h2>Support</h2>
      <h3>Help Center</h3>
      <h3>Terms of services.</h3>
      <h3>Privacy</h3>
      <h3>Security</h3>
    </div>

    <div className="footer4">
      <h2>Marvel</h2>
      <h3>Blog</h3>
      <h3>Our team</h3>
      <h3>Contact us</h3>
      <h3>Success Stories</h3>
      <h3>Brand Guidelince</h3>
    </div>

    <div className="footer5">
      <h2>Follow</h2>
      <h3>Twitter</h3>
      <h3>Drible</h3>
      <h3>Facebook</h3>
      <h3>Github</h3>
      <h3>Workable</h3>
    </div>
    </div>

    </>
  );
}
export default App;
