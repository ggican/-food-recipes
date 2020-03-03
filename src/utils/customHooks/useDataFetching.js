import { useState, useEffect } from "react";
import { useStore } from "../../redux";

const useDataFetching = serviceFunction => {
    const { dispatch, state } = useStore();
    const [isLoading, setLoading] = useState(true);
    const [errorResponse, setError] = useState(false);
    const [messageResponse, setMessageResponse] = useState();
    const [resultsResponse, setResult] = useState([]);
    useEffect(() => {
        serviceFunction(dispatch);
        return () => {};
    }, [dispatch, serviceFunction]);

    useEffect(() => {
        conditionResponseService(state.recipes.ingredients, isLoading);
    }, [state.recipes.ingredients, isLoading]);

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
        errorResponse,
        isLoading,
        resultsResponse,
        messageResponse,
    };
};

export default useDataFetching;
