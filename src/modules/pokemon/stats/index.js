import React from 'react';
import "./stats.css";
const Stats = ({ stats }) => (
  <article className="stats-container">
    <h2>Stats</h2>
    {
      stats.map(({base_stat,stat}, index) => (
          <p key={index} className="stat-container">
              <span className="stat-name">{stat.name} </span> 
              <span className="stat-value">{base_stat}</span>
          </p>)
      )
    }
  </article>
)

export default Stats;