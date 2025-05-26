"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetContent } from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";

const BOT_NAME = "Portfolio Bot";

export default function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const askBot = async (question: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/ask-bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question, history: messages }),
      });
      const data = await res.json();
      if (data.answer) {
        setMessages((msgs) => [
          ...msgs,
          { from: BOT_NAME, text: data.answer },
        ]);
      } else {
        setMessages((msgs) => [
          ...msgs,
          { from: BOT_NAME, text: "Sorry, I could not find an answer." },
        ]);
      }
    } catch (e) {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  const onSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: "You", text: input }]);
    await askBot(input);
    setInput("");
  };

  return (
    <div>
      <Button
        aria-label="Open ChatBot"
        className="fixed z-[9999] bottom-6 right-6 rounded-full w-14 h-14 flex items-center justify-center shadow-xl p-0"
        variant="default"
        style={{ borderRadius: "9999px", fontSize: 26 }}
        onClick={() => setIsOpen((o) => !o)}
      >
        {isOpen ? <span style={{ fontSize: "2rem" }}>×</span> : <span style={{ fontSize: "1.7rem" }}>💬</span>}
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="bottom"
          className="p-0 w-full max-w-xs sm:max-w-sm right-1 bottom-20 border-none shadow-2xl"
          style={{
            position: "fixed",
            right: 24,
            bottom: 90,
            width: 340,
            maxWidth: "calc(100vw - 16px)",
            padding: 0,
            background: "var(--background)",
            borderRadius: 16,
          }}
        >
          <Card className="shadow-none border-none bg-transparent">
            <div className="bg-blue-600 text-white p-4 rounded-t-xl font-semibold text-lg">
              Portfolio Q&amp;A Chatbot
            </div>
            <CardContent className="px-2 py-2 bg-background" style={{ minHeight: 100, height: 270 }}>
              <ScrollArea className="h-60 pr-2">
                {messages.length === 0 && (
                  <div className="text-gray-400 text-sm text-center pt-6">
                    Ask me anything about myself!
                  </div>
                )}
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`mb-2 text-sm flex ${
                      m.from === "You" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={
                        m.from === "You"
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-3 py-1.5 rounded-lg max-w-[80%]"
                          : "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 px-3 py-1.5 rounded-lg max-w-[80%]"
                      }
                    >
                      <span className="block font-semibold text-xs mb-0.5">
                        {m.from}
                      </span>
                      <span>{m.text}</span>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="text-gray-400 text-xs">{BOT_NAME} is thinking…</div>
                )}
                {error && <div className="text-red-500 text-xs pt-2">{error}</div>}
                <div ref={messagesEndRef} />
              </ScrollArea>
            </CardContent>
            <form
              className="flex gap-2 p-2 border-t bg-background items-center"
              onSubmit={onSend}
            >
              <Input
                className="flex-1 text-sm"
                type="text"
                placeholder="Type your question…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                autoFocus={isOpen}
                autoComplete="off"
                aria-label="Type your question"
              />
              <Button
                type="submit"
                disabled={loading || !input.trim()}
                variant="default"
              >
                Send
              </Button>
            </form>
          </Card>
        </SheetContent>
      </Sheet>
    </div>
  );
}
