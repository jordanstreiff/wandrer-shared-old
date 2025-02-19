interface ColorPalette {
  [key: string]: string | ColorPalette;
}

const colors: ColorPalette = {
  main: '#e72b6a',
  border: '#d8d8d8',
  secondaryText: '#8e8e8e',
  sectionBg: '#F2F4F8',
  activeRow: '#F5A623',
  gray: '#757575',
  white: '#ffffff',
  separator: '#EEEEEE',
  primary: {
    blueDark: '#314ccd',
    blue: '#4264fb',
    blueLight: '#aab7ef',
    blueFaint: '#edf0fd',
    grayDark: '#273d56',
    gray: '#73757a',
    grayLight: '#c6d2e1',
    pinkDark: '#b43b71',
    pink: '#ee4e8b',
    pinkLight: '#f8c8da',
    pinkFaint: '#fbe5ee',
    blueAct: '#4D4CFE',
    greenFaint: '#1a9274',
    grayFaint: '#d3d3d3',
  },

  secondary: {
    purpleDark: '#5a3fc0',
    purple: '#7753eb',
    purpleLight: '#c5b9eb',
    purpleFaint: '#f2effa',

    orangeDark: '#ba7334',
    orange: '#f79640',
    orangeLight: '#fbcea6',
    orangeFaint: '#feefe2',

    greenDark: '#269561',
    green: '#33c377',
    greenLight: '#afdec5',
    greenFaint: '#e8f5ee',

    yellowDark: '#a4a62d',
    yellow: '#d9d838',
    yellowLight: '#FFF5A0',
    yellowFaint: '#FCFCDF',

    redDark: '#ba3b3f',
    redLight: '#f6b7b7',
    redFaint: '#fbe5e5',

    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
  },
};

export { colors };