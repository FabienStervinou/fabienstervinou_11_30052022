import './style.scss';
import { Logo } from '../../components/logo/index.js';

export function Footer () {
  return (
    <footer>
      <Logo/>
      <div className="copyright">
        © 2020 Kasa. All rights reserved
      </div>
    </footer>
  )
}
