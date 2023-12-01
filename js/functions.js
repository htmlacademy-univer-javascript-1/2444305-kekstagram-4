// eslint-disable-next-line no-unused-vars
function isMeetingWithinWorkingHours(startTime, endTime, meetingStart, meetingDuration) {
  const startMinutes = convertToMinutes(startTime);
  const endMinutes = convertToMinutes(endTime);
  const meetingStartMinutes = convertToMinutes(meetingStart);

  // Рассчитываем время окончания встречи
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  // Проверяем, выходит ли встреча за рамки рабочего дня
  if (meetingStartMinutes >= startMinutes && meetingEndMinutes <= endMinutes) {
    return true;
  }
  else {
    return false;
  }
}


// Функция для преобразования времени в минуты
function convertToMinutes(time) {
  const [hours, minutes] = time.split(':');
  return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
}
