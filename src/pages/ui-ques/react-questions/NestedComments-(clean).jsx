import { useState } from "react";
import dataJson from "./json/nested-comments.json";
import "./styles/nested-comments.css";

// Handles array of comments
const CommentList = ({ comments, onAdd, onDelete }) => {
  return (
    <>
      {comments?.map((comment) => (
        <Comment key={comment.id} data={comment} onAdd={onAdd} onDelete={onDelete} />
      ))}
    </>
  );
};

// Handles single comment + passes replies to CommentList
const Comment = ({ data, onAdd, onDelete }) => {
  const [showInput, setShowInput] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleAdd = () => {
    if (replyText.trim()) {
      onAdd(data.id, replyText);
      setReplyText("");
      setShowInput(false);
    }
  };

  return (
    <div style={{ marginLeft: 15 }} className="comment-list-container">
      <div className="comment-item">
        <p className="comment-sentence">{data.content}</p>

        {showInput && (
          <>
            <input
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write reply..."
            />
            <button onClick={handleAdd}>Post</button>
          </>
        )}

        <div className="comment-ctas">
          <p className="comment-author">{data.author}</p>
          <span className="comment-add" onClick={() => setShowInput(!showInput)}>➕</span>
          <span className="comment-del" onClick={() => onDelete(data.id)}>❌</span>
          <span className="comment-edit">✏️</span>
        </div>
      </div>

      {/* ✅ No loop here - just pass array to CommentList */}
      {data.replies?.length > 0 && (
        <CommentList comments={data.replies} onAdd={onAdd} onDelete={onDelete} />
      )}
    </div>
  );
};

const NestedComments = () => {
  const [comments, setComments] = useState(dataJson);
  const [inputVal, setInputVal] = useState("");

  const onAdd = (parentId, content) => {
    const payload = {
      id: Date.now(),
      content,
      author: "Johnny",
      replies: [],
      timestamp: Date.now(),
    };

    const addRecursive = (list) =>
      list.map((item) => {
        if (item.id === parentId) {
          return { ...item, replies: [...item.replies, payload] };
        }
        if (item.replies?.length) {
          return { ...item, replies: addRecursive(item.replies) };
        }
        return item;
      });

    setComments(addRecursive);
  };

  const onDelete = (id) => {
    const deleteRecursive = (list) =>
      list
        .filter((item) => item.id !== id)
        .map((item) =>
          item.replies?.length
            ? { ...item, replies: deleteRecursive(item.replies) }
            : item
        );

    setComments(deleteRecursive);
  };

  const addNewCommentHandler = () => {
    if (inputVal.trim()) {
      setComments((prev) => [
        ...prev,
        {
          id: Date.now(),
          content: inputVal,
          author: "Johnny",
          replies: [],
          timestamp: Date.now(),
        },
      ]);
      setInputVal("");
    }
  };

  return (
    <div className="container">
      <div className="add-comment-container">
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="add-comment-input"
          placeholder="write comment here"
        />
        <button className="add-comment-btn" onClick={addNewCommentHandler}>
          Add Comment
        </button>
      </div>

      {/* ✅ No loop in parent either */}
      <CommentList comments={comments} onAdd={onAdd} onDelete={onDelete} />
    </div>
  );
};

export default NestedComments