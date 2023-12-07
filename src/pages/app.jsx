import React from 'react'

import Layout from '../templates/layout';

import Menu from '../organisms/menu';
import Header from '../organisms/header';
import Branding from '../organisms/branding';
import KPI from '../organisms/kpi';
import TopScorer from '../organisms/top-scorer';
import Result from '../organisms/result';
import ResultNews from '../organisms/result-news';

function App() {
  const [kpiData, setKpiData] = React.useState([]);
  const [topScorerData, setTopScorerData] = React.useState([]);
  const [resultData, setResultData] = React.useState([]);
  const [resultNewsData, setResultNewsData] = React.useState([]);

  
  React.useEffect(() => {
    async function fetchKpiData() {
      const response = await fetch("http://localhost:3005/kpi");
      const data = await response.json();
      
      setKpiData(data);
    }
    
    fetchKpiData();
  }, []);

  const [kpi1, kpi2, kpi3, kpi4] = kpiData;

  React.useEffect(() => {
    async function fetchTopScorerData() {
      const response = await fetch("http://localhost:3005/topScorer");
      const data = await response.json();
      
      setTopScorerData(data);
    }
    
    fetchTopScorerData();
  }, []);

  React.useEffect(() => {
    async function fetchResultData() {
      const response = await fetch("http://localhost:3005/result");
      const data = await response.json();
      
      setResultData(data);
    }
    
    fetchResultData();
  }, []);

  React.useEffect(() => {
    async function fetchResultNewstData() {
      const response = await fetch("http://localhost:3005/resultNews");
      const data = await response.json();
      
      setResultNewsData(data);
    }
    
    fetchResultNewstData();
  }, []);


  return (
    <div>
      <Layout> 
        <Header />
        <Menu />
        <Branding />
        <KPI data={kpi1}/>
        <KPI data={kpi2}/>
        <KPI data={kpi3}/>
        <KPI data={kpi4}/>
        <TopScorer data={topScorerData}/>
        <Result data={resultData}/>
        <ResultNews data={resultNewsData}/>
      </Layout>
    </div>
  );
}

export default App;
