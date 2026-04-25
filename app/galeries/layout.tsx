import Image from "next/image";
import Link from "next/link";

const GaleriesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="max-w-125 mx-auto">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Stop Logo" width={70} height={37} />
          <h1 className="text-3xl font-bold">CDR Essentielle</h1>
        </div>

        <Link
          href="/"
          className="bg-gray-900 py-2 px-4 rounded-xl uppercase font-bold cursor-pointer hover:bg-gray-800 border-2 border-red-700"
        >
          Retour
        </Link>
      </div>
      <br />
      <hr />
      <br />

      {children}
    </div>
  );
};

export default GaleriesLayout;
