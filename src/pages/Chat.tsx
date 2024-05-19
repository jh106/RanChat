import { useCallback, useEffect, useRef, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import "../assets/app.css";

export default function Chat() {
	//Public API that will echo messages sent to it back to the client
	const [socketUrl, setSocketUrl] = useState("wss://echo.websocket.org");
	const [messageHistory, setMessageHistory] = useState<MessageEvent<any>[]>(
		[]
	);

	const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

	useEffect(() => {
		if (lastMessage !== null) {
			setMessageHistory((prev) => prev.concat(lastMessage));
		}
	}, [lastMessage]);

	const handleClickChangeSocketUrl = useCallback(
		() => setSocketUrl("wss://demos.kaazing.com/echo"),
		[]
	);

	const handleClickSendMessage = useCallback(() => sendMessage("Hello"), []);

	const connectionStatus = {
		[ReadyState.CONNECTING]: "Connecting",
		[ReadyState.OPEN]: "Open",
		[ReadyState.CLOSING]: "Closing",
		[ReadyState.CLOSED]: "Closed",
		[ReadyState.UNINSTANTIATED]: "Uninstantiated",
	}[readyState];

	return (
		<div className="content">
			<div className="chat_div">
				<div className="chat_main">
					<p className="left">left</p>
					<p className="right">right</p>
					<ul>
						{messageHistory.map((message, idx) => (
							<span key={idx}>
								{message ? message.data : null}
							</span>
						))}
					</ul>
				</div>
				<div className="chat_input">
					<input type="text" />
					<div className="chat_send_Button">
						<button onClick={handleClickSendMessage}>send</button>
					</div>
				</div>
			</div>
		</div>
	);
}
