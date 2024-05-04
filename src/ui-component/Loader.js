import { LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoaderWrapper = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    // height: '100%',
    zIndex: 9999,
    // background: 'rgba(255, 255, 255, 0.5)'
  });
  

const Loader = () => (
<LoaderWrapper>
<LinearProgress color="primary"/>
</LoaderWrapper>

)
    
export default Loader;