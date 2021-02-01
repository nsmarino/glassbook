/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const breakpoints = [576, 768, 992, 1200]

export const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

export const over800 = `@media only screen and (min-width: 800px)`

export const under800 = `@media only screen and (max-width: 800px)`

export const under992 = `@media only screen and (max-width: 992px)`
export const under768 = `@media only screen and (max-width: 768px)`
