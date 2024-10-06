import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[20%] lg:w-[20%] xl:w-[20%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <img src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden lg:block">SchoolLama</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[80%] lg:w-[80%] xl:w-[80%] bg-[#F7F8FA] overflow-y-scroll overflow-x-hidden">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
