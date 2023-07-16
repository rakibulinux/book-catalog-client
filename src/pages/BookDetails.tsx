/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Button } from '@/components/ui/button';
import { useSingleBookQuery, } from '@/redux/features/books/bookApi';
import { useAppDispatch } from '@/redux/hooks';

import { useParams } from 'react-router-dom';
import { IBook } from '@/types/globalTypes';


const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data } = useSingleBookQuery(id);
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const book : IBook = data?.data

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={book?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl">Author: {book?.author}</p>
          {/* <ul className="space-y-1 text-lg">
            {book?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul> */}
          <Button>
            Add to cart
          </Button>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
