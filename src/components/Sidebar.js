import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import wallet from "../assets/images/wallet.svg";
import frame from "../assets/images/Frame.svg";

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

const Wallet = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const BalanceCard = styled.div`
  background-color: #fff;
  color: #0d0f52;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const BalanceAmount = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#007bff" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#007bff")};
  border: 1px solid #007bff;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#f0f0f0")};
  }
`;

const InfoContainer = styled.div`
  text-align: center;
`;

const InfoTitle = styled.h3`
  margin: 20px 0 10px;
  font-size: 18px;
  font-weight: bold;
`;

const InfoText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo src={logo} alt="Logo" />
      <BalanceCard>
        <BalanceContainer>
          <Wallet src={wallet} alt="Wallet" />
          <BalanceAmount>62,540 SAR</BalanceAmount>
        </BalanceContainer>
        <p>Account Balance</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button primary>Deposit</Button>
          <Button>Withdraw</Button>
        </div>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "10px" }}>
          To withdraw more than <strong>10,000 SAR</strong> you need to verify
          your banking account.
        </p>
      </BalanceCard>
      <InfoContainer>
        <img
          src={frame}
          alt="Info"
          style={{ width: "108px", marginBottom: "89px" }}
        />
        <InfoTitle>Why Should You Trust It?</InfoTitle>
        <InfoText>
          Because of this and that. Anyway, investing is very good.
        </InfoText>
      </InfoContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
