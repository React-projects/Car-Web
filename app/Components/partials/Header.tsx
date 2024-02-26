import Link from "next/link";
import Image from "next/image";
import CustomButton from "../CustomButton";
function Header() {
  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex  justify-between items-center sm:px-166 px-6 py-4">
        <Link href="/" className="flex item-center justify-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={65}
            className="object-contains"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerstyles="text-primary-blue bg-white rounded-full min-w-[130px] "
        />
      </nav>
    </header>
  );
}

export default Header;
