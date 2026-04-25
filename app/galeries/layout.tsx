import Link from "next/link";
import MainTitle from "@/components/MainTitle";

const GaleriesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="max-w-125 mx-auto">
      <div className="flex items-center justify-between gap-4">
        <MainTitle />

        <Link
          href="/"
          className="bg-gray-900 py-2 px-4 rounded-xl uppercase font-bold cursor-pointer hover:bg-gray-800 border-2 border-red-700"
        >
          🔙
        </Link>
      </div>
      <br />
      <hr className="border-0 bg-red-700 h-0.5" />

      {children}
    </div>
  );
};

export default GaleriesLayout;
