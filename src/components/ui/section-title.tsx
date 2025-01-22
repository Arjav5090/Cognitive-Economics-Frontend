interface Props {
    title: string
    subtitle: string
  }
  
  export function SectionTitle({ title, subtitle }: Props) {
    return (
      <h2 className="flex items-center gap-4 text-5xl font-extrabold tracking-tight">
        {title}{" "}
        <span
          className="text-white"
          style={{
            WebkitTextStroke: "1.5px black",
            WebkitTextFillColor: "white",
            filter: "none",
            letterSpacing: "-0.05em",
          }}
        >
          {subtitle}
        </span>
      </h2>
    )
  }
  
  