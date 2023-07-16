import { Button } from '@/components/ui/button';
import banner from '@/assets/images/banner.png';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';
import Books from './Books';

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            LEARNING <br /> IS A WAY
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Enjoy Our Book Catalog With Latest Books
          </p>

        </div>
        <div className="relative -right-14">
          <img className='h-96' src={banner} alt="" />
        </div>
      </div>
      <div className="mb-96">
        <Books/>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            Our All Book List Is Here
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/books">Brows all books</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
