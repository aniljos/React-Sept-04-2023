import React, { useState } from "react";

type AlertProps = {
    message: string,
    severity?: string,
    onClose?: () => void
}

//React.memo => 16.3, optimization, the component will be rerender only if its state or props changes

//severity => info, warning, error, success
const Alert = React.memo(React.forwardRef((props: AlertProps, ref: any) => {

    const [showHelper, setShowHelper]  = useState(true);

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