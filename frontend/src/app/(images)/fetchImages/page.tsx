"use client";
import { ApiInstance } from "@/apis/request";
import { useViewImageDialogContext } from "@/provider/ViewImageProvider";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const fetchImages = async () => {
  const data = await ApiInstance.get("/image/getAllImages");
  return data.data.result;
};

const FetchImages = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["image"],
    queryFn: fetchImages,
  });

  const { onOpen } = useViewImageDialogContext();

  const handleClick = (url: string, id: string, name: string) => {
    onOpen(url, id, name);
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  if (!data.length) {
    return <div className="text-center text-2xl md:text-4xl md:font-bold font-semibold">No image added</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-4 md:gap-8">
        {data.map(
          (
            item: { key: string; name: string; url: string; _id: string },
            index: number
          ) => (
            <Image
              src={item.url}
              alt={item.name}
              width={1000}
              height={1000}
              className="md:h-56 md:w-56 h-20 w-20 object-cover cursor-pointer overflow-hidden"
              key={item.name + index}
              onClick={() => handleClick(item.url, item._id, item.name)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FetchImages;
