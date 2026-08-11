type BrandLogoProps = {
  compact?: boolean;
};

export default function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className={`brand-logo ${compact ? "brand-logo--compact" : ""}`}>
      <svg
        viewBox={compact ? "136 421 728 113" : "136 411 728 177"}
        role="img"
        aria-label="Dantè Art — Clinică stomatologică"
        preserveAspectRatio="xMidYMid meet"
      >
        <image
          href="/dante-art-logo.svg"
          width="999.75"
          height="999.75"
          preserveAspectRatio="none"
        />
      </svg>
    </span>
  );
}
