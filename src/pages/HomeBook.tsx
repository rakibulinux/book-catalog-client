/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BookCard from "@/components/BookCard";

import { useGetLimitBooksQuery } from "@/redux/features/books/bookApi";

import { IBook } from "@/types/globalTypes";

const HomeBook = () => {
  const { data, isLoading } = useGetLimitBooksQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative">
      <div className="col-span-12 grid grid-cols-3 gap-10 pb-20">
        {data?.data?.map((book: IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HomeBook;
