import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Control() {
    return (
        <div className="control">
            <button>
                <FontAwesomeIcon icon={faBackward} />
            </button>
        </div>
    )
}

export default Control
