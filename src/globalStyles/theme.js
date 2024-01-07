const breakpoints = ['320', '834', '1440'];

export const theme = {
  color: {
    // Основні кольори:
    primary_white: '#FFFFFF', // білий
    primary_black: '#050505', // чорний
    primary_violet: '#B6C3FF', // фіолетовий
    primary_black_2: '#0F0F0F', // чорний 2
    primary_lite_green: '#45FFBC', // світло зелений
    primary_grey: '#B6B6B6', // сірий
    primary_green_lite: '#E3FFA8', //зелений лайт
    secondary_color_grey_1: '#292928', // сірий 1
    secondary_color_pink: '#FFC4F7', // рожевий
    secondary_color_yellow: '#FFF3B7', // жовтий
    // допоміжні кольори:
    error: '#E74A3B', // червоний помилка
    correct: '#3CBC81', // зелений правильно
  },
  // Сімейство шрифтів, приклад font-family: ${props => props.theme.fontFamily.poppins};
  fontFamily: {
    poppins: "'Poppins', sans-serif",
  },
  // Ширина шрифта, приклад font-weight: ${props => props.theme.fontWeights.bold};
  fontWeights: {
    regular: 400, // нормальний
    medium: 500, // середній
    semiBold: 600, // напівжирний
    bold: 700, // жирний
  },
  // Розміри шрифту, приклад font-size: ${props => props.theme.fontSizes.l};
  fontSizes: {
    xs: '14px',
    s: '16px',
    m: '18px',
    l: '22px',
    l2: '24px',
    xl: '30px',
    xxl: '32px',
  },

  //Медіа запити, прклад
  // @media screen and(${ props => props.theme.mq.tablet}) {
  //    font-size: ${props => props.theme.fontSizes.l}px;
  // }
  mq: {
    mobile: `min-width: ${breakpoints[0]}px`, // Мобілка
    tablet: `min-width: ${breakpoints[1]}px`, // Планшет
    desktop: `min-width: ${breakpoints[2]}px`, // Дескстоп
  },
};
