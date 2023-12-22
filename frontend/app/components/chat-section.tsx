"use client";

import { useContext } from 'react';
import { useChat } from "ai/react";
import { ChatInput, ChatMessages } from "./ui/chat";
import Dropdown from "./ui/dropdown";
import { AuthContext } from '@/app/utils/auth';

export default function ChatSection() {
  const { accessToken } = useContext(AuthContext);

  const {
    messages,
    input,
    isLoading,
    handleSubmit,
    handleInputChange,
    reload,
    stop,
  } = useChat({
    api: `${process.env.NEXT_PUBLIC_API}/chat`,
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    body: {
      // user: 'trucquynh123',
    },
    onError: (err: Error) => {
      console.log(err);
    }
  });

  return (
    <div className="space-y-4 max-w-5xl w-full">
      <Dropdown />
      <ChatMessages
        messages={messages}
        isLoading={isLoading}
        reload={reload}
        stop={stop}
      />
      <ChatInput
        input={input}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        isLoading={isLoading}
      />

    </div>
  );
}
