import Layout from '../templates/layout';

import Menu from '../organisms/menu';
import Header from '../organisms/header';
import Branding from '../organisms/branding';

function App() {
  
  return (
    <div>
      <Layout> 
        <Header />
        <Menu />
        <Branding />
      </Layout>
    </div>
  );
}

export default App;
