/* eslint-disable @typescript-eslint/no-non-null-assertion */

import BookReview from "@/components/BookReview";
import { Button } from "@/components/ui/button";

import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={book?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.name}</h1>
          <p className="text-xl">Rating: {book?.rating}</p>
          <ul className="space-y-1 text-lg">
            {book?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <BookReview id={id!} />
    </>
  );
};

export default BookDetails;
