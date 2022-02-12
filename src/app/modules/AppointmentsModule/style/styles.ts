import { Layout, Row } from "antd";
import styled from "styled-components";

export const PRIMARY_COLOR = "#001529";

export const Header = styled.h1`
  text-align: center;
  color: #f0f2f5;
`;

export const Container = styled(Layout)`
  &.ant-layout {
    height: 100vh;
  }
  .ant-layout-content {
    margin: 36px;
  }
`;

export const SubHeader = styled(Row)`
  &.ant-row {
    justify-content: space-between;
  }
`;

export const Calendar = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  flex-direction: column;
  color: #111111;
  padding: 18px 0px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  background: ${PRIMARY_COLOR};
  color: white;
  div {
    display: flex;
    flex-basis: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-right: 1px solid ${PRIMARY_COLOR};
    font-weight: 600;
  }
`;

export const CalendarBody = styled.div`
  display: grid;
  height: 100%;
  grid-auto-rows: 1fr;
  border: 1px solid ${PRIMARY_COLOR};
  border-top: none;
`;

export const CalendarBodyCell = styled.div`
  flex-basis: 100%;
  text-align: center;
  border-right: 1px solid ${PRIMARY_COLOR};
  padding-top: 6px;
  height: 15vh;
`;

export const CalendarBodyCellAppointment = styled.div`
  height: 11vh;
  overflow: auto;
  ul {
    list-style: none;
    padding: 5px;
    li {
      margin-bottom: 2px;
      border: 1px solid #111111;
      cursor: pointer;
      text-align: left;
      color: #111111;
      border-radius: 4px;
      padding: 2px;
      p {
        margin-bottom: 0px;
      }
      span {
        font-size: 9px;
      }
      &:hover {
        background: ${PRIMARY_COLOR};
        color: #ffffff;
      }
    }
  }
`;

export const CalendarBodyRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${PRIMARY_COLOR};
`;

export const CalendarBodyCellDay = styled.span`
  font-family: @font-english;
  font-size: 14px;
  font-weight: bold;
  ${(props) =>
    props.itemType === "Selected"
      ? `  background: #121958;
  border-radius: 50%;
  color: #ffffff;
  padding: 5px 10px;`
      : ""}
`;

export const FormItem = styled.div`
  .ant-col {
    margin-bottom: 12px;
  }
`;
