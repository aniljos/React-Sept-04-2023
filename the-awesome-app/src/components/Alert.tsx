
type AlertProps = {
    message: string,
    severity?: string,
    onClose?: () => void
}
//severity => info, warning, error, success
function Alert(props: AlertProps){

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
        </div>
    )
}
export default Alert;