import React from 'react'

import { ThemeProvider, createTheme } from '@mui/material';

import Layout from '../templates/layout';

import Menu from '../organisms/menu';
import Header from '../organisms/header';
import Branding from '../organisms/branding';
import KPI from '../organisms/kpi';
import TopScorer from '../organisms/top-scorer';
import Result from '../organisms/result';
import ResultNews from '../organisms/result-news';

import Score from '../atoms/score';
import News from '../atoms/news';
import PlayerInfo from '../atoms/player-info';

import barcelona from '../team-logos/barcelona.ico';
import realMadrid from '../team-logos/real-madrid.ico';
import arsenal from '../team-logos/arsenal.ico';
import atletico from '../team-logos/atletico_madrid.ico';
import leverkusen from '../team-logos/bayer_leverkusen.ico';
import dortmund from '../team-logos/borussia_dortmund.ico';
import munchen from '../team-logos/bayern_munchen.ico';
import city from '../team-logos/manchester_city.ico';
import united from '../team-logos/manchester_united.ico';
import newcastle from '../team-logos/newcastle_united.ico';
import porto from '../team-logos/porto.ico';
import chelsea from '../team-logos/chelsea.ico';
import sevilla from '../team-logos/sevilla.ico';
import tottenham from '../team-logos/tottenham.ico';

import playerAvatar from '../utils/player-avatar.webp';

import "../styles/app.css";

const theme = createTheme({
  typography: {
    fontFamily: "Baloo 2"
  }
});

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

  const [player1, player2, player3] = topScorerData;

  React.useEffect(() => {
    async function fetchResultData() {
      const response = await fetch("http://localhost:3005/result");
      const data = await response.json();
      
      setResultData(data);
    }
    
    fetchResultData();
  }, []);

  const [result1, result2, result3] = resultData;

  React.useEffect(() => {
    async function fetchResultNewstData() {
      const response = await fetch("http://localhost:3005/resultNews");
      const data = await response.json();
      
      setResultNewsData(data);
    }
    
    fetchResultNewstData();
  }, []);

  const [news1, news2] = resultNewsData;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout> 
          <Header />
          <Menu />
          <Branding />
          <KPI data={kpi1} team1={barcelona} team2={realMadrid}/>
          <KPI data={kpi2} team1={arsenal} team2={leverkusen}/>
          <KPI data={kpi3} team1={atletico} team2={dortmund}/>
          <KPI data={kpi4} team1={munchen} team2={city}/>
          <TopScorer>
            <PlayerInfo data={player1} playerAvatar={playerAvatar}/>
            <PlayerInfo data={player2} playerAvatar={playerAvatar}/>
            <PlayerInfo data={player3} playerAvatar={playerAvatar}/>
          </TopScorer>
          <Result >
            <Score data={result1} teamOne={porto} teamTwo={chelsea}/>
            <Score data={result2} teamOne={united} teamTwo={newcastle}/>
            <Score data={result3} teamOne={sevilla} teamTwo={tottenham}/>
          </Result>
          <ResultNews>
            <News data={news1}/>
            <News data={news2}/>
          </ResultNews>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
