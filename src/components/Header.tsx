import '../style/header.scss';
import Logo from '../assets/Logo.svg';

interface ICompanyProps {
  companyName: string;
  companyUrl: string;
}

const currentYear = new Date().getFullYear();

export function Header(Props: ICompanyProps) {
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <p>
            {currentYear} @
            <a
              href={Props.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Props.companyName}
            </a>
          </p>
        </div>
        <div className="header-right">
          <img className="website-logo" src={Logo}></img>
        </div>
      </div>
    </header>
  );
}
