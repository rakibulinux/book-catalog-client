import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateBookMutation } from "@/redux/features/books/bookApi";

import { useForm } from "react-hook-form";

interface IBook {
  title?: string;
  image?: string;
  author?: string;
  genre?: string;
  publicationDate?: string;
}

const EditBook = () => {
  const [updateBook] = useUpdateBookMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBook>();
  const onSubmit = (data: IBook) => {
    console.log(data);
    updateBook(data);
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-3xl w-full">
        <h1 className="mb-2">Add A Book</h1>
        <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  {...register("title")}
                  type="text"
                  id="title"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="image">Image</Label>
                <Input
                  {...register("image")}
                  type="text"
                  id="image"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="publicationDate">Publication Date</Label>
                <Input
                  type="date"
                  id="publicationDate"
                  {...register("publicationDate", {
                    required: "PublicationDate is required",
                  })}
                />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="author">Author</Label>
                <Input
                  {...register("author")}
                  type="text"
                  id="author"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="genre">Genre</Label>
                <Input
                  {...register("genre")}
                  type="text"
                  id="genre"
                  className="mt-2"
                />
              </div>

              <Button className="w-full">Add Book</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
