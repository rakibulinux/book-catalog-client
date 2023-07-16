/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import BookReview from '@/components/BookReview';
import { useSingleBookQuery, } from '@/redux/features/books/bookApi';

import { useParams } from 'react-router-dom';
const BookDetails = () => {
  const { id } = useParams();
  const { data: bookData} = useSingleBookQuery(id);

const book = bookData?.data


  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={book?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl">Author: {book?.author}</p>
        </div>
      </div>
        <BookReview reviews={book?.reviews}/>
    </>
  );
}

export default BookDetails;
