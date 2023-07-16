/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ChangeEvent, FormEvent, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { FiSend } from "react-icons/fi";

interface IProps {
  reviews: string[];
}

const BookReview = ({ reviews }: IProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  console.log(reviews);
  // const { data } = useGetReviewQuery(id, {
  //   refetchOnMountOrArgChange: true,
  //   pollingInterval: 30000,
  // });
  // const [postComment] = usePostReviewMutation();

  // const [postComment, { isLoading, isError, isSuccess }] =
  //   usePostCommentMutation();
  // console.log(isLoading);
  // console.log(isError);
  // console.log(isSuccess);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const options = {
    //   data: { comment: inputValue },
    // };

    // postComment(options);

    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <Textarea
          className="min-h-[30px] border border-gray-300"
          onChange={handleChange}
          value={inputValue}
        />
        <Button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </Button>
      </form>
      <div className="mt-10">
        {reviews?.map((review, index) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/rakibulinux.png" />
              <AvatarFallback>Rakib</AvatarFallback>
            </Avatar>
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookReview;
