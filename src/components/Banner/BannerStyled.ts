import styled from "styled-components";

export const Banner = styled.section`
  background-image: url("../src/assets/banner.jpg");
  background-size: cover;
  background-position: center;
  padding: 2rem;
  margin-bottom: 80px;
`

export const BannerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  height: 250px;
  text-align: center;

  h2{
    font-size: 32px;
    font-weight: 900;
  }
`
