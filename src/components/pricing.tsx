import { useState } from 'react';
import { ArrowUpRight, Check, Crown, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Period = 'Monthly' | 'Yearly' | 'Lifetime';
type Currency = 'USD' | 'NGN' | 'EUR';
const rates = { USD: 1, NGN: 1600, EUR: 0.92 };
const plans = [
 { name: 'Free', description: 'Get a feel for your next edge.', icon: Target, prices: { Monthly: 0, Yearly: 0, Lifetime: 0 }, features: ['Daily single pick', 'Public results & hit calendar', 'Basic performance overview', 'All sports coverage'] },
 { name: 'Premium', description: 'More insight. A smarter approach.', icon: Zap, prices: { Monthly: 15, Yearly: 150, Lifetime: 349 }, features: ['Everything in Free', 'Detailed prediction analysis', '2 personal trackers', 'Advanced performance analytics', 'New-pick alerts'] },
 { name: 'Pro', description: 'The full toolkit. No tracker limits.', icon: Crown, prices: { Monthly: 29, Yearly: 290, Lifetime: 649 }, features: ['Everything in Premium', 'Unlimited personal trackers', 'Unlimited rollover trackers', 'Unlimited Edidangle trackers', 'Your complete performance history'] },
];

export function Pricing({ onStart }: { onStart: () => void }) {
 const [period, setPeriod] = useState<Period>('Monthly');
 const [currency, setCurrency] = useState<Currency>('USD');
 const money = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency, currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0 }).format(value * rates[currency]);
 return <section id="pricing" className="section">
  <div className="pricing-heading"><div className="eyebrow">YOUR GAME. YOUR PLAN.</div><h2>A sharper edge, at every level.</h2><p>Start free. Unlock more when you’re ready.</p></div>
  <div className="pricing-controls"><div className="segmented" aria-label="Billing period">{(['Monthly','Yearly','Lifetime'] as Period[]).map(p => <Button key={p} variant={period === p ? 'segmentActive' : 'segment'} onClick={() => setPeriod(p)} aria-pressed={period === p}>{p}{p === 'Yearly' && <span className="text-primary text-[9px]">−17%</span>}</Button>)}</div><select className="currency-select" aria-label="Display currency" value={currency} onChange={e => setCurrency(e.target.value as Currency)}><option value="USD">USD · $</option><option value="NGN">NGN · ₦</option><option value="EUR">EUR · €</option></select></div>
  <p className="price-note">Suggested launch pricing{currency !== 'USD' ? ' · Estimated equivalents, not live rates ($1 ≈ ₦1,600 / €0.92)' : ''}{period === 'Lifetime' ? ' · One-time launch offer' : ''}</p>
  <div className="pricing-grid">{plans.map((plan,i) => <article key={plan.name} className={`price-card ${i === 1 ? 'featured' : ''}`}>
   {i === 1 && <span className="popular">THE SWEET SPOT</span>}<div className="plan-name"><h3>{plan.name}</h3><plan.icon /></div><p className="plan-desc">{plan.description}</p><div className={`amount ${currency === 'NGN' ? 'large-currency' : ''}`}>{money(plan.prices[period])}<span>{i === 0 ? '/ forever' : period === 'Lifetime' ? 'one time' : period === 'Yearly' ? '/ year' : '/ month'}</span></div><p className="bill-note">{i === 0 ? 'No subscription required' : period === 'Lifetime' ? 'Pay once. Keep your plan.' : period === 'Yearly' ? 'Two months included compared with monthly' : 'Billed monthly. Cancel anytime.'}</p><Button variant={i === 1 ? 'hero' : 'heroOutline'} className="w-full h-11" onClick={onStart}>{i === 0 ? 'Get started free' : 'Start 7-day free trial'}<ArrowUpRight /></Button><ul className="plan-features">{plan.features.map(f => <li key={f}><Check />{f}</li>)}</ul>
  </article>)}</div><p className="trial-note">7 days. Every premium feature. Unlimited trackers during your trial.</p>
 </section>;
}