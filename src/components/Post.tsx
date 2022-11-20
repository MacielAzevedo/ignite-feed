import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export const Post = ({ author, publishedAt, content }: PostProps) => {
  const [comments, setComments] = useState(["Post muito bacana, hein?"]);

  const [newCommentText, setNewCommentText] = useState("");

  const pubishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreatNewComment = (event: FormEvent) => {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  };

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className="bg-gray-800 rounded-lg p-10 mb-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={author.avatarUrl} />

          <div className="flex flex-col">
            <strong className="text-gray-100 leading-relaxed">
              {author.name}
            </strong>
            <span className="text-sm text-gray-400 leading-relaxed">
              {author.role}
            </span>
          </div>
        </div>

        <time
          className="text-sm text-gray-400"
          title={pubishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="leading-relaxed text-gray-300 mt-6">
        {content.map((line) => {
          if (line.type === "paragraph") {
            return (
              <p key={line.content} className="mt-4">
                {line.content}
              </p>
            );
          } else if (line.type === "link") {
            return (
              <p key={line.content} className="mt-4">
                <a
                  className="text-green-500 font-bold hover:text-green-300"
                  href="#"
                >
                  {line.content}
                </a>
              </p>
            );
          }
        })}

        <p className="mt-4">
          <a className="text-green-500 font-bold hover:text-green-300" href="">
            #novoprojeto
          </a>{" "}
          <a className="text-green-500 font-bold hover:text-green-300" href="#">
            #nlw
          </a>{" "}
          <a className="text-green-500 font-bold hover:text-green-300" href="#">
            #rocketseat
          </a>
        </p>
      </div>

      <form
        onSubmit={handleCreatNewComment}
        className="w-full mt-6 pt-6 border-t border-gray-600"
      >
        <strong className="leading-relaxed text-gray-100">
          Deixe seu feedback
        </strong>

        <textarea
          className="w-full bg-gray-900 border-none resize-none h-24 p-4 rounded-lg text-gray-100 leading-snug mt-4 focus:outline-green-500 outline-none"
          placeholder="Deixe um comentário"
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button
            className="py-4 px-6 mt-4 bg-green-500 text-white font-bold cursor-pointer rounded-lg border-0
           hover:bg-green-300 ease-in duration-100 focus:outline-green-300 outline-none disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className="mt-8">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};
