interface Props {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: Props) {
  return (
    <h2 className="flex items-center gap-4 text-4xl sm:text-5xl md:text-6xl font-outfit font-extrabold tracking-tight">
      {title}{" "}
      <span
        className="text-white font-serif"
        style={{
          WebkitTextStroke: "1.5px [#0E0E0E]",
          WebkitTextFillColor: "white",
          filter: "none",
          letterSpacing: "-0.05em",
        }}
      >
        {subtitle}
      </span>
    </h2>
  );
}
