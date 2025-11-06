// src/pages/Acoes/AcoesPage.tsx

import React from 'react';
import AcaoCard from '../../Components/AcaoCard/AcaoCard';
import type { AcaoData } from '../../Interfaces/AcaoData';
import './AcoesPage.css'; 

const AcoesPage: React.FC = () => {
  const dadosAcaoExemplo: AcaoData = {
    symbol: "PETR4",
    currency: "BRL",
    longName: "Petróleo Brasileiro S.A. - Petrobras",
    regularMarketChangePercent: -0.43299999999999994,
    regularMarketPrice: 29.89,
    regularMarketDayHigh: 30.16,
    regularMarketDayLow: 29.76,
    logourl: "https://icons.brapi.dev/icons/PETR4.svg"
  };

  return (
    <div className="acoes-page">
      <h2>Ações em Destaque</h2>
      <div className="acoes-list">

        <AcaoCard acao={dadosAcaoExemplo} />
      </div>
    </div>
  );
};

export default AcoesPage;