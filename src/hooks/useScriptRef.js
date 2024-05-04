import { useRef, useEffect } from 'react';

const useScriptRef = () => {
    const scripted = useRef(false);

    useEffect(
        () => () => {
            scripted.current = false;
        },
        []
    );

    return scripted;
}

export default useScriptRef;