// src/Components/AcaoCard/AcaoCard.tsx

import React from 'react';
import type { AcaoData } from '../../Interfaces/AcaoData'; 
import './AcaoCard.css';

interface Props {
  acao: AcaoData;
}

const formatPercent = (value: number) => {
  const formatted = (value * 100).toFixed(2).replace('.', ',');
  const color = value > 0 ? 'green' : 'red';
  return <span style={{ color: color }}>{formatted}%</span>;
};

const AcaoCard: React.FC<Props> = ({ acao }) => {
  return (
    <div className="acao-card">
      <div className="card-header">
        <img src={acao.logourl} alt={acao.symbol} className="acao-logo" />
        <h3>{acao.symbol}</h3>
      </div>
      <p className="acao-longname">{acao.longName}</p>
      
      <div className="price-info">
        <span className="price">
          {acao.currency} {acao.regularMarketPrice.toFixed(2).replace('.', ',')}
        </span>
        <span className="change">
          {formatPercent(acao.regularMarketChangePercent)}
        </span>
      </div>

      <div className="day-range">
        <p>Baixa (dia): R$ {acao.regularMarketDayLow.toFixed(2).replace('.', ',')}</p>
        <p>Alta (dia): R$ {acao.regularMarketDayHigh.toFixed(2).replace('.', ',')}</p>
      </div>
    </div>
  );
};

export default AcaoCard;