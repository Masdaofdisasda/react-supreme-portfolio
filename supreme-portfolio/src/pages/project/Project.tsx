import styled from 'styled-components';
import React from 'react';
import Header from '../../components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

const Image = styled.img`
  max-width: 400px;
  max-height: 400px;
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

const Title = styled.h1`
  font-family: Arial, sans-serif;
  font-size: 24px;
`;

const Price = styled.p`
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.p`
  font-family: Arial, sans-serif;
  font-size: 14px;
`;

export const Project = () => {
  return (
    <>
      <Header />
      <Container>
        <ImageSection>
          <Image
            src="https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302"
            alt="Item image"
          />
        </ImageSection>
        <DetailsSection>
          <Title>World Famous Hooded Sweatshirt</Title>
          <Price>$128</Price>
          <Description>
            This is a sample description for the World Famous Hooded Sweatshirt.
            You can update this description with the actual product details.
          </Description>
        </DetailsSection>
      </Container>
    </>
  );
};
