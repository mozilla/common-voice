import * as React from 'react';
import {
  ConnectedDownloadForm,
  DatasetsIntro,
  DatasetsDescription,
} from '../../pages/datasets/dataset-info';
import Subscribe from '../../pages/datasets/subscribe';
import { Localized, withLocalization } from '@fluent/react';
import { LinkButton, LabeledSelect } from '../../ui/ui';
import { CloudIcon, ChevronRight } from '../../ui/icons';
import urls from '../../../urls';
import { PageContentType } from './types';
import { localeConnector } from '../../locale-helpers';
import KioskCard from './kiosk-card';
import './demo-datasets.css';

const getDatasetsComponents = (): PageContentType => {
  const ContentComponent = ({ getString }: { getString: Function }) => {
    return (
      <div id="demo-datasets-content-container">
        <div className="grey-bg">
          <div className="demo-datasets-intro">
            <Localized id="about-dataset-new">
              <h1 id="demo-datasets--download__header" />
            </Localized>
            <DatasetsIntro demoMode={true} />
          </div>
          <div className="demo-datasets--download__sub">
            <ConnectedDownloadForm {...{ getString }} />
          </div>
        </div>
        <div className="white-bg">
          <div className="demo-datasets--eofyr">
            <hr id="hr-gradient-fill" />
            <Localized id="demo-eofy-header">
              <h1 id="demo-datasets--eofyr__header" />
            </Localized>
            <Localized id="demo-eofy-sub_header">
              <p id="demo-datasets--eofyr__subheader" />
            </Localized>
            <DatasetsDescription />
          </div>
        </div>
        <Subscribe demoMode={true} />
      </div>
    );
  };

  const CardComponent = () => (
    <>
      <KioskCard.Top>
        <div id="inner-circle" className="demo-datasets-kiosk-top-icon-circle">
          <CloudIcon />
        </div>
        <div
          id="outer-circle"
          className="demo-datasets-kiosk-top-icon-circle"></div>
        <div
          id="circle-shadow"
          className="demo-datasets-kiosk-top-icon-circle"></div>
      </KioskCard.Top>
      <KioskCard.Body>
        <div id="demo-datasets--card__body">
          <Localized id="demo-language-select-card-header">
            <h2 />
          </Localized>
          <Localized id="demo-language-select-card-body">
            <p />
          </Localized>
        </div>
      </KioskCard.Body>
      <KioskCard.Bottom>
        <LinkButton
          id="demo-datasets-card--next-button"
          to={urls.DEMO_DASHBOARD}
          rounded>
          <Localized id="card-button-next">
            <span />
          </Localized>
          <ChevronRight />
        </LinkButton>
      </KioskCard.Bottom>
    </>
  );

  return {
    Content: localeConnector(withLocalization(ContentComponent)),
    Card: withLocalization(CardComponent),
  };
};

export default getDatasetsComponents;
