import { Layout, Row } from "antd";
import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  color: #f0f2f5;
`;

export const Container = styled(Layout)`
  &.ant-layout {
    height: 100vh;
  }
`;

export const SubHeader = styled(Row)`
  &.ant-row {
    justify-content: space-between;
  }
`;
