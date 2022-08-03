import React from 'react';

export function preventDefault(e: React.SyntheticEvent | Event) {
  e.preventDefault();
}

export function stop(e: React.SyntheticEvent | Event) {
  e.stopPropagation();
}

export const blockKeyEvent = {
  onKeyDown: stop,
  onKeyUp: stop,
  tabIndex: 0,
};
