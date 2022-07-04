var smartgrid = require('smart-grid');

var settings = {
    outputStyle: 'scss',
    /* less || scss || sass || styl */
    columns: 12,
    /* number of grid columns */
    offset: '30px',
    /* gutter width px || % || rem */
    mobileFirst: false,
    /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1187px',
        /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        notebookLg: {
            width: '1600px',
        },
        notebook: {
            width: '1440px',
        },
        xxl: {
            width: '1280px',
        },
        xl: {
            width: '1220px',
        },
        lg: {
            width: '1100px',
        },
        md: {
            width: '992px'
        },
        sm: {
            width: '767px',
            fields: '16px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '360px'
        }
    }
};


smartgrid('./src/assets/scss/utils', settings);