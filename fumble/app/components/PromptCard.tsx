interface PromptCardProps {
  question: string;
  answer: string;
}

export default function PromptCard({ question, answer }: PromptCardProps) {
  return (
    <div className="w-full bg-zinc-200/50 p-6 rounded-xl flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
        {question}
      </span>
      <p className="text-xl font-medium text-zinc-900 leading-snug">
        {answer}
      </p>
    </div>
  );
}
