import { IBook } from "@/types/globalTypes";
import { toast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  const handleAddbook = (book: IBook) => {
    toast({
      description: "book Added",
    });
    console.log(book);
  };
  return (
    <div>
      <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/book-details/${book._id}`} className="w-full">
          <img src={book?.image} alt="book" />
          <h1 className="text-xl font-semibold">{book?.title}</h1>
        </Link>
        <p>Author: {book?.author}</p>
        <p className="text-sm">Gener: {book?.genre ? "Sci" : "Out of stock"}</p>
        <p className="text-sm">
          Publication Date: {book?.publicationDate.toLocaleDateString()}
        </p>

        <Button variant="default" onClick={() => handleAddbook(book)}>
          Details
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
