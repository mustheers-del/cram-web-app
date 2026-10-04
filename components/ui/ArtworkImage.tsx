import Image from "next/image";
import type { ArtTone } from "@/data/products";

/*
 * Central artwork component. While the studio's real photography is pending,
 * it renders quiet abstract resin compositions in the brand palette.
 * To go live: set `image` on the item in data/products.ts — nothing else changes.
 */

const toneStyles: Record<
  ArtTone,
  { bg: string; a: string; b: string; c: string }
> = {
  teal: {
    bg: "#DCE7E3",
    a: "rgba(14,110,104,0.72)",
    b: "rgba(251,246,238,0.5)",
    c: "rgba(63,169,224,0.28)",
  },
  blush: {
    bg: "#F6DFE7",
    a: "rgba(230,56,136,0.35)",
    b: "rgba(251,246,238,0.72)",
    c: "rgba(14,110,104,0.4)",
  },
  sand: {
    bg: "#EFE6D4",
    a: "rgba(217,162,59,0.4)",
    b: "rgba(251,246,238,0.7)",
    c: "rgba(14,110,104,0.35)",
  },
  sky: {
    bg: "#DDEAF2",
    a: "rgba(63,169,224,0.42)",
    b: "rgba(251,246,238,0.66)",
    c: "rgba(14,110,104,0.4)",
  },
  gold: {
    bg: "#F1E3C8",
    a: "rgba(217,162,59,0.5)",
    b: "rgba(251,246,238,0.66)",
    c: "rgba(230,56,136,0.22)",
  },
  deep: {
    bg: "#123B38",
    a: "rgba(14,110,104,0.75)",
    b: "rgba(251,246,238,0.22)",
    c: "rgba(217,162,59,0.4)",
  },
};

const blobA = "46% 54% 44% 56% / 60% 42% 58% 40%";
const blobB = "58% 42% 55% 45% / 42% 58% 44% 56%";

interface ArtworkImageProps {
  src?: string | null;
  alt: string;
  tone?: ArtTone;
  motif?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Slow, subtle drift on the placeholder layers. Use once per page at most. */
  ambient?: boolean;
}

export default function ArtworkImage({
  src,
  alt,
  tone = "teal",
  motif = 0,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  className = "",
  ambient = false,
}: ArtworkImageProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`art-media object-cover ${className}`}
      />
    );
  }

  const t = toneStyles[tone];
  const rotate = motif % 2 === 0 ? "8deg" : "-10deg";

  return (
    <div
      role="img"
      aria-label={alt}
      className={`art-media absolute inset-0 overflow-hidden ${className}`}
      style={{ background: t.bg }}
    >
      <div
        className={`absolute ${ambient ? "ambient-a" : ""}`}
        style={{
          inset: "12% 16% 18% 10%",
          background: t.a,
          borderRadius: motif % 3 === 0 ? blobA : blobB,
          transform: `rotate(${rotate})`,
        }}
      />

      <div
        className={`absolute ${ambient ? "ambient-b" : ""}`}
        style={{
          inset: "30% 24% 26% 28%",
          background: t.b,
          borderRadius: motif % 3 === 1 ? blobA : blobB,
          transform: `rotate(calc(${rotate} * -1.4))`,
          border: "1.5px solid rgba(217,162,59,0.55)",
        }}
      />

      <div
        className={`absolute rounded-full ${ambient ? "ambient-c" : ""}`}
        style={{
          width: "22%",
          aspectRatio: "1",
          right: motif % 2 === 0 ? "10%" : undefined,
          left: motif % 2 === 0 ? undefined : "12%",
          top: motif % 3 === 0 ? "12%" : "auto",
          bottom: motif % 3 === 0 ? "auto" : "14%",
          background: t.c,
          border: "1.5px solid rgba(217,162,59,0.5)",
        }}
      />

      <div className="art-sheen" aria-hidden="true" />
    </div>
  );
}