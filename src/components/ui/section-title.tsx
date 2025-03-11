interface Props {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: Props) {
  return (
    <h2 className="flex items-center gap-4 text-4xl sm:text-5xl md:text-6xl font-outfit font-extrabold tracking-tight">
      {title}{" "}
      <span

        style={{
          WebkitTextStroke: "1.5px black", 
          WebkitTextFillColor: "white", 
          filter: "none",
          letterSpacing: "0.0em",
        }}
      >
        {subtitle}
      </span>
    </h2>
  );
}
