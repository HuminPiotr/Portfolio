import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email, phone } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Zapraszam do kontaktu!" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="contact-wrapper__email"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {email}
            </a>
            <br/>
            <p className="contact-wrapper__phone">
            <img className="phoneIcon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI3LjQ0MiAyNy40NDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggZD0iTTE5LjQ5NCwwSDcuOTQ4QzYuODQzLDAsNS45NTEsMC44OTYsNS45NTEsMS45OTl2MjMuNDQ2YzAsMS4xMDIsMC44OTIsMS45OTcsMS45OTcsMS45OTdoMTEuNTQ2ICAgYzEuMTAzLDAsMS45OTctMC44OTUsMS45OTctMS45OTdWMS45OTlDMjEuNDkxLDAuODk2LDIwLjU5NywwLDE5LjQ5NCwweiBNMTAuODcyLDEuMjE0aDUuN2MwLjE0NCwwLDAuMjYxLDAuMjE1LDAuMjYxLDAuNDgxICAgcy0wLjExNywwLjQ4Mi0wLjI2MSwwLjQ4MmgtNS43Yy0wLjE0NSwwLTAuMjYtMC4yMTYtMC4yNi0wLjQ4MkMxMC42MTIsMS40MjksMTAuNzI3LDEuMjE0LDEwLjg3MiwxLjIxNHogTTEzLjcyMiwyNS40NjkgICBjLTAuNzAzLDAtMS4yNzUtMC41NzItMS4yNzUtMS4yNzZzMC41NzItMS4yNzQsMS4yNzUtMS4yNzRjMC43MDEsMCwxLjI3MywwLjU3LDEuMjczLDEuMjc0UzE0LjQyMywyNS40NjksMTMuNzIyLDI1LjQ2OXogICAgTTE5Ljk5NSwyMS4xSDcuNDQ4VjMuMzczaDEyLjU0N1YyMS4xeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" />
            <a
              href={`tel:+48${phone}`}>
                {phone}
            </a>
            </p>

          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
