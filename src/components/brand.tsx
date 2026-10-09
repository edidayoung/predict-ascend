import logo from '@/assets/logo.png.asset.json';

export function Brand() {
  return <a href="/" className="brand" aria-label="PrematchPredicts home"><img className="brand-mark" src={logo.url} alt="" width="42" height="38" /><span>Prematch<span>Predicts</span></span></a>;
}