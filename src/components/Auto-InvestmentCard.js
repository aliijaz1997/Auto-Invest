import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #0d0f52;
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchLabel = styled.p`
  font-size: 14px;
  color: #7f8c8d;
  margin-right: 10px;
`;

const Switch = styled.div`
  width: 30px;
  height: 20px;
  background: #27ae60;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
`;

const SwitchToggle = styled.div`
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2.5px;
  left: 2.5px;
  transition: left 0.3s;

  ${Switch}:hover & {
    left: 12.5px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const InfoBox = styled.div`
  width: 112px;
  height: 104px;
  border-radius: 10px;
  background: radial-gradient(circle, #2da5fe 0%, #218af5 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
`;

const InfoText = styled.div`
  font-family: "Proxima Nova";
  font-size: 12px;
  font-weight: bold;
  margin: 5px 0;
`;

const InterestRate = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0;
`;

const StatusText = styled.div`
  color: ${(props) => (props.active ? "#27ae60" : "#0d0f52")};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Text = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #7f8c8d;
  margin-bottom: 5px;
`;

const ActionText = styled.div`
  font-size: 10px;
  color: #7f8c8d;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#e74c3c" : "#ecf0f1")};
  color: ${(props) => (props.primary ? "#fff" : "#7f8c8d")};
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const AutoInvestmentCard = () => {
  return (
    <Container>
      <Header>
        <Title>Auto Investment</Title>
        <SwitchContainer>
          <SwitchLabel>Active</SwitchLabel>
          <Switch>
            <SwitchToggle />
          </Switch>
        </SwitchContainer>
      </Header>
      <CardContainer>
        <InfoBox>
          <InfoText>Conservative</InfoText>
          <InterestRate>10-14%</InterestRate>
          <InfoText>Interest Rate</InfoText>
        </InfoBox>
        <div style={{ flex: 1, marginLeft: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "10px",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <StatusText active>Active</StatusText>
              <Text>Status</Text>
            </div>
            <div style={{ textAlign: "left" }}>
              <StatusText>1500 SAR</StatusText>
              <Text>Max. Investment</Text>
            </div>
            <div style={{ textAlign: "left" }}>
              <StatusText>26</StatusText>
              <Text>Loans Funded</Text>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <ActionText>* Strategy started at 20th March 2021</ActionText>
            <ButtonContainer>
              <Button primary>Stop</Button>
              <Button>Change Settings</Button>
            </ButtonContainer>
          </div>
        </div>
      </CardContainer>
    </Container>
  );
};

export default AutoInvestmentCard;
