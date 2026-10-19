import { useCallback, useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaImage } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { newsArticlePath } from "@/shared/config";
import { cn } from "@/shared/lib/cn";
import { NEWS_COUNT } from "../model/content";

const CARD_WIDTH = 383;
const CARD_GAP = 24;

interface NavButtonProps {
  direction: "prev" | "next";
  label: string;
  disabled: boolean;
  onClick: () => void;
}

const NavButton = ({ direction, label, disabled, onClick }: NavButtonProps) => (
  <button
    type="button"
    aria-label={label}
    disabled={disabled}
    onClick={onClick}
    className={cn(
      "flex items-center justify-center size-10 rounded-full border transition-colors",
      disabled
        ? "bg-white border-gray-200 cursor-default"
        : "bg-[var(--primary-yellow-color)] border-[var(--primary-yellow-color)] cursor-pointer hover:opacity-90",
    )}
  >
    {direction === "prev" ? <FaAngleLeft /> : <FaAngleRight />}
  </button>
);

export const WhatsNew = () => {
  const { t } = useTranslation();
  const trackRef = useRef<HTMLDivElement>(null);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 1);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const scroll = (direction: 1 | -1) =>
    trackRef.current?.scrollBy({ left: direction * (CARD_WIDTH + CARD_GAP), behavior: "smooth" });

  return (
    <section className="flex flex-col gap-10 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-extrabold">{t("landing.news.title")}</h2>
        <div className="flex items-center gap-3">
          <NavButton direction="prev" label={t("landing.news.prev")} disabled={!canPrev} onClick={() => scroll(-1)} />
          <NavButton direction="next" label={t("landing.news.next")} disabled={!canNext} onClick={() => scroll(1)} />
        </div>
      </div>

      <div ref={trackRef} onScroll={updateEdges} className="flex gap-6 overflow-x-auto scroll-smooth snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {Array.from({ length: NEWS_COUNT }, (_, i) => (
          <Link
            key={i}
            to={newsArticlePath(i + 1)}
            className="flex flex-col gap-4 shrink-0 snap-start hover:opacity-90"
            style={{ width: CARD_WIDTH }}
          >
            <div
              className="flex items-center justify-center rounded-xl bg-gray-200 text-gray-400 text-4xl"
              style={{ width: CARD_WIDTH, height: 218 }}
            >
              <FaImage />
            </div>
            <h3 className="text-lg font-bold text-[var(--primary-black-text-color)]">{t("landing.news.cardTitle")}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};
