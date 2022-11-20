import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };
  return (
    <div className="mt-6 flex gap-4">
      <Avatar hasBorder={false} src="https://github.com/MacielAzevedo.png" alt="" />

      <div className="flex-1">
        <div className="bg-gray-700 rounded-lg p-4">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="text-sm leading-relaxed">
                Maciel Azevedo
              </strong>
              <time
                className="text-xs leading-relaxed text-gray-400"
                title="12 de novembro às 13:18h"
                dateTime="2022-11-12 13:18:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button
              onClick={handleDeleteComment}
              className="bg-transparent border-none text-gray-400 hover:text-red-500 focus:outline-green-300 outline-none rounded-sm"
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p className="mt-4 text-gray-300">{content}</p>
        </div>

        <footer className="mt-4">
          <button
            className="bg-transparent text-gray-400 flex items-center gap-2 hover:text-green-300 
          focus:outline-green-300 outline-none rounded-sm"
            onClick={handleLikeComment}
          >
            <ThumbsUp />
            Aplaudir
            <span id="commentButtonSpan">{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
