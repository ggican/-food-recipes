import useDataFetching from "../../utils/customHooks/useDataFetching";
import { defaultPropsType, interFace } from "./index.interface";

const Wrapper = ({
    renderLoading = () => {},
    renderFailed = () => {},
    renderSuccess = () => {},
    renderBeforeReady = () => {},
    service = {
        serviceFunction: () => {},
        params: false,
        data: false,
        isReady: false,
        group: "",
        key: "",
    },
}) => {
    const {
        isReady,
        errorResponse,
        isLoading,
        resultsResponse,
        messageResponse,
    } = useDataFetching(service);

    let render;
    if (isReady) {
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
    } else {
        render = renderBeforeReady();
    }

    return render;
};

Wrapper.defaultProps = defaultPropsType;
Wrapper.propTypes = interFace;

export default Wrapper;
