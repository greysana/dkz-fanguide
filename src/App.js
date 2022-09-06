import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Router>
        <SidebarCon>
          <Sidebar />
        </SidebarCon>
        <Main />
      </Router>
    </div>
  );
}
const AppCon = styled.div`
  width: 100vw;
  display: fixed;
`;
const SidebarCon = styled.div`
  background-color: #292929;
`;

export default App;
