import React, { useState } from "react";
import './SideBar.scss';

export default function SideBar() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSubjects = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <ul id="tableList">
                <li onClick={toggleSubjects}>Subject :</li>
                <ul className={`subject-list ${isVisible ? 'visible' : ''}`}>
                    <li className="li"><button>Math</button></li>
                    <li className="li"><button>Nederlands</button></li>
                    <li className="li"><button>English</button></li>
                    <li className="li"><button>Science</button></li>
                    <li className="li"><button>Computer Science</button></li>
                    <li className="li"><button>Economics</button></li>
                    <li className="li"><button>History</button></li>
                    <li className="li"><button>Health & Medicine</button></li>
                    <li className="li"><button>Psychology</button></li>
                </ul>
            </ul>
        </div>
    );
}
