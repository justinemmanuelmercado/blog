/* eslint-disable */

import Typography from 'typography'
import wordpress2016Theme from 'typography-theme-wordpress-2016';

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _grayPercentage = require('gray-percentage');

const _grayPercentage2 = _interopRequireDefault(_grayPercentage);

const _typographyBreakpointConstants = require('typography-breakpoint-constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const theme = {
    ...wordpress2016Theme,
    overrideStyles: function overrideStyles(_ref, options) {
        let _ref2;

        const adjustFontSizeTo = _ref.adjustFontSizeTo,
            scale = _ref.scale,
            rhythm = _ref.rhythm;
        return _ref2 = {
            h1: {
                fontFamily: ['Montserrat', 'sans-serif'].join(',')
            },
            blockquote: _extends({}, scale(1 / 5), {
                color: (0, _grayPercentage2.default)(41),
                fontStyle: 'italic',
                paddingLeft: rhythm(13 / 16),
                marginLeft: rhythm(-1),
                borderLeft: rhythm(3 / 16) + ' solid ' + (0, _grayPercentage2.default)(10)
            }),
            'blockquote > :last-child': {
                marginBottom: 0
            },
            'blockquote cite': _extends({}, adjustFontSizeTo(options.baseFontSize), {
                color: options.bodyColor,
                fontWeight: options.bodyWeight
            }),
            'blockquote cite:before': {
                content: '"— "'
            },
            ul: {
                listStyle: 'disc'
            },
            'ul,ol': {
                marginLeft: 0
            }
        }, _defineProperty(_ref2, _typographyBreakpointConstants.MOBILE_MEDIA_QUERY, {
            'ul,ol': {
                marginLeft: rhythm(1)
            },
            blockquote: {
                marginLeft: rhythm(-3 / 4),
                marginRight: 0,
                paddingLeft: rhythm(9 / 16)
            }
        }), _defineProperty(_ref2, 'h1,h2,h3,h4,h5,h6', {
            marginTop: rhythm(2)
        }), _defineProperty(_ref2, 'h4', {
            letterSpacing: '0.140625em',
            textTransform: 'uppercase'
        }), _defineProperty(_ref2, 'h6', {
            fontStyle: 'italic'
        }), _defineProperty(_ref2, 'a', {
            color: '#007acc'
        }), _defineProperty(_ref2, 'a:hover,a:active', {
            textDecoration: 'none'
        }), _defineProperty(_ref2, 'mark,ins', {
            background: '#007acc',
            color: 'white',
            padding: rhythm(1 / 16) + ' ' + rhythm(1 / 8),
            textDecoration: 'none'
        }), _ref2;
    }
};



const typography = new Typography(theme)

// const typography = new Typography({
//   baseFontSize: '20px',
//   baseLineHeight: 1.666,
//   headerFontFamily: ['Helvetica Neue', 'Helvetica', 'Segoe UI', 'Arial', 'freesans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'], // eslint-disable-line
//   bodyFontFamily: ['Helvetica Neue', 'Helvetica', 'Segoe UI', 'Arial', 'freesans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'], // eslint-disable-line
// })

export default typography