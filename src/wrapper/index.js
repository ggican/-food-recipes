import useDataFetching from "../utils/customHooks/useDataFetching";

const Wrapper = ({
    renderLoading = () => {},
    renderFailed = () => {},
    renderSuccess = () => {},
    functionService,
}) => {
    const {
        errorResponse,
        isLoading,
        resultsResponse,
        messageResponse,
    } = useDataFetching(functionService);

    let render;

    if (isLoading) {
        render = renderLoading();
    } else {
        if (errorResponse) {
            render = renderFailed(messageResponse);
        }
        if (renderSuccess) {
            render = renderSuccess(resultsResponse);
        }
    }

    return render;
};

export default Wrapper;
