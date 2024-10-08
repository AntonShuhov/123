import React from "react";
import "./Modal.css"
import {observer} from "mobx-react-lite";

function Modal({active, setActive, children}) {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()} >
                {children}
            </div>

        </div>
    )
}

export default observer(Modal);