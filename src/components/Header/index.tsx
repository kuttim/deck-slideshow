import Logo from '../../assets/Logo.svg';

interface ICompanyDetailsProps {
  name: string;
  url: string;
}
const currentYear = new Date().getFullYear();

export const Header = (props: ICompanyDetailsProps) => (
  <header>
    <div className="header">
      <div className="header-left">
        <p>
          {currentYear} @
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.name}
          </a>
        </p>
      </div>
      <div className="header-right">
        <img className="website-logo" src={Logo}></img>
      </div>
    </div>
  </header>
);
