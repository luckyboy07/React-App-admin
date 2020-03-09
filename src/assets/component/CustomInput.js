import {
    primaryColor,
    dangerColor,
    successColor,
    grayColor,
    defaultFont
} from "../maetrial-palette";

const customInputStyle = {
    disabled: {
        "&:before": {
            backgroundColor: "transparent !important"
        }
    },
    underline: {
        "&:hover:not($disabled):before,&:before": {
            borderColor: grayColor[4] + " !important",
            borderWidth: "1px !important"
        },
        "&:after": {
            borderColor: 'none',
            borderBottom: 'none',
            transition: 'none',
            transform: 'none'
        },
        "&:before": {
            borderBottom: 'none'
        }
    },
    underlineError: {
        "&:after": {
            borderColor: dangerColor[0]
        }
    },
    underlineSuccess: {
        "&:after": {
            borderColor: successColor[0]
        }
    },
    labelRoot: {
        ...defaultFont,
        color: grayColor[3] + " !important",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "1.42857",
        letterSpacing: "unset"
    },
    labelRootError: {
        color: dangerColor[0]
    },
    labelRootSuccess: {
        color: successColor[0]
    },
    feedback: {
        position: "absolute",
        top: "18px",
        right: "0",
        zIndex: "2",
        display: "block",
        width: "24px",
        height: "24px",
        textAlign: "center",
        pointerEvents: "none"
    },
    inputStyle: {
        marginTop: "16px",
        border: '1px solid #ced4da',
        borderRadius: 5
    },
    formControl: {
        paddingBottom: "10px",
        margin: "27px 0 0 0",
        position: "relative",
        verticalAlign: "unset"
    }
};

export default customInputStyle;
