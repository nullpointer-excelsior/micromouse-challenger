import { sendMessageToIframe } from "../native-dom";

const iframeId = "sand-box-iframe"

interface IframeMessage {
    code: string
    matrix: string[][]
}

export default function SandboxIframe(props: { message: IframeMessage }) {
  
    const { message } = props;
  
    const handleOnLoad = () => {
      setTimeout(() => sendMessageToIframe(iframeId, message), 1000)
    }
  
    return <iframe className='rounded' id={iframeId} onLoad={handleOnLoad} width="800px" height="500px" src="/sandbox"  />;
  
  }