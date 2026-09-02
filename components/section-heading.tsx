interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      {eyebrow && (
        <p
          className={`text-eyebrow mb-5 ${
            dark ? "text-[#F5A900]" : "text-[#B8891C]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-4xl font-bold tracking-[-0.02em] sm:text-5xl lg:text-6xl ${
          dark ? "text-white" : "text-[#081A2F]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-6 text-lg leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {text}
        </p>
      )}
    </div>
  );
}
