import Loader4LineIcon from "remixicon-react/Loader4LineIcon";

export function Loading() {
  return (
    <div className="absolute z-50 bg-zinc-50 bg-opacity-70 w-screen h-screen flex items-center justify-center">
      <Loader4LineIcon size={50} className="animate-spin text-teal-500" />
    </div>
  );
}
