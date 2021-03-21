import React from "react";

class Footer extends React.Component<{}, {}>{
    render() {
        return (
            <>
                <button>Помощь</button>
                <button>Каталог</button>
                <select>
                    <option>RU</option>
                    <option>EN</option>
                </select>

            </>

        );
    }
}

export default Footer