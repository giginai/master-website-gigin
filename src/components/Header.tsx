
import HeaderLogo from "./header/HeaderLogo";
import DesktopNavigation from "./header/DesktopNavigation";
import MobileMenu from "./header/MobileMenu";

interface HeaderProps {
  currentPage?: string;
}

const Header = ({ currentPage = "home" }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-8 py-4 shadow-xl bg-black/60 backdrop-blur-[10px] border border-white/10">
        <HeaderLogo />
        <DesktopNavigation />
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
