import Header from "@/components/header";
import FetchImages from "./(images)/fetchImages/page";
import { Toaster } from "@/components/ui/toaster";
import { AddImage } from "./(images)/addImage/page";

const page = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:p-8 gap-4 p-4 bg-accent m-4 rounded-md">
        <Header />
        <AddImage />
      </div>
      <FetchImages />
      <Toaster />
    </div>
  );
};

export default page;
