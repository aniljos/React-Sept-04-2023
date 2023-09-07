import React, { useImperativeHandle, useState } from "react";

type AlertProps = {
    message: string,
    severity?: string,
    onClose?: () => void
}

export type AlertRef = {
    version: string;
    name: string;
    showHelperText: () => void;
    hideHelperText: () => void;
    isHelperVisible: boolean
}

//React.memo => 16.3, optimization, the component will be rerender only if its state or props changes

//severity => info, warning, error, success
const Alert = React.memo(React.forwardRef<AlertRef, AlertProps>((props: AlertProps, ref) => {

    const [showHelper, setShowHelper]  = useState(true);
    useImperativeHandle(ref, () => {

        //returns an object(this object is what the ref will hold)
        return {
            version: "1.0.0",
            name: "Alert Component",
            showHelperText: () => {
                setShowHelper(true);
            },
            hideHelperText: () => {
                setShowHelper(false);
            },
            isHelperVisible: showHelper

        }

    })

    console.log("Rendering alert...");

    let panelSeverity="alert-info", btnSeverity="btn-info";
    if(props.severity){
        if(props.severity === "info"){
            panelSeverity = "alert-info";
            btnSeverity = "btn-info";
        }
        if(props.severity === "warning"){
            panelSeverity = "alert-warning";
            btnSeverity = "btn-warning";
        }
        if(props.severity === "error"){
            panelSeverity = "alert-danger";
            btnSeverity = "btn-danger";
        }
        if(props.severity === "success"){
            panelSeverity = "alert-success";
            btnSeverity = "btn-success";
        }

    }

    function close(){
        if(props.onClose){
            props.onClose();
        }
    }

    return (
        <div className={`alert ${panelSeverity}`}>
            <div style={{display: 'inline-block', width: "96%"}}>{props.message}</div>
            <button className={`btn ${btnSeverity}`} onClick={close}>
                <span>&times;</span>
            </button>
            {showHelper ? <p>
                This is a helper text.
            </p> : null}
        </div>
    )
}))
export default Alert;