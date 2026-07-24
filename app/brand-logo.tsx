type BrandLogoProps = {
  compact?: boolean;
};

export default function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className={`brand-logo ${compact ? "brand-logo--compact" : ""}`}>
      <svg
        viewBox={compact ? "1360 555 940 135" : "1360 150 940 710"}
        role="img"
        aria-label="Dantè Art — Clinică stomatologică"
        preserveAspectRatio="xMidYMid meet"
      >
        <image
          href="/dante-art-logo.svg"
          width="2290.19"
          height="939.85"
          preserveAspectRatio="none"
        />
      </svg>
    </span>
  );
}
