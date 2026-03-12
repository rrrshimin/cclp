// TODO: Replace with your actual logo image path
// import logoImg from "./assets/logo.png";

export function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const imgSize = size === "large" ? "h-18" : "h-14";

  return (
    <div className={`${imgSize} flex items-center gap-2`}>
      <span className="text-[20px] text-white" style={{ fontWeight: 700 }}>
        CarCare<span style={{ color: "#367DFF" }}>Diary</span>
      </span>
    </div>
  );
}