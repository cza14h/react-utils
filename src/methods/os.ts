type OS = 'win' | 'mac' | 'linux' | 'unix' | undefined;
export const getOS = (): OS => {
  let OSName: OS;
  if (navigator.appVersion.indexOf('Win') !== -1) OSName = 'win';
  // if (navigator.userAgentData.platform.indexOf('Win') !== -1) OSName = 'win';
  if (navigator.appVersion.indexOf('Mac') !== -1) OSName = 'mac';
  // if (navigator.userAgentData.platform.indexOf('Mac') !== -1) OSName = 'mac';
  if (navigator.appVersion.indexOf('X11') !== -1) OSName = 'unix';
  // if (navigator.userAgentData.platform.indexOf('X11') !== -1) OSName = 'unix';
  if (navigator.appVersion.indexOf('Linux') !== -1) OSName = 'linux';
  // if (navigator.userAgentData.platform.indexOf('Linux') !== -1) OSName = 'linux';
  return OSName;
};

export const isMac = getOS() === 'mac';
