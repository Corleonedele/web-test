import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Ghost from './Ghost/index.js'
import Page from './LandingPage/index.js'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Visit our web
          <a
            // style={{
            //   marginLeft:"10px"
            // }}
            className="App-TeaBreak" // css in App.css and import this css file
            href="https://tea-break.cn"
            target="_blank" // whether open new window
            rel="noopener noreferrer"
            // onClick={()=>{
            //   window.location.href="https://tea-break.cn" //as the node is button to define a funciton
            // }}
            // more reference shows on https://zh-hans.reactjs.org/tutorial/tutorial.html
          >
            Our Website
          </a>
        </p>
        <div>
          <Button>Test</Button>
          <a href="www.baidu.com"></a>
        </div>

        <p>
        Movie
          <a
          className="App-TeaBreak"
          href="https://www.mini4k.com"
          >
            Mini4k
          </a>
        </p>
        <h1
      className="App-Title">
        Guide To The Universe Roaming
      </h1>
        <Ghost></Ghost>
      </header> */}
      <Page></Page>

    </div>
  );
}

export default App;
