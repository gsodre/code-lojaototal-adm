import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 6px 24px;
  background: #ff5811;

  margin: 0 auto;
  display: flex;
  align-items: center;

  button {
    padding: 10px;
    background: transparent;
    border: 0;

    svg {
      color: #fff;
      width: 22px;
      height: 22px;
    }
  }

  > a {
    margin: auto;
    > img {
      height: 35px;
    }
  }
`;

export const HeaderActions = styled.div`
  z-index: 2;
  display: flex;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  svg {
    color: #ff5811;
    background: #f4f4f4;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 6px;
  }

  div {
    color: #fff;
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-right: 16px;
    line-height: 20px;
  }
`;

export const DrawerContent = styled.div`
  width: 250px;

  > img {
    display: flex;
    margin: 12px auto;
    width: 200px;
  }
`;

export const DrawerProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  background: #f3f3f3;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  svg {
    color: #f4f4f4;
    background: #ff5811;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 6px;
  }

  div {
    color: #3a3a3a;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 16px;
    line-height: 20px;
  }
`;
