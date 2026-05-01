import { Button } from "@/components/ui/Button";
import { ContactEmailSection } from "@/components/ContactEmailSection";
import { FAQ } from "@/components/FAQ";
import { Marquee } from "@/components/Marquee";
import { SectionLabel } from "@/components/SectionLabel";
import { ServiceCard } from "@/components/ServiceCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  ArrowRightIcon,
  BoltIcon,
  BotIcon,
  CheckIcon,
  CodeIcon,
  CompassIcon,
  CountIcon,
  GameIcon,
  HeadsetIcon,
  InvitationIcon,
  PaletteIcon,
  ShieldIcon,
  SimIcon,
  SparkleIcon,
  StarIcon,
} from "@/components/Icons";
import type { ReactNode } from "react";

type Service = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  icon: ReactNode;
  tag?: string;
};

const services: Service[] = [
  {
    title: "MongoKart — Цагийг хөгжилтэй өнгөрүүл",
    description:
      "Олон тоглогчтой тоглоомын платформ — найзуудтайгаа онлайнаар уралдаан зохиогоорой.",
    href: "https://mongo-cardd.vercel.app/",
    linkLabel: "MongoKart үзэх",
    icon: <GameIcon className="h-5 w-5" />,
    tag: "Идэвхтэй",
  },
  {
    title: "HappySim — eSIM борлуулалт",
    description:
      "Дата болон дуудлага — дижитал SIM-ээр шууд идэвхжүүлж, аялал руу бэлэн.",
    href: "https://happy-esim.vercel.app/",
    linkLabel: "HappySim үзэх",
    icon: <SimIcon className="h-5 w-5" />,
    tag: "Идэвхтэй",
  },
  {
    title: "Онлайн урилга",
    description:
      "Хурим, найр, төрсөн өдөр — бүх төрлийн арга хэмжээнд зориулсан үзэсгэлэнт дижитал урилга.",
    icon: <InvitationIcon className="h-5 w-5" />,
    tag: "Хөгжүүлэлтэд",
  },
  {
    title: "Ухаалаг тооллогын систем",
    description:
      "Оролцогч, бараа, урсгалыг нарийвчлан хянах ухаалаг тооллогын автомат шийдэл.",
    icon: <CountIcon className="h-5 w-5" />,
    tag: "Хөгжүүлэлтэд",
  },
  {
    title: "AI Чатбот",
    description:
      "24/7 автомат хариулт, захиалга болон түгээмэл асуултад шуурхай хариулдаг ухаалаг туслах.",
    icon: <BotIcon className="h-5 w-5" />,
    tag: "Удахгүй",
  },
  {
    title: "Захиалгат шийдэл",
    description:
      "Танай бизнест тусгайлан зориулсан вэб болон гар утасны систем — шаардлагад нийцсэн.",
    icon: <SparkleIcon className="h-5 w-5" />,
    tag: "Бэлэн",
  },
];

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: "Хурдан хүргэлт",
    description:
      "Бид MVP-ээс эхлээд бүтэн бүтээгдэхүүн хүртэл богино хугацаанд хүргэдэг.",
    icon: <BoltIcon className="h-5 w-5" />,
  },
  {
    title: "Найдвартай чанар",
    description:
      "Кодын чанар, аюулгүй байдалд анхааран — урт хугацаанд тогтвортой ажиллах систем.",
    icon: <ShieldIcon className="h-5 w-5" />,
  },
  {
    title: "Орчин үеийн технологи",
    description:
      "Next.js, React, TypeScript зэрэг шинэлэг технологиор бүтээж, ирээдүйд бэлэн байна.",
    icon: <CodeIcon className="h-5 w-5" />,
  },
  {
    title: "Тодорхой стратеги",
    description:
      "Зорилгод суурилсан төлөвлөгөө — таны бизнесийн өсөлтийг чиглүүлсэн шийдэл.",
    icon: <CompassIcon className="h-5 w-5" />,
  },
  {
    title: "Уран бүтээлч дизайн",
    description:
      "Ашиглахад хялбар, нүдэнд таатай интерфэйс — UX/UI стандартад бүрэн нийцсэн.",
    icon: <PaletteIcon className="h-5 w-5" />,
  },
  {
    title: "Тасралтгүй дэмжлэг",
    description:
      "Бүтээгдэхүүнийг хүргэсний дараа ч засвар, шинэчлэлийг тогтмол хийж өгнө.",
    icon: <HeadsetIcon className="h-5 w-5" />,
  },
];

const stats = [
  { value: "6+", label: "Идэвхтэй төсөл" },
  { value: "100%", label: "Хариуцлагатай хүргэлт" },
  { value: "24/7", label: "Тасралтгүй дэмжлэг" },
  { value: "2+", label: "Жилийн туршлага" },
];

const processSteps = [
  {
    step: "01",
    title: "Танилцах",
    description:
      "Таны санаа, зорилго, шаардлагыг цогцоор сонсоод хамтдаа тодорхойлно.",
  },
  {
    step: "02",
    title: "Төлөвлөх",
    description:
      "Хийгдэх ажлын урсгал, технологийн стек, хугацааг тодорхой төлөвлөнө.",
  },
  {
    step: "03",
    title: "Бүтээх",
    description:
      "Дизайнаас хөгжүүлэлт хүртэл шуурхай ажиллаж, явцыг тогтмол хуваалцана.",
  },
  {
    step: "04",
    title: "Хүргэх & дэмжих",
    description:
      "Бүтээгдэхүүнийг ашиглалтад өгөөд, цаашдын шинэчлэлийг тасралтгүй хийнэ.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Python",
  "Three.js",
  "Figma",
];

const faqs = [
  {
    question: "Ямар хугацаанд төсөл хийж дуусгадаг вэ?",
    answer:
      "Төслийн цар хүрээнээс хамаарна. Энгийн landing page 1–2 долоо хоног, дунд оврын вэб систем 4–8 долоо хоног, том оврын платформ 2–4 сар орчим хугацаанд хүргэдэг. Эхний уулзалтаар тодорхой хугацааг гаргаж өгнө.",
  },
  {
    question: "Үнэлгээ ямар хэлбэрээр явагддаг вэ?",
    answer:
      "Эхлээд таны шаардлага, цар хүрээг сонсоод үнэгүй санал шийдэл бэлдэж өгнө. Үнийг нь fixed эсвэл цаг тутмын зарчмаар тохиролцох боломжтой.",
  },
  {
    question: "Хүргэсний дараа дэмжлэг үзүүлэх үү?",
    answer:
      "Тийм. Бүх төсөлд 1–3 сарын үнэгүй техникийн дэмжлэг, мөн засвар үйлчилгээний урт хугацааны гэрээ байгуулах боломжтой.",
  },
  // {
  //   question: "Кодыг өөрөө эзэмших боломжтой юу?",
  //   answer:
  //     "Тийм. Бүтэн source кодыг хүлээлгэн өгнө. Танай дотоод баг цаашид хөгжүүлэх, өөрчлөх боломжтой ил тод бүтэцтэй.",
  // },
  {
    question: "Аль аль платформд ажилладаг уу?",
    answer:
      "Бид responsive буюу бүх төхөөрөмжид (компьютер, таблет, утас) тохирсон вэб бүтээдэг. Шаардлагатай үед mobile app хувилбарыг ч хийж өгөх боломжтой.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      {/* ---------- Header ---------- */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:h-16 md:px-8">
          <a
            href="#"
            className="flex items-center gap-2 font-mono text-xs font-medium tracking-[0.2em]"
          >
            <span className="grid h-6 w-6 place-items-center rounded-sm bg-[var(--accent)] text-[var(--accent-foreground)]">
              <SparkleIcon className="h-3.5 w-3.5" />
            </span>
            HAPPY SOLUTIONS
          </a>
          <div className="flex items-center gap-4">
            <nav
              className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] sm:flex"
              aria-label="Гол навигаци"
            >
              <a href="#services" className="transition-colors hover:text-[var(--foreground)]">
                Үйлчилгээ
              </a>
              <a href="#features" className="transition-colors hover:text-[var(--foreground)]">
                Онцлог
              </a>
              <a href="#process" className="transition-colors hover:text-[var(--foreground)]">
                Процесс
              </a>
              <a href="#faq" className="transition-colors hover:text-[var(--foreground)]">
                Асуулт
              </a>
              <a href="#contact" className="transition-colors hover:text-[var(--foreground)]">
                Холбоо барих
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden border-b border-[var(--border)] px-5 py-20 md:px-8 md:py-28 lg:py-36">
          {/* Grid pattern */}
          <div
            className="grid-bg pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
            aria-hidden
          />
          {/* Gradient orbs */}
          <span
            className="orb animate-float left-[5%] top-[10%] h-[280px] w-[280px] bg-[var(--accent)]"
            aria-hidden
          />
          <span
            className="orb animate-float-2 right-[10%] bottom-[5%] h-[320px] w-[320px] bg-[var(--accent)]"
            aria-hidden
          />

          <div className="relative mx-auto max-w-6xl">
            {/* Live status badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <span>Шинэ төсөл хүлээж авч байна</span>
            </div>

            <h1 className="mt-7 max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Ирээдүйг{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-tr from-[var(--accent)] to-[var(--foreground)] bg-clip-text text-transparent">
                  тодорхойл.
                </span>
                <svg
                  viewBox="0 0 200 12"
                  className="absolute -bottom-1 left-0 w-full text-[var(--accent)]"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 8 Q 50 2, 100 6 T 198 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              {/* болго. */}
              <br />
              Ажлыг{" "}
              <span className="text-[var(--muted)]">хялбар</span> болго.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Бид дижитал орчинд шуурхай, ойлгомжтой, чанартай бүтээгдэхүүн хөгжүүлдэг.
              Санаагаа хэлээрэй — бид түүнийг бодит шийдэл болгоно.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#services" variant="primary" className="shine-on-hover">
                <span className="flex items-center gap-2">
                  Шийдлүүдийг үзэх
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Button>
              <Button href="#contact" variant="ghost">
                Төсөл ярилцах
              </Button>
            </div>

            {/* Trust strip */}
            <div className="mt-14 grid grid-cols-2 gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-1 bg-[var(--surface)] p-5"
                >
                  <span className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {s.value}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Tech Marquee ---------- */}
        <section className="border-b border-[var(--border)] py-2">
          <div className="mx-auto max-w-7xl">
            <Marquee items={techStack} />
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section
          id="services"
          className="scroll-mt-16 border-b border-[var(--border)] px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionLabel>Юу хийдэг вэ</SectionLabel>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                  Зөвхөн нэг чиглэл биш —{" "}
                  <span className="text-[var(--muted)]">
                    платформ бүрт зориулсан тод шийдэл.
                  </span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)] md:text-base">
                Бид өөрсдийн бүтээгдэхүүнээс гадна танай бизнест зориулсан захиалгат
                төслийг ч хийж өгөх боломжтой.
              </p>
            </div>

            <div className="mt-14 grid gap-px bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <ServiceCard
                  key={s.title}
                  index={String(i + 1).padStart(2, "0")}
                  title={s.title}
                  description={s.description}
                  href={s.href}
                  linkLabel={s.linkLabel}
                  icon={s.icon}
                  tag={s.tag}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Features (Why us) ---------- */}
        <section
          id="features"
          className="scroll-mt-16 border-b border-[var(--border)] px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <SectionLabel>Яагаад бид</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Чанартай бүтээгдэхүүн —{" "}
                  <span className="text-[var(--muted)]">үр дүнтэй хамтын ажиллагаа.</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                  Бид зөвхөн код бичдэг баг биш. Бид таны бизнесийн зорилгод нийцсэн,
                  урт хугацаанд үр дүн авчрах шийдлийг хамт төлөвлөж бүтээдэг.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Тодорхой хугацааны хүргэлт",
                    "Нээлттэй харилцаа, явц тайлагнал",
                    // "Кодын бүрэн өмчлөл",
                    "Хүргэсний дараах дэмжлэг",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm md:text-base">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--accent)] text-[var(--accent-foreground)]">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-7">
                <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2">
                  {features.map((f) => (
                    <article
                      key={f.title}
                      className="group bg-[var(--surface)] p-6 transition-colors hover:bg-[var(--surface-2)]"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                        {f.icon}
                      </span>
                      <h3 className="mt-5 text-base font-semibold tracking-tight md:text-lg">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                        {f.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Process ---------- */}
        <section
          id="process"
          className="relative scroll-mt-16 overflow-hidden border-b border-[var(--border)] px-5 py-20 md:px-8 md:py-28"
        >
          <div
            className="dot-bg pointer-events-none absolute inset-0 opacity-40"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionLabel>Хэрхэн ажилладаг вэ</SectionLabel>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight md:text-5xl">
                  Дөрвөн алхамт{" "}
                  <span className="text-[var(--muted)]">шуурхай процесс.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)]">
                Эхний харилцаанаас хүргэлт хүртэл — тодорхой, хариуцлагатай ажлын
                урсгалаар явдаг.
              </p>
            </div>

            <div className="mt-14 grid gap-px bg-[var(--border)] md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <article
                  key={step.step}
                  className="group relative overflow-hidden bg-[var(--surface)] p-6 md:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--muted)]">
                      {step.step}
                    </span>
                    {i < processSteps.length - 1 ? (
                      <ArrowRightIcon className="h-4 w-4 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" />
                    ) : (
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--accent)] text-[var(--accent-foreground)]">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Testimonial / CTA strip ---------- */}
        <section className="border-b border-[var(--border)] bg-[var(--surface)] px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex items-center justify-center gap-1 text-[var(--accent)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-2xl font-medium leading-snug tracking-tight md:text-4xl">
              <span className="text-[var(--muted)]">&ldquo;</span>
              Энгийн санаагаа Happy Solutions-той хуваалцаад,{" "}
              <span className="text-[var(--muted)]">
                бодитой ажилладаг бүтээгдэхүүн болж буцаад
              </span>{" "}
              ирсэн.
              <span className="text-[var(--muted)]">&rdquo;</span>
            </p>
            <div className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
              <span className="h-px w-8 bg-[var(--border-strong)]" />
              Хамтрагч хэрэглэгч
              <span className="h-px w-8 bg-[var(--border-strong)]" />
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section
          id="faq"
          className="scroll-mt-16 border-b border-[var(--border)] px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel>Түгээмэл асуулт</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Хариулт олох нь{" "}
                <span className="text-[var(--muted)]">амархан.</span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                Хэрвээ хариулт олдоогүй бол шууд бичээрэй — бид 24 цагийн дотор
                хариу өгөх болно.
              </p>
              <Button href="#contact" variant="ghost" className="mt-6">
                Асуулт илгээх
              </Button>
            </div>
            <div className="md:col-span-8">
              <FAQ items={faqs} />
            </div>
          </div>
        </section>

        <ContactEmailSection />
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <a
                href="#"
                className="flex items-center gap-2 font-mono text-xs font-medium tracking-[0.2em]"
              >
                <span className="grid h-6 w-6 place-items-center rounded-sm bg-[var(--accent)] text-[var(--accent-foreground)]">
                  <SparkleIcon className="h-3.5 w-3.5" />
                </span>
                HAPPY SOLUTIONS
              </a>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
                Бид дижитал орчинд шуурхай, ойлгомжтой бүтээгдэхүүн хөгжүүлдэг
                жижиг, гэхдээ хүчирхэг баг.
              </p>
              <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]">
                <span className="h-2 w-2 animate-pulse-dot rounded-full bg-[var(--accent)]" />
                Шинэ төсөл хүлээж байна
              </div>
            </div>

            <div className="md:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                Үйлчилгээ
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a href="#services" className="hover:text-[var(--accent)]">
                    Бүтээгдэхүүн
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[var(--accent)]">
                    Онцлог
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-[var(--accent)]">
                    Ажлын урсгал
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[var(--accent)]">
                    Түгээмэл асуулт
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                Холбоо барих
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:happysolutionsllc354@gmail.com"
                    className="hover:text-[var(--accent)]"
                  >
                    happysolutionsllc354@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[var(--accent)]">
                    Төсөл ярилцах →
                  </a>
                </li>
              </ul>
              <div className="mt-6 flex items-center gap-2">
                {/* <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-9 w-9 place-items-center rounded-md border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M12 .5C5.6.5.5 5.6.5 12c0 5 3.3 9.3 7.9 10.8.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.6 18.4.5 12 .5Z" />
                  </svg>
                </a> */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-9 w-9 place-items-center rounded-md border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M13.5 22v-9h3l.5-3.5h-3.5v-2c0-1 .3-1.7 1.7-1.7H17V2.2C16.6 2.1 15.4 2 14 2c-3 0-5 1.8-5 5.1V9.5H6V13h3v9h4.5Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-9 w-9 place-items-center rounded-md border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.5h4V21H3V9.5Zm6 0h3.8v1.6h.1A4.2 4.2 0 0 1 16.5 9c4 0 4.5 2.6 4.5 5.9V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9V9.5Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/happy_solutions_"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-9 w-9 place-items-center rounded-md border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="Instagram"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="h-4 w-4" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Happy Solutions · Бүх эрх хуулиар хамгаалагдсан.</p>
            <p className="font-mono text-xs tracking-wider">
              Solutions · Minimal · Fast
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
