import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(false);
    const toogleOther = () => {
        setOtherState(!otherState);
    };
    useEffect(() => {
        renderCount.current++;
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количесва рендеров</SmallTitle>
            <p>renderCount: {renderCount.current}</p>
            <button onClick={toogleOther} className="btn btn-primary">
                Toogle other state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
