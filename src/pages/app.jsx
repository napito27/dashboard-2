import Layout from '../templates/layout';

import Menu from '../organisms/menu';
import Header from '../organisms/header';
import Branding from '../organisms/branding';
import KPI from '../organisms/kpi';

function App() {
  
  return (
    <div>
      <Layout> 
        <Header />
        <Menu />
        <Branding />
        <KPI />
        <KPI />
        <KPI />
        <KPI />
      </Layout>
    </div>
  );
}

export default App;
