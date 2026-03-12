import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer
      className="border-t px-6 py-10"
      style={{ borderColor: "#1F2740" }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo />

        <div className="flex items-center gap-6 text-[14px]" style={{ color: "#A3ACBF" }}>
          <a
            href="#"
            className="transition-colors hover:text-white"
          >
            Privacy Policy
          </a>
        </div>

        <p className="text-[14px]" style={{ color: "#A3ACBF" }}>
          &copy; 2026 CarCare Diary. All rights reserved.
        </p>
      </div>
    </footer>
  );
}