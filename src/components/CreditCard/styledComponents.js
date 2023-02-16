import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const CreditCardCont = styled.div`
  background-color: #3b4b69;
  height: 100vh;
  width: 50%;
  padding: 50px;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const PaymentMethod = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`

export const HeadCreditCard = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  border-bottom: 2px solid #ffd773;
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  border-radius: 10px;
  background-size: cover;
  margin-top: 100px;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 80px;
  padding-left: 40px;
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 26px;
`

export const CardNameHead = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #d3d9e0;
`
export const Name = styled.p`
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 0px;
`

export const PaymentContainer = styled.p`
  box-shadow: 0px 4px 40px rgba(23, 31, 70, 0.16);
  background-color: #ffffff;
  padding: 40px;
`
export const PaymentHead = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`
export const InputNumber = styled.input`
  width: 100%;
  color: #c3cad9;
  font-family: 'Roboto';
  height: 34px;
`
export const InputName = styled.input`
  width: 100%;
  color: #c3cad9;
  font-family: 'Roboto';
  margin-top: 20px;
  height: 34px;
`
