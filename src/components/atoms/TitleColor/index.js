import React from 'react';
import PropTypes from 'prop-types';
import {translate} from '~/locales';

import {Box, Container, Strong, Title, StyledText} from './index.style';

const TitleColor = ({color}) => (
  <Container>
    <Box color={color} />
    <Title>
      <Strong>{translate('titleSelect')}</Strong>
      {!!translate('subtitleSelect') && (
        <StyledText>{translate('subtitleSelect')}</StyledText>
      )}
    </Title>
  </Container>
);

TitleColor.propTypes = {
  color: PropTypes.string,
};

TitleColor.defaultProps = {
  color: '#ffffff',
};

export default TitleColor;
