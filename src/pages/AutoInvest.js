import React from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

const Container = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const AutoInvest = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Header />
        <Dashboard />
      </MainContent>
    </Container>
  );
};

export default AutoInvest;
