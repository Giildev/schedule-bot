import styled, { css } from 'styled-components';
import { EvaIcon } from '@paljs/ui/Icon';

export const StyledSearchInput = styled.input`
  ${({ theme }) => css`
    border: none;
    border-bottom: 2px solid ${theme.colorBasic100};
    font-size: ${theme.inputMediumPlaceholderTextFontSize};
    font-weight: ${theme.inputMediumPlaceholderTextFontWeight};
    line-height: ${theme.inputMediumPlaceholderTextLineHeight};
    padding: 0.5rem 2.5rem;
    position: relative;
    margin-bottom: 1rem;
    outline: 1px solid ${theme.colorBasic100};
    transition: all 400ms;
    min-width: 10%;
    width: auto;

    &:focus {
      border-bottom: 2px solid ${theme.colorPrimaryActive};
    }
  `}
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
`;

export const StyledIcon = styled(EvaIcon)`
  left: 0.5rem;
  margin-bottom: 1.25rem;
  position: absolute;
  z-index: 5;

  svg {
    height: 25px;
    width: 25px;
  }
`;
