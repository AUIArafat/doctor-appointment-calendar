import dayjs from "dayjs";
import * as S from "../style/styles";
import { Appointment } from "../types";

type Props = {
  month: number;
  year: number;
  appointments: Appointment[] | null;
  handleSelectedAppointment: (id: string) => void;
};
function formatResponseData(appointments: Appointment[]) {
  const result: { [id: string]: Appointment[] } = {};
  appointments.forEach((res: Appointment) => {
    if (!result[res.date]) {
      result[res.date] = [res];
    } else {
      result[res.date].push(res);
    }
  });
  return result;
}

export default function Calendar(props: Props) {
  const { month, year, appointments, handleSelectedAppointment } = props;
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentMonth = dayjs(dayjs().year(year).month(month));
  const monthStart = dayjs(currentMonth).startOf("M");

  const monthEnd = dayjs(monthStart).endOf("M");
  const startDate = dayjs(monthStart).startOf("w");
  const endDate = dayjs(monthEnd).endOf("w");

  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = "";
  const formattedAppointment = appointments
    ? formatResponseData(appointments)
    : null;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = day.format("D");
      if (dayjs(day).get("M") === dayjs(currentMonth).get("M")) {
        let selected =
          dayjs(day).format("DD/MM/YYYY") === dayjs().format("DD/MM/YYYY")
            ? "Selected"
            : "";

        days.push(
          <S.CalendarBodyCell key={dayjs(day).format()}>
            <S.CalendarBodyCellDay itemType={selected}>
              {formattedDate}
            </S.CalendarBodyCellDay>
            {formattedAppointment &&
            formattedAppointment[dayjs(day).format("DD/MM/YYYY")] ? (
              <S.CalendarBodyCellAppointment>
                <ul>
                  {formattedAppointment[dayjs(day).format("DD/MM/YYYY")].map(
                    (item: Appointment) => (
                      <li
                        key={item.id}
                        onClick={() => handleSelectedAppointment(item.id)}
                      >
                        <p>{item.name}</p>
                        <span>{item.time}</span>
                      </li>
                    )
                  )}
                </ul>
              </S.CalendarBodyCellAppointment>
            ) : null}
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
