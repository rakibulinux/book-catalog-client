/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import BookReview from "@/components/BookReview";
import { useSingleBookQuery } from "@/redux/features/books/bookApi";

import { Link, useParams } from "react-router-dom";
const BookDetails = () => {
  const { id } = useParams();
  const { data: bookData } = useSingleBookQuery(id);

  const book = bookData?.data;

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row max-w-7xl mx-auto items-center md:items-start justify-center">
        <Link to={`/edit-book/${book?._id}`}>Edit</Link>
        <div className="">
          <img className="h-96" src={book?.image} alt="" />
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="">
            <span className="font-semibold">Author:</span> {book?.author}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Genre:</span> {book?.genre}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Publication Date:</span>{" "}
            {book?.publicationDate}
          </p>
        </div>
      </div>
      <BookReview reviews={book?.reviews} />
    </>
  );
};

export default BookDetails;
