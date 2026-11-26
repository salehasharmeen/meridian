import Sol from "@/components/art/Sol";
import Button from "@/components/ui/Button";
import ProductPreview from "./ProductPreview";

export default function Hero() {
  return (
    <section id="top" className="-mt-[72px] overflow-hidden bg-mint pt-[72px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-16 lg:grid-cols-[1.05fr_1fr] lg:pt-20">
        <div>
          <h1 className="animate-rise text-5xl font-extrabold leading-[0.98] sm:text-6xl xl:text-7xl">
            Know where your revenue is heading before the month ends.
          </h1>
          <p className="mt-6 max-w-lg animate-rise text-lg leading-relaxed text-muted [animation-delay:120ms]">
            Meridian connects to Stripe, pulls in every plan and renewal, and puts MRR, churn and growth on one screen
            your whole team can read.
          </p>
          <div className="mt-8 flex animate-rise flex-wrap gap-3 [animation-delay:240ms]">
            <Button href="#pricing" size="lg">
              Start 14-day free trial
            </Button>
            <Button href="/dashboard" variant="secondary" size="lg">
              View live demo
            </Button>
          </div>
          <p className="mt-4 animate-rise text-sm text-muted [animation-delay:320ms]">No credit card required.</p>
        </div>

        <div className="relative animate-rise pb-4 pt-32 [animation-delay:200ms]">
          <div className="absolute right-0 top-10 aspect-square w-[78%] rounded-full bg-lime" aria-hidden="true" />
          <Sol className="absolute right-6 top-0 z-20 w-32 animate-float sm:w-36" />
          <div className="relative z-10">
            <ProductPreview />
          </div>
          <p className="absolute -left-8 top-48 z-20 hidden -rotate-6 rounded-2xl bg-coral px-4 py-2 text-sm font-bold sm:block">
            Churn down 0.6%
          </p>
        </div>
      </div>
    </section>
  );
}
