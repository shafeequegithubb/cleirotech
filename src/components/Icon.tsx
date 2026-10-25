import {
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  Smartphone,
  Code,
  Palette,
  Megaphone,
  Gem,
  ShoppingCart,
  Workflow,
  Wrench,
  type LucideProps,
} from "lucide-react";

const map = {
  target: Target,
  lightbulb: Lightbulb,
  chart: TrendingUp,
  users: Users,
  smartphone: Smartphone,
  code: Code,
  palette: Palette,
  megaphone: Megaphone,
  gem: Gem,
  cart: ShoppingCart,
  workflow: Workflow,
  wrench: Wrench,
} as const;

type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Component = map[name as IconName] ?? Target;
  return <Component {...props} />;
}
