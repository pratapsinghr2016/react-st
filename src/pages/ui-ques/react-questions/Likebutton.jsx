import { useCallback, useState } from "react";
import "./styles/like-button.css";

const URL = "https://questions.greatfrontend.com/api/questions/like-button";

export default function App() {
  const [isPending, setIsPending] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const onLikeClick = useCallback(async () => {
    setIsPending(true);
    setErrMsg("")
    try {
      // ! fetch() POST sysntax
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: !isLiked ? "like" : "unlike",
        }),
      });
      console.log("response", response);
      if (response.ok) {
        setIsLiked(true);
      } else {
        throw new Error(
          `Error during attempted unlike. Please try again later.`,
        );
      }
    } catch (error) {
      console.log("err", error);

      if (error) {
        setIsLiked(false);
        setErrMsg(error.message);
      }
    } finally {
      setIsPending(false);
    }
  }, []);

  return (
    <div>
      <button
        className={`liked-button ${isLiked ? "is-liked" : ""}`}
        onClick={onLikeClick}
      >
        {isPending ? "⚙️" : "💌"} Like
      </button>
      {errMsg}
    </div>
  );
}
