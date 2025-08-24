import { Loader } from "@mantine/core";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] w-full ">
      <Loader className="animate-spin rounded-full border-[5px] border-burgundy border-b-transparent w-[40px] h-[40px]" />
    </div>
  );
}
