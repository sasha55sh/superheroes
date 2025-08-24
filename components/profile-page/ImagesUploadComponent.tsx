import Image from "next/image";
import Close from "@/images/vectors/close.svg";
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from "@mantine/dropzone";

interface ImagesUploadProps {
  maxFiles?: number;
  heroImages?: string[];
  setHeroImages?: (images: string[]) => void;
  newFiles?: FileWithPath[];
  setNewFiles: (files: FileWithPath[]) => void;
}

export default function ImagesUpload({
  maxFiles = 4,
  heroImages = [],
  setHeroImages = () => {},
  newFiles = [],
  setNewFiles,
}: ImagesUploadProps) {
  const totalImages = heroImages.length + newFiles.length;

  const handleDrop = (dropped: FileWithPath[]) => {
    if (totalImages + dropped.length > maxFiles) return;
    setNewFiles([...newFiles, ...dropped]);
  };

  const removeFile = (index: number) => {
    if (index < heroImages.length) {
      setHeroImages(heroImages.filter((_, i) => i !== index));
    } else {
      const adjustedIndex = index - heroImages.length;
      setNewFiles(newFiles.filter((_, i) => i !== adjustedIndex));
    }
  };

  const previews = [
    ...heroImages.map((url, index) => (
      <div key={index} className="relative rounded-xl">
        <Image
          src={url}
          alt="Image"
          width={200}
          height={200}
          className="object-cover w-[200px] h-[200px]"
        />
        <button
          className="absolute top-[-10px] right-[-10px] p-[15px] bg-cream rounded-xl"
          onClick={() => removeFile(index)}
        >
          <Image src={Close} alt="Close" width={12} height={12} />
        </button>
      </div>
    )),
    ...newFiles.map((file, index) => {
      if (!file) return null;
      const imageUrl = URL.createObjectURL(file);
      return (
        <div key={index + heroImages.length} className="relative rounded-xl">
          <Image
            src={imageUrl}
            alt="Image"
            width={200}
            height={200}
            className="object-cover w-[200px] h-[200px]"
          />
          <button
            className="absolute top-[-10px] right-[-10px] p-[15px] bg-cream rounded-xl"
            onClick={() => removeFile(index + heroImages.length)}
          >
            <Image src={Close} alt="Close" width={12} height={12} />
          </button>
        </div>
      );
    }),
  ];

  return (
    <div>
      <Dropzone
        accept={IMAGE_MIME_TYPE}
        onDrop={handleDrop}
        disabled={totalImages >= maxFiles}
        className="border-[3px] border-dashed border-gray-400 rounded-md p-[16px] mb-[16px]"
      >
        <p className="text-center text-crimson text-[20px]">
          {heroImages.length > 0
            ? "Update images"
            : `Drop images here (max ${maxFiles})`}
        </p>
      </Dropzone>

      <div className="flex flex-wrap gap-[20px] justify-center">{previews}</div>
    </div>
  );
}
