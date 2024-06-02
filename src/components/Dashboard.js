import React from "react";
import styled from "styled-components";
import Chart from "./Chart";
import AutoInvestmentCard from "./Auto-InvestmentCard";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const ChartsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const barChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Spent",
      data: [5000, 10000, 15000, 20000, 25000, 30000, 35000],
      backgroundColor: "#2D91FE",
    },
    {
      label: "Expected",
      data: [10000, 15000, 20000, 25000, 30000, 35000, 40000],
      backgroundColor: "#4BDFFF",
    },
  ],
};

const pieChartData = {
  labels: ["A", "B", "C", "D"],
  datasets: [
    {
      data: [45.7, 51.5, 23.2, 51.5],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
    },
  ],
};

const CollapsibleContainer = styled.div`
  margin-top: 20px;
`;

const Collapsible = styled.details`
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  & > summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 10px;
    font-weight: 400;
    color: #0d0f52;
    list-style: none;
    &::-webkit-details-marker {
      display: none;
    }
  }
`;

const CollapsibleIcon = styled.span`
  font-size: 12px;
`;

const CollapsibleContent = styled.div`
  padding: 10px 0;
  font-size: 14px;
  color: #7f8c8d;
`;

const CollapsibleHeading = styled.div`
  color: var(--Black, #0d0f52);
  font-size: 14.883px;
  font-style: normal;
  font-weight: 700;
  line-height: 19.844px; /* 133.333% */
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <AutoInvestmentCard />
      <ChartsContainer>
        <Chart type="bar" title="Invested" data={barChartData} />
        <Chart
          type="doughnut"
          title="Excepted Risk Score Distribution"
          data={pieChartData}
        />
      </ChartsContainer>
      <CollapsibleHeading>You Might Want To Know</CollapsibleHeading>
      <CollapsibleContainer>
        <Collapsible>
          <summary>
            Why should I trust this tool?
            <CollapsibleIcon>▼</CollapsibleIcon>
          </summary>
          <CollapsibleContent>
            <p>This tool is backed by reliable data and expert analysis.</p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <summary>
            What risks are related to investments?
            <CollapsibleIcon>▼</CollapsibleIcon>
          </summary>
          <CollapsibleContent>
            <p>
              Investments carry risks including market volatility and potential
              loss of principal.
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <summary>
            What is the Auto-Investment?
            <CollapsibleIcon>▼</CollapsibleIcon>
          </summary>
          <CollapsibleContent>
            <p>
              Auto-Investment automates your investment process according to
              predefined strategies.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
