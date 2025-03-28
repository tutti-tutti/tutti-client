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
