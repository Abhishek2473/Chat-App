import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		// Scrolls to the last message smoothly
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{/* Display messages if not loading */}
			{!loading && messages.length > 0 ? (
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))
			) : null}

			{/* Display loading skeletons if messages are still loading */}
			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

			{/* Show a placeholder if there are no messages */}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};

export default Messages;
