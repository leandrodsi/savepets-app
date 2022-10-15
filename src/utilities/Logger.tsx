const logger = __DEV__;

const formatApiLoggerUrl = (url: string | undefined) => `URL: ${url}\n`;

export const handleApiLogger = (
  action: 'REQUEST' | 'RESPONSE' | 'ERROR' | 'REQUEST AXIOS' | 'RESPONSE AXIOS',
  url: string | undefined,
  object: any,
  isRequest = false,
) => {
  if (!logger) {
    return;
  }

  const {status} = object;
  let bgColor;
  let style;

  if (isRequest) {
    bgColor = '#121C58';
  } else if (status) {
    if (status >= 100 && status < 200) {
      bgColor = '#566068';
    }

    if (status >= 200 && status < 300) {
      bgColor = '#3D837C';
    }

    if (status >= 300 && status < 400) {
      bgColor = '#121C58';
    }

    if (status >= 400 && status < 500) {
      bgColor = '#FE6000';
    }

    if (status >= 500) {
      bgColor = '#D82253';
    }
  } else {
    bgColor = '#000000';
  }

  style = `color:#FFFFFF;padding:5px;border-radius:8px;background:${bgColor}`;

  if (isRequest) {
    return console.log(`%c${action}`, style, formatApiLoggerUrl(url), object);
  }

  if (!status) {
    console.log(`%c${action}`, style, formatApiLoggerUrl(url), object.data);
  } else {
    console.log(`%c${action}`, style, formatApiLoggerUrl(url), object);
  }
};

export const handleStateLogger = (object: any, title = 'STATE') => {
  if (!logger) {
    return;
  }

  const style =
    'color:#FFFFFF;padding:5px;border-radius:8px;background:#7888e3';
  console.log(`%c${title}`, style, object);
};
