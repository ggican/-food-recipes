import { useState, useEffect } from "react";
import { useStore } from "../../reducers";

const useDataFetching = ({
    serviceFunction = () => {},
    isReady = false,
    params,
    data,
    group,
    key,
}) => {
    const { dispatch, state } = useStore();
    const [isLoading, setLoading] = useState(true);
    const [errorResponse, setError] = useState(false);
    const [messageResponse, setMessageResponse] = useState();
    const [resultsResponse, setResult] = useState([]);
    useEffect(() => {
        if (isReady) {
            serviceFunction({ dispatch, params, data });
        }
        return () => {};
    }, [dispatch, serviceFunction, isReady, params, data]);

    useEffect(() => {
        conditionResponseService(state[group][key], isLoading);
    }, [state, group, key, isLoading]);

    const conditionResponseService = (response, isLoading) => {
        if (response && isLoading) {
            const { isSuccess, isError, data, message } = response;

            if (isSuccess) {
                setResult(data);
            }
            setMessageResponse(message);
            setError(isError);
            setLoading(false);
        }
    };

    return {
        isReady,
        errorResponse,
        isLoading,
        resultsResponse,
        messageResponse,
    };
};

export default useDataFetching;
