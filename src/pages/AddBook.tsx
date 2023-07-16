import { Button } from "@/components/ui/button";
import { DatePickerWithPresets } from "@/components/ui/datePickerWithPreset";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddBook = () => {
  //   const { products } = useAppSelector((state) => state.cart);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-3xl w-full">
        <h1 className="mb-2">Add A Book</h1>
        <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input type="text" id="title" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="image">Image</Label>
                <Input type="text" id="image" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="publicationDate">Publication Date</Label>
                <DatePickerWithPresets />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="author">Author</Label>
                <Input type="text" id="author" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="genre">Genre</Label>
                <Input type="text" id="genre" className="mt-2" />
              </div>

              <Button className="w-full">Add Book</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;