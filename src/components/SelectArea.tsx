import React, { FC } from 'react';
import type { Coordinates } from '../types';
import { createStyleSheet } from '../methods';

export type SelectAreaProps = {
  dragStart: Coordinates;
  dragEnd: Coordinates;
  offset: Coordinates;
  offsetSnap: Coordinates;
  className?: string;
};

createStyleSheet(`.select-area-wrapper{
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.select-area-wrapper > g > path.select-area {
  outline: 1px dashed #333;
}
`);

export const SelectArea: FC<SelectAreaProps> = ({
  dragEnd: { x, y },
  dragStart,
  offsetSnap,
  offset,
  className = '',
}) => {
  const sx = dragStart.x + offsetSnap.x - offset.x;
  const sy = dragStart.y + offsetSnap.y - offset.y;
  const d = `M ${x},${y} L ${x},${sy} L ${sx},${sy} L ${sx},${y} z`;

  return (
    <svg className={`select-area-wrapper ${className}`}>
      <g>
        <path className="select-area" fill="none" d={d} strokeWidth="0"></path>
      </g>
    </svg>
  );
};
