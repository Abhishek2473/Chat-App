import { useEffect } from "react";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		// This effect could be replaced with any other logic that updates messages
		// For example, you might want to fetch messages from an API or listen for updates in another way.
	}, [messages]);

	// You may want to implement a function to manually add new messages if needed
	const addMessage = (newMessage) => {
		setMessages((prevMessages) => [...prevMessages, newMessage]);
	};

	return { addMessage };
};

export default useListenMessages;
