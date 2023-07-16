import { Link } from "react-router-dom";

import { IBook } from "@/types/globalTypes";

interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  return (
    <div>
      <div className="rounded-2xl h-[580px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/book-details/${book._id}`} className="w-full">
          <img className="w-full h-96" src={book?.image} alt="book" />
          <h1 className="text-xl font-semibold">{book?.title}</h1>
        </Link>
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
  );
};

export default BookCard;
