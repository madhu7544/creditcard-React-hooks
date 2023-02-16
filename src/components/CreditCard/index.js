import {useState} from 'react'

import {
  Container,
  CreditCardCont,
  PaymentMethod,
  HeadCreditCard,
  CardContainer,
  CardNumber,
  CardNameHead,
  Name,
  PaymentContainer,
  PaymentHead,
  InputNumber,
  InputName,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  const onchangeName = event => {
    setName(event.target.value)
  }
  return (
    <Container>
      <CreditCardCont>
        <HeadCreditCard>CREDIT CARD</HeadCreditCard>
        <CardContainer data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <CardNameHead>CARDHOLDER NAME</CardNameHead>
          <Name>{name}</Name>
        </CardContainer>
      </CreditCardCont>
      <PaymentMethod>
        <PaymentContainer>
          <PaymentHead>Payment Method</PaymentHead>
          <InputNumber
            type="text"
            placeholder="Card Number"
            value={number}
            onChange={onChangeNumber}
          />
          <InputName
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onchangeName}
          />
        </PaymentContainer>
      </PaymentMethod>
    </Container>
  )
}
export default CreditCard
