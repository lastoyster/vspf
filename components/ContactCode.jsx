import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'nitinranganath.me',
    href: 'https://nitinranganath.me',
  },
  {
    social: 'email',
    link: 'kpk376566@gmail.com    ',
    href: 'mailto:kpk376566@gmail.com',
  },
  {
    social: 'lastoyster',
    link: 'itsnitinr',
    href: 'https://github.com/lastoyster',
  },
  {
    social: 'linkedin',
    link: 'pratiksha-kadam',
    href: 'https://www.linkedin.com/in/pratiksha-kadam-7706a3226/',
  },
  {
    social: 'twitter',
    link: 'iamnitinr',
    href: 'https://www.twitter.com/iamnitinr',
  },
  {
    social: 'codewars',
    link: 'lastoyster',
    href: 'https://www.codewars.com/users/lastoyster',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
