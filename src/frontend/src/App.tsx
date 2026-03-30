import {
  Cake,
  Coffee,
  IceCream,
  MapPin,
  Menu,
  Phone,
  Pizza,
  Sandwich,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const menuItems = [
  {
    icon: Coffee,
    name: "Classic Coffee",
    description:
      "Rich espresso with velvety steamed milk — the perfect morning ritual.",
    price: "₹120",
    gradient: "from-amber-900 to-amber-700",
  },
  {
    icon: IceCream,
    name: "Cold Coffee",
    description:
      "Chilled espresso over ice, blended with cream for a refreshing lift.",
    price: "₹150",
    gradient: "from-stone-700 to-amber-600",
  },
  {
    icon: Sandwich,
    name: "Sandwich",
    description:
      "Grilled sourdough loaded with fresh veggies, cheese, and our secret sauce.",
    price: "₹180",
    gradient: "from-yellow-800 to-orange-700",
  },
  {
    icon: Pizza,
    name: "Pizza",
    description:
      "Thin-crust artisan pizza with mozzarella, basil, and seasonal toppings.",
    price: "₹220",
    gradient: "from-red-900 to-orange-800",
  },
  {
    icon: Cake,
    name: "Desserts",
    description:
      "House-baked pastries, tiramisu, and daily specials from our kitchen.",
    price: "₹100",
    gradient: "from-pink-900 to-rose-700",
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "MENU", href: "#menu" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* ── Sticky Header ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "#1f140e" : "rgba(20,12,8,0.45)",
          backdropFilter: scrolled ? "none" : "blur(4px)",
          boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
            data-ocid="nav.link"
          >
            <img
              src="/assets/generated/jaybuck-logo-real.jpg"
              alt="Jay Buck Cafe Logo"
              className="w-10 h-10 object-contain rounded-full"
            />
            <span
              className="font-display font-bold text-lg tracking-wide"
              style={{ color: "#f5efe6" }}
            >
              Jay Buck Cafe
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 hover:text-cafe-amber"
                style={{ color: "#f5efe6" }}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded"
            style={{ color: "#f5efe6" }}
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
            type="button"
            data-ocid="nav.toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div
            className="md:hidden px-6 pb-6 flex flex-col gap-4"
            style={{ background: "#1f140e" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold tracking-[0.18em] uppercase py-2 border-b"
                style={{
                  color: "#f5efe6",
                  borderColor: "rgba(199,146,74,0.25)",
                }}
                onClick={() => setMobileMenuOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero Section ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
          }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,12,8,0.72) 0%, rgba(20,12,8,0.55) 50%, rgba(20,12,8,0.78) 100%)",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs font-semibold tracking-[0.35em] uppercase mb-6"
            style={{ color: "#c7924a" }}
          >
            Est. 2019 · Freshly Brewed Daily
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="font-display font-bold text-5xl md:text-7xl leading-tight mb-6"
            style={{ color: "#f5efe6" }}
          >
            Welcome to
            <br />
            <span style={{ color: "#d2a15a" }}>Jay Buck Cafe</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-xl md:text-2xl mb-10 font-light tracking-wide"
            style={{ color: "#e0d4c5" }}
          >
            Best Coffee &amp; Chill Vibes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#menu"
              className="px-8 py-4 rounded font-semibold text-sm tracking-widest uppercase transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{ background: "#c7924a", color: "#1f140e" }}
              data-ocid="hero.primary_button"
            >
              Explore Menu
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded font-semibold text-sm tracking-widest uppercase border-2 transition-all duration-200 hover:bg-white/10 active:scale-95"
              style={{ borderColor: "#f5efe6", color: "#f5efe6" }}
              data-ocid="hero.secondary_button"
            >
              Visit Us
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
          style={{ color: "#c7924a" }}
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#b9a89a" }}
          >
            Scroll
          </span>
          <div className="w-px h-8" style={{ background: "#c7924a" }} />
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" style={{ background: "#f7efe3" }}>
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            {/* Left: Text */}
            <div>
              <p
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
                style={{ color: "#c7924a" }}
              >
                Our Story
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight"
                style={{ color: "#1f140e" }}
              >
                A Corner of Warmth in Every Cup
              </h2>
              <div
                className="space-y-5 text-base leading-relaxed"
                style={{ color: "#5a3e32" }}
              >
                <p>
                  Jay Buck Cafe was born from a simple belief: that a great cup
                  of coffee and a welcoming space can transform an ordinary day.
                  Tucked into a quiet corner of the neighbourhood, we opened our
                  doors in 2019 with just a handful of recipes and a whole lot
                  of heart.
                </p>
                <p>
                  Every bean is sourced with care — single-origin arabica from
                  small farms in Coorg and Araku Valley. Our baristas train for
                  months before pulling their first espresso shot, because we
                  believe craft matters in every detail.
                </p>
                <p>
                  Whether you come for a quiet morning solo or a long catch-up
                  with friends, we want Jay Buck to feel like a second home —
                  worn-in, unhurried, and always smelling wonderfully of fresh
                  brew.
                </p>
              </div>
            </div>

            {/* Right: Decorative quote block */}
            <div
              className="rounded-lg p-10 md:p-12 relative overflow-hidden"
              style={{ background: "#1f140e" }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                style={{
                  background: "#c7924a",
                  transform: "translate(30%, -30%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10"
                style={{
                  background: "#d2a15a",
                  transform: "translate(-30%, 30%)",
                }}
              />
              <span
                className="font-display text-8xl leading-none block mb-4"
                style={{ color: "#c7924a", opacity: 0.4 }}
              >
                &ldquo;
              </span>
              <blockquote
                className="font-display text-2xl md:text-3xl font-semibold italic leading-snug mb-6"
                style={{ color: "#f5efe6" }}
              >
                Good coffee shared with a friend is happiness tasted and time
                well spent.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-px" style={{ background: "#c7924a" }} />
                <span
                  className="text-sm tracking-widest uppercase font-semibold"
                  style={{ color: "#b9a89a" }}
                >
                  The Jay Buck Way
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Menu Section ── */}
      <section id="menu" style={{ background: "#1f140e" }}>
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: "#c7924a" }}
            >
              What We Serve
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-bold"
              style={{ color: "#f5efe6" }}
            >
              Our Menu
            </h2>
          </motion.div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="menu.list"
          >
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-lg overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
                style={{ background: "#2a1a12" }}
                data-ocid={`menu.item.${i + 1}`}
              >
                {/* Card header with gradient */}
                <div
                  className={`h-36 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 70%, rgba(199,146,74,0.5) 0%, transparent 70%)",
                    }}
                  />
                  <item.icon
                    size={48}
                    color="rgba(245,239,230,0.8)"
                    strokeWidth={1.25}
                  />
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className="font-display text-xl font-semibold"
                      style={{ color: "#f5efe6" }}
                    >
                      {item.name}
                    </h3>
                    <span
                      className="font-bold text-lg ml-4 shrink-0"
                      style={{ color: "#d2a15a" }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#b9a89a" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="contact" style={{ background: "#f3e6d6" }}>
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: "#c7924a" }}
            >
              Find Us
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#1f140e" }}
            >
              Visit Us
            </h2>
            <p className="text-base mb-4" style={{ color: "#5a3e32" }}>
              We're open every day — come as you are.
            </p>
            <p className="text-sm mb-12" style={{ color: "#8a7666" }}>
              Mon–Sun: 8:00 AM – 10:00 PM
            </p>

            {/* Phone */}
            <div
              className="inline-flex flex-col items-center gap-6 rounded-xl p-10 mb-8 shadow-warm"
              style={{
                background: "#fff8f2",
                border: "1px solid rgba(199,146,74,0.2)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(199,146,74,0.15)" }}
              >
                <Phone size={28} style={{ color: "#c7924a" }} />
              </div>
              <div>
                <p
                  className="text-sm tracking-widest uppercase mb-2"
                  style={{ color: "#8a7666" }}
                >
                  Call us anytime
                </p>
                <p
                  className="font-display text-4xl md:text-5xl font-bold tracking-wide"
                  style={{ color: "#1f140e" }}
                >
                  8849120626
                </p>
              </div>
              <a
                href="tel:8849120626"
                className="px-10 py-4 rounded font-semibold text-sm tracking-widest uppercase transition-all duration-200 hover:brightness-110 active:scale-95 flex items-center gap-2"
                style={{ background: "#c7924a", color: "#1f140e" }}
                data-ocid="contact.primary_button"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>

            {/* Address */}
            <div
              className="inline-flex flex-col items-center gap-4 rounded-xl p-8"
              style={{
                background: "#fff8f2",
                border: "1px solid rgba(199,146,74,0.2)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(199,146,74,0.15)" }}
              >
                <MapPin size={28} style={{ color: "#c7924a" }} />
              </div>
              <div>
                <p
                  className="text-sm tracking-widest uppercase mb-2"
                  style={{ color: "#8a7666" }}
                >
                  Our Location
                </p>
                <p
                  className="font-display text-2xl font-bold"
                  style={{ color: "#1f140e" }}
                >
                  K.K. Nagar, Ghatlodia
                </p>
                <p
                  className="text-base font-semibold mt-1"
                  style={{ color: "#5a3e32" }}
                >
                  Ahmedabad
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: "#1f140e" }}>
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center gap-6 text-center">
          <img
            src="/assets/generated/jaybuck-logo-real.jpg"
            alt="Jay Buck Cafe"
            className="w-20 h-20 object-contain rounded-full"
          />
          <h3
            className="font-display text-2xl font-bold tracking-wide"
            style={{ color: "#f5efe6" }}
          >
            Jay Buck Cafe
          </h3>
          <p className="text-sm" style={{ color: "#b9a89a" }}>
            Best Coffee &amp; Chill Vibes
          </p>
          <div
            className="w-16 h-px"
            style={{ background: "rgba(199,146,74,0.4)" }}
          />
          <p className="text-xs" style={{ color: "#8a7666" }}>
            &copy; {new Date().getFullYear()} Jay Buck Cafe. All rights
            reserved.
          </p>
          <p className="text-xs" style={{ color: "#5a3e32" }}>
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-cafe-amber transition-colors"
              style={{ color: "#8a7666" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
