import { css } from '@emotion/react'

const color = 'white'

export const Badge = (props) => (
  <div
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    {props.children}
  </div>
)
