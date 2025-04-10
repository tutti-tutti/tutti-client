/**
 * 숫자를 가격 포맷으로 변환
 * @param amount
 * @returns 천 단위 구분자가 포함된 가격 문자열
 */
export const formatPrice = (amount: number): string => {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return '0원';
  }

  return `${amount.toLocaleString()}원`;
};

/**
 * 현재 날짜에서 지정된 일수만큼 이후의 날짜를 'yyyy-mm-dd' 형식으로 반환하는 함수
 * @param daysAfter 현재 날짜로부터 더할 일수
 * @returns 'yyyy-mm-dd' 형식의 날짜 문자열
 */
export const formatDateAfterDays = (daysAfter: number): string => {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + daysAfter);

  const year = futureDate.getFullYear();
  const month = String(futureDate.getMonth() + 1).padStart(2, '0');
  const day = String(futureDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

/**
 * 'yyyy-mm-dd' 형식의 날짜 문자열을 'mm월 dd일(요일)' 형식으로 반환하는 함수
 * @param dateString 'yyyy-mm-dd' 형식의 날짜 문자열
 * @returns 'mm월 dd일(요일)' 형식의 문자열
 */
export const formatDateWithDay = (dateString: string): string => {
  const date = new Date(dateString);

  const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더함
  const day = date.getDate();

  const dayOfWeekKorean = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = dayOfWeekKorean[date.getDay()];

  return `${month}월 ${day}일(${dayOfWeek})`;
};

/**
 * 'yyyy-mm-dd 형식의 날짜 문자열을 '${n}일 도착 예정' 형식으로 반환하는 함수
 * @param dateString 'yyyy-mm-dd' 형식의 날짜 문자열
 * @returns '${n}일 도착 예정' 형식의 문자열
 */
export const formatAfterDays = (dateString: string): string => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const targetDate = new Date(dateString);
  targetDate.setHours(0, 0, 0, 0);

  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return `${diffDays}일 뒤 도착 예상`;
};

/**
 * 'yyyy-mm-dd' 형식의 날짜 문자열을 'yyyy년 mm월 dd일' 형식으로 반환하는 함수
 * @param dateString 'yyyy-mm-dd' 형식의 날짜
 * @returns 'yyyy년 mm월 dd일' 형식의 문자열
 */
export const formatDateWithKorean = (dateString: string | Date): string => {
  if (!dateString) return '';

  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

/**
 * 'yyyy-mm-dd' 형식의 날짜 문자열을 특정 구분자 형식으로 반환하는 함수
 * @param dateString 'yyyy-mm-dd' 형식의 날짜
 * @returns 'yyyy년 mm월 dd일' 형식의 문자열
 */
export const formatDateWithSeparator = (
  dateString: string | Date,
  separator: string,
): string => {
  if (!dateString) return '';

  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}${separator}${month}${separator}${day}`;
};
