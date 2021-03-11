import styled, { css } from 'styled-components';

export const StyledTable = styled.table`
  ${({ theme }) => css`
    background-color: ${theme.colorBasic1100};
    border-radius: ${theme.buttonRoundBorderRadius};
    box-shadow: ${theme.sidebarShadow};
    border-collapse: collapse;
  `}
`;

export const StyledTbody = styled.tbody`
  padding: 2rem;
`;

export const StyledThead = styled.thead`
  ${({ theme }) => css`
    background-color: ${theme.sidebarMenuItemHighlightColor};
  `}
`;

export const StyledTh = styled.th`
  ${({ theme }) => css`
    padding: ${theme.tabsetContentPadding};
  `}
`;

export const StyledTr = styled.tr`
  ${({ theme }) => css`
    border-bottom: 1px ${theme.dividerStyle} ${theme.colorBasic800};
  `}
`;

export const StyledTd = styled.td`
  ${({ theme }) => css`
    height: 7rem;
    padding: ${theme.tabsetContentPadding};
    &:nth-child(3) {
      width: 200px;
    }
  `}
`;
