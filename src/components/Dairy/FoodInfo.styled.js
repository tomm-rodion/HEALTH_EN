import styled from 'styled-components';

export const MealsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  div {
    @media screen and (min-width: 1440px) {
      flex: 1;
    }
  }
`;

export const MealsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 12px;
  padding-right: 74px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    margin-bottom: 6px;
    align-items: center;
    padding-right: 40px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;

    @media screen and (min-width: 834px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
`;

export const TotalNutrients = styled.ul`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    gap: 20px;
  }
`;
export const NutrientsItem = styled.li`
  display: flex;
  gap: 20px;
  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
  }
`;

export const ItemTitle = styled.p`
  display: flex;
  gap: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  span {
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-weight: 500;
    width: 36px;
  }
`;

export const DishesWrapper = styled.div`
  display: flex;
  border-radius: 12px;
  background: ${props => props.theme.color.primary_black_2};
  padding: 16px 12px;
  position: relative;
  overflow-y: auto;
  height: 240px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 834px) {
    padding: 32px 60px 32px 14px;
  }
`;

export const Numbers = styled.ul`
  gap: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    gap: 32px;
  }

  li {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
  }
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  gap: 6px;
  color: ${props => props.theme.color.primary_grey};
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  position: absolute;
  top: 16px;
  right: 12px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 16px;
    height: 16px;
    stroke: ${props => props.theme.color.primary_grey};
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${props => props.theme.color.primary_green_lite};
    & svg {
      stroke: ${props => props.theme.color.primary_green_lite};
    }
  }

  &:focus {
    color: ${props => props.theme.color.primary_green_lite};
    & svg {
      stroke: ${props => props.theme.color.primary_green_lite};
    }
  }

  @media screen and (min-width: 834px) {
    top: 32px;
    right: 14px;
  }
`;