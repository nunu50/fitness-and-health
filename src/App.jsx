import HealthSection from "./components/HealthSection"
import FitnessSection from "./components/FitnessSection"
import FoodsSection from "./components/FoodsSection"
import HomePage from "./HomePage"
function App() {

  return (
    <>
     <HomePage/>
     <HealthSection/>
     <FitnessSection/>
     <FoodsSection/>
     <script async src="https://fundingchoicesmessages.google.com/i/pub-3532739967438394?ers=1" nonce="e_9gMYbiIeIO-GfWraoFbQ"></script><script nonce="e_9gMYbiIeIO-GfWraoFbQ">(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();</script>
    </>
  )
}

export default App
