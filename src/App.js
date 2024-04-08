import { MoralisProvider } from 'react-moralis';
import Header from './component/Header';
import Price from './component/GetPrice';
import Stage from './component/GetStage';
import HardCap from './component/GetHardCap';
import TokenLeft from './component/TokenLeft';
import TokenRaised from './component/TotalRaised';
import Claim from './component/Claim';
import { NotificationProvider } from '@web3uikit/core';

function App() {
  return (
    <MoralisProvider initializeOnMount = {false}>
      <NotificationProvider>
        <Header />
        <Price />
       {/*  <Stage /> */}
        <HardCap />
        <TokenLeft />
        <TokenRaised />
        <Claim />
      </NotificationProvider>
    </MoralisProvider>
  );
}

export default App;
