export function PhoneMockup({
  imageSrc,
  alt,
}: {
  imageSrc: string;
  alt: string;
}) {
  return (
    <div className="relative mx-auto" style={{ maxWidth: 280 }}>
      {/* Phone frame */}
      <div
        className="rounded-[24px] overflow-hidden border-2 shadow-2xl"
        style={{
          borderColor: "#1F2740",
          backgroundColor: "#141A2B",
        }}
      >
        {/* Notch */}
        <div className="flex justify-center pt-2 pb-1" style={{ backgroundColor: "#0C111F" }}>
          <div className="w-20 h-5 rounded-full" style={{ backgroundColor: "#141A2B" }} />
        </div>
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}