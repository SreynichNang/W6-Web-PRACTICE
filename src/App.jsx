import Header from './components/Header'
import Scores from './components/Scores'
import { JAVA_RESULTS } from "./data";
import { HTML_RESULTS } from "./data";
import { PYTHON_RESULTS } from "./data";
import { ENGLISH_RESULTS } from "./data";

function App() {
  return (
    <>
      <Header title="Queenie Magarazetho"/>
  
      <main className="scores-container">
        <Scores courseName="JAVA" courseResults={JAVA_RESULTS}></Scores>
        <Scores courseName="HTML" courseResults={HTML_RESULTS}></Scores>
        <Scores courseName="PYTHON" courseResults={PYTHON_RESULTS}></Scores>
        <Scores courseName="ENGLISH" courseResults={ENGLISH_RESULTS}></Scores>

      </main>
    </>
  );
}

export default App;
