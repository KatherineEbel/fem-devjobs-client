import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import {ApolloProvider} from "@apollo/client";
import {client} from "./graphql/queries";
import {ThemeProvider} from "./hooks/useTheme";
import JobDetail from "./components/JobDetail";
import Landing from "./pages/Landing";

function App() {
  return (
      <ApolloProvider client={client}>
          <ThemeProvider>
              <BrowserRouter>
                  <Routes>
                      <Route path='/' element={<Layout/>}>
                          <Route index element={<Landing/>}/>
                          <Route path='jobs/:jobId' element={<JobDetail/>}/>
                      </Route>
                  </Routes>
              </BrowserRouter>
          </ThemeProvider>
      </ApolloProvider>
  );
}

export default App;
