import { Col, Row } from "antd";
import dayjs from "dayjs";
import * as S from "../style/styles";

interface Props {}
export default function Calendar() {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDay = dayjs();
  const currentMonth = dayjs(currentDay);
  const monthStart = dayjs(currentMonth).startOf("M");
  console.log(currentMonth, " cur ", " star ", monthStart);

  const monthEnd = dayjs(monthStart).endOf("M");
  const startDate = dayjs(monthStart).startOf("w");
  const endDate = dayjs(monthEnd).endOf("w");

  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = day.format("D");
      if (dayjs(day).get("M") === dayjs(currentMonth).get("M")) {
        let selected =
          dayjs(day).format("YYYY/MM/DD") === dayjs().format("YYYY/MM/DD")
            ? "Selected"
            : "";
        console.log(selected);

        days.push(
          <S.CalendarBodyCell key={dayjs(day).format()}>
            <S.CalendarBodyCellDay itemType={selected}>
              {formattedDate}
            </S.CalendarBodyCellDay>
          </S.CalendarBodyCell>
        );
      } else {
        days.push(
          <S.CalendarBodyCell key={dayjs(day).format()}>
            {null}
          </S.CalendarBodyCell>
        );
      }
      day = dayjs(day).add(1, "d");
    }
    rows.push(
      <S.CalendarBodyRow key={dayjs(day).format()}>{days}</S.CalendarBodyRow>
    );
    days = [];
  }
  return (
    <S.Calendar>
      <S.CalendarHeader>
        {weekday.map((week, index) => (
          <div key={`calendar-${index}`}>{week}</div>
        ))}
      </S.CalendarHeader>
      <S.CalendarBody>{rows}</S.CalendarBody>
    </S.Calendar>
  );
}
