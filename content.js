// Sample Content Data for YellowZen

const projects = [
  {
    id: 1,
    slug: 'monte-carlo-portfolio',
    title: 'Monte Carlo Portfolio Simulator',
    category: 'Finance & Trading Models',
    description: 'A sophisticated Monte Carlo simulation tool for portfolio optimization and risk assessment. Models thousands of potential market scenarios to evaluate investment strategies.',
    image: 'images/hero_illustration_1765480536585.png',
    tags: ['Python', 'Finance', 'Statistics', 'Simulation'],
    techStack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'SciPy'],
    github: 'https://github.com/yellowzen/monte-carlo-portfolio',
    demo: null,
    featured: true,
    content: {
      overview: 'This project implements a comprehensive Monte Carlo simulation framework for portfolio analysis, allowing investors to model risk and return scenarios under various market conditions.',
      problem: 'Traditional portfolio analysis often relies on historical data and normal distribution assumptions, which can underestimate tail risks and extreme market events. Investors need better tools to understand potential outcomes.',
      approach: 'Built a flexible simulation engine that generates thousands of potential market scenarios using geometric Brownian motion. Incorporated correlation matrices, fat-tailed distributions, and customizable risk parameters.',
      results: 'The simulator successfully models complex portfolio behaviors with 95% confidence intervals. Tested against historical data and validated against major market events including the 2008 crash and 2020 pandemic.',
      learned: 'Gained deep insights into stochastic processes, variance reduction techniques, and the importance of model validation. Discovered that correlation breakdowns during crises are the most critical factor to model.'
    }
  },
  {
    id: 2,
    slug: 'ml-stock-predictor',
    title: 'ML Stock Price Predictor',
    category: 'Data Science & ML',
    description: 'Machine learning model using LSTM networks to predict stock price movements. Incorporates technical indicators, sentiment analysis, and volume data for enhanced accuracy.',
    image: 'images/hero_illustration_1765480536585.png',
    tags: ['Python', 'Machine Learning', 'TensorFlow', 'Finance'],
    techStack: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/yellowzen/ml-stock-predictor',
    demo: '#',
    featured: true,
    content: {
      overview: 'A deep learning system that analyzes historical stock data to predict short-term price movements using Long Short-Term Memory (LSTM) neural networks.',
      problem: 'Stock price prediction is notoriously difficult due to market efficiency and noise. Most traditional models struggle with the temporal dependencies and non-linear relationships in financial data.',
      approach: 'Implemented a multi-layer LSTM architecture with attention mechanisms. Combined technical indicators (RSI, MACD, Bollinger Bands) with sentiment scores from news headlines. Used walk-forward validation to avoid look-ahead bias.',
      results: 'Achieved directional accuracy of 58% on S&P 500 stocks over a 3-year testing period. The model excels at detecting trend reversals and momentum shifts. Sharpe ratio of 1.4 when used for trading signals.',
      learned: 'Understanding the difference between statistical significance and practical trading utility was crucial. Feature engineering proved more important than model complexity.'
    }
  },
  {
    id: 3,
    slug: 'volatility-analysis',
    title: 'Options Volatility Analyzer',
    category: 'Statistics & Probability',
    description: 'Advanced volatility surface analysis tool for options trading. Calculates implied volatility, identifies arbitrage opportunities, and visualizes volatility smiles and skews.',
    image: 'images/hero_illustration_1765480536585.png',
    tags: ['Python', 'Options', 'Statistics', 'Finance'],
    techStack: ['Python', 'QuantLib', 'NumPy', 'Plotly', 'SciPy'],
    github: 'https://github.com/yellowzen/volatility-analyzer',
    demo: null,
    featured: true,
    content: {
      overview: 'A comprehensive toolkit for analyzing options volatility surfaces, detecting mispricing, and identifying trading opportunities in the derivatives market.',
      problem: 'Options traders need to quickly assess whether options are overpriced or underpriced relative to historical and implied volatility. Manual analysis is time-consuming and error-prone.',
      approach: 'Built tools to scrape options chain data, calculate Black-Scholes implied volatility, and fit parametric models to volatility surfaces. Implemented SABR model calibration for realistic volatility dynamics.',
      results: 'Successfully identifies volatility arbitrage opportunities with 15% annual returns in backtests. The visualization tools revealed patterns in volatility term structure that informed trading strategies.',
      learned: 'Numerical stability is critical when solving for implied volatility. Learned advanced optimization techniques and the importance of market microstructure in derivatives pricing.'
    }
  },
  {
    id: 4,
    slug: 'python-data-pipeline',
    title: 'Automated Data Pipeline',
    category: 'Python & Automation',
    description: 'End-to-end data pipeline for collecting, processing, and analyzing financial market data. Includes real-time streaming, data validation, and automated reporting.',
    image: 'images/hero_illustration_1765480536585.png',
    tags: ['Python', 'ETL', 'Automation', 'Data Engineering'],
    techStack: ['Python', 'Apache Airflow', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com/yellowzen/data-pipeline',
    demo: null,
    featured: false,
    content: {
      overview: 'A production-grade data pipeline that automates the collection and processing of financial market data from multiple sources.',
      problem: 'Manually collecting and cleaning data from various APIs is time-consuming and prone to errors. Need a robust system that handles failures gracefully.',
      approach: 'Designed a modular pipeline using Apache Airflow for orchestration. Implemented retry logic, data validation schemas, and monitoring dashboards. Used Docker for consistent deployment environments.',
      results: 'Processes 500k+ data points daily with 99.9% uptime. Automated reporting reduced manual work by 20 hours per week. The system has been running reliably for over a year.',
      learned: 'Learned the importance of idempotency in data pipelines and how to design for failure. Monitoring and alerting are just as important as the pipeline itself.'
    }
  }
];

const articles = [
  {
    id: 1,
    slug: 'understanding-black-scholes',
    title: 'Understanding the Black-Scholes Model: From Theory to Practice',
    excerpt: 'A deep dive into the mathematical foundations of options pricing, with practical Python implementation and real-world examples.',
    author: 'YellowZen',
    date: '2025-01-15',
    readTime: '12 min read',
    image: 'images/hero_illustration_1765480536585.png',
    tags: ['Finance', 'Options', 'Mathematics', 'Python'],
    featured: true,
    content: `
      <h2>The Foundation of Modern Options Pricing</h2>
      <p>The Black-Scholes model revolutionized finance when it was published in 1973. This article explores the mathematical foundations and shows you how to implement it in Python.</p>
      
      <h3>The Mathematics Behind Black-Scholes</h3>
      <p>The model makes several key assumptions about market behavior. Understanding these assumptions is critical to knowing when the model is appropriate.</p>
      
      <pre><code>import numpy as np
from scipy.stats import norm

def black_scholes_call(S, K, T, r, sigma):
    """
    Calculate Black-Scholes call option price
    
    S: Current stock price
    K: Strike price
    T: Time to maturity (years)
    r: Risk-free rate
    sigma: Volatility
    """
    d1 = (np.log(S/K) + (r + sigma**2/2)*T) / (sigma*np.sqrt(T))
    d2 = d1 - sigma*np.sqrt(T)
    
    call_price = S*norm.cdf(d1) - K*np.exp(-r*T)*norm.cdf(d2)
    return call_price
</code></pre>

      <h3>Real-World Applications</h3>
      <p>While the model has limitations, it remains the industry standard for options pricing. Here's how traders use it in practice.</p>
    `
  },
  {
    id: 2,
    slug: 'python-data-pipelines',
    title: 'Building Robust Data Pipelines with Python',
    excerpt: 'Learn how to design fault-tolerant data pipelines using Apache Airflow, Docker, and modern best practices.',
    author: 'YellowZen',
    date: '2025-01-08',
    readTime: '15 min read',
    image: 'images/hero_illustration_1765480536585.png',
    tags: ['Python', 'Data Engineering', 'Automation', 'DevOps'],
    featured: true,
    content: `
      <h2>Why Data Pipelines Matter</h2>
      <p>In the age of big data, automated pipelines are essential for maintaining data quality and enabling real-time analytics.</p>
      
      <h3>Designing for Reliability</h3>
      <p>The key principles of reliable data pipelines: idempotency, monitoring, and graceful failure handling.</p>
      
      <pre><code>from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime

def extract_data(**kwargs):
    # Extract logic with retry mechanism
    pass

def transform_data(**kwargs):
    # Transformation logic
    pass

dag = DAG(
    'financial_data_pipeline',
    start_date=datetime(2025, 1, 1),
    schedule_interval='@daily',
    catchup=False
)

extract_task = PythonOperator(
    task_id='extract',
    python_callable=extract_data,
    dag=dag
)
</code></pre>
    `
  },
  {
    id: 3,
    slug: 'statistical-arbitrage-intro',
    title: 'Introduction to Statistical Arbitrage',
    excerpt: 'Explore mean-reversion strategies, cointegration testing, and pairs trading with Python implementations.',
    author: 'YellowZen',
    date: '2024-12-20',
    readTime: '18 min read',
    image: 'images/hero_illustration_1765480536585.png',
    tags: ['Finance', 'Statistics', 'Trading', 'Python'],
    featured: true,
    content: `
      <h2>The Concept of Statistical Arbitrage</h2>
      <p>Statistical arbitrage exploits mean-reverting relationships between securities. Unlike pure arbitrage, it involves statistical risk.</p>
      
      <h3>Testing for Cointegration</h3>
      <p>Before implementing a pairs trading strategy, we must verify that the securities are cointegrated.</p>
      
      <pre><code>import pandas as pd
from statsmodels.tsa.stattools import coint

# Test for cointegration
def test_cointegration(stock1, stock2):
    score, pvalue, _ = coint(stock1, stock2)
    return pvalue < 0.05  # Returns True if cointegrated

# Example usage
prices_A = pd.Series([...])  # Price series for stock A
prices_B = pd.Series([...])  # Price series for stock B

if test_cointegration(prices_A, prices_B):
    print("Stocks are cointegrated - pairs trading may be viable")
</code></pre>
    `
  }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projects, articles };
}
