import { useCallback, useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Button from "@mui/material/Button";
import { TextField, ThemeProvider } from "@mui/material";
import "../assets/app.css";
import theme from "../theme";

export default function Chat() {
	const [inputValue, setInputValue] = useState("");
	const [messages, setMessages] = useState<{ message: string; sender: string; }[]>([]);
	const { sendMessage, lastMessage, readyState } = useWebSocket(
		"ws://127.0.0.1:7156"
	);

	const handleSubmit = useCallback(() => {
		if (inputValue !== "") {
			sendMessage(inputValue);
			setMessages((prev) => [
				...prev,
				{ message: inputValue, sender: "me" },
			]);
			// console.log(messages);
			setInputValue("");
		}
	}, [inputValue]);

	useEffect(() => {
		if (lastMessage !== null) {
			setMessages((prev) => [
				...prev,
				{ message: lastMessage.data, sender: "server" },
			]);
		}
	}, [lastMessage]);

	return (
		<div className="content">
			<div className="chat_div">
				<div className="chat_main">
					{messages.map((msg, index) => (
						<p
							key={index}
							className={msg.sender === "me" ? "right" : "left"}
						>
							{msg.message}
						</p>
					))}
				</div>
				<div className="chat_input">
					<form action="submit" onSubmit={handleSubmit}>
						<ThemeProvider theme={theme}>
							<TextField
								multiline
								hiddenLabel
								fullWidth
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								onKeyDown={(e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										// Prevents form submission on Enter unless Shift is also pressed
										e.preventDefault(); // Prevent the default action to avoid submitting the form
										handleSubmit(); // Call your existing send function
									}
								}}
								type="submit"
							/>
							<div className="chat_send_button">
								<Button
									variant="contained"
									onClick={handleSubmit}
									color="primary"
								>
									send
								</Button>
							</div>
						</ThemeProvider>
					</form>
				</div>
			</div>
		</div>
	);
}
